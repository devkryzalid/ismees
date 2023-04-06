/*
  AjaxForm class
  This script wraps the structure of a page to automate ajax data fetching on form change.
  It also manages pagination and updates the current url params to match selected fields.

  The page must contain the following elements:
    - A form (default #ajax-form)
    - A hidden input (default #ajax-settings) inside the form element with options (data-url, data-limit, etc)
    - An ajax outer container (default #ajax-content), containing an element where data will be loaded (default .inner)

  Elements ids and classes can be overridden by passing their value to the constructor
*/

// Dependancies
import axios from 'axios';

// Default values for DOM elements ids
const defaultFormId = 'ajax-form';
const defaultContainerId = 'ajax-content';
const defaultSettingsId = 'ajax-settings';
const paginationId = 'ajax-pagination';
const clearFiltersId = 'clear-filters';
const filtersCountId = 'filters-count';

// Default values for DOM elements classes
const loadingClass = 'loading';
const innerClass = 'inner';

export default class AjaxForm {
  // Necessary DOM containers for form and ajax html results
  formContainer;
  contentContainer;
  innerContainer;

  // Optional DOM elements
  clearButton;
  filtersCount;
  pagination;

  // Status 
  loading = false;
  error = false;

  // Properties
  url;
  limit;
  currentPage;
  nbPages;
  previousParams;

  // Callbacks
  onDataChange = () => { };
  onLoadChange = () => { };

  constructor(
    // Custom element names can be passed in constructor
    { formId = defaultFormId, containerId = defaultContainerId, settingsId = defaultSettingsId } = {},
    // ... as well as callback functions
    onDataChangeCallback = null, onLoadChangeCallback = null
  ) {
    // Assign and verify necessary DOM elements, abort if any one is missing
    if (!this.assignDomElements(formId, containerId)) return false;
    
    // Get form settings from hidden input
    const { url, limit = 9 } = document.getElementById(settingsId)?.dataset || {};
    this.limit = limit;
    this.url = url;
    if (!this.url) return console.log('Error - Ajax url not found');

    // Attach callback functions if available
    if (onDataChangeCallback) this.onDataChange = onDataChangeCallback; // Called when ajax data is changed
    if (onLoadChangeCallback) this.onLoadChange = onLoadChangeCallback; // Called when loading status is changed

    // Add change listener to form checkboxes
    this.formContainer.addEventListener('change', this.onFormChange);

    // Apply filters from url query string
    this.applyFiltersFromUrl();

    // Initialize pagination for non-ajax first load (optional)
    this.initPagination();

    // Add click listener to clear button (optional)
    if (this.clearButton) this.clearButton.addEventListener('click', this.clearFilters);

    // Set clear button visibility (optional)
    this.toggleClearButton();
    
    // Set filters counter on button (optional)
    this.setActiveFiltersCount();
  }

  // Set form and container DOM elements, and returns false if one of them can't be found
  assignDomElements = (formId, containerId) => {
    this.formContainer = document.getElementById(formId);
    if (!this.formContainer) console.log('Error - Ajax form container #' + formId + ' not found');

    this.contentContainer = document.getElementById(containerId);
    if (!this.contentContainer) console.log('Error - Ajax content container #' + containerId + ' not found');

    this.innerContainer = this.contentContainer.querySelector('.' + innerClass);
    if (!this.innerContainer) console.log('Error - Ajax content container .' + innerClass + ' not found');

    // Optional elements
    this.clearButton = document.getElementById(clearFiltersId);
    this.filtersCount = document.getElementById(filtersCountId);
    this.pagination = document.getElementById(paginationId);

    return !!(this.formContainer && this.contentContainer && this.innerContainer);
  }

  // Main form change callback, called on every checkbox event
  onFormChange = async () => {
    this.updateContentHtml(); // Clear current html
    this.scrollToContent();
    this.toggleLoading(true);

    const params = this.getFormData();
    const { data } = await this.fetchAjax(params);
    await this.timeout(300);  // Optionnal - delay before loader fadeout
    this.updateCurrentUrl(params);

    this.toggleLoading(false);
    this.updateContentHtml(data);

    // Optional
    this.onDataChange(data);
    this.toggleClearButton();
    this.setActiveFiltersCount();
  }

  // Return all form data and params in object format
  getFormData = () => {
    // Fetch all current form values
    const pairs = new FormData(this.formContainer).entries();
    const params = [...pairs].reduce((params, [key, value]) => ({ ...params, [key]: [...(params[key] || []), value] }), {});

    // Reset page to 1 if filters have been modified
    const jsonParams = JSON.stringify(params);
    if (this.previousParams && this.previousParams !== jsonParams) this.currentPage = 1;
    this.previousParams = jsonParams;
    
    // Add paged param if needed
    if (this.currentPage > 1) params.pg = this.currentPage;
    return { ...params, limit: this.limit };
  }

  // Parse current url and check all checkboxes accordingly
  applyFiltersFromUrl = () => {
    new URL(window.location.href).searchParams.forEach((values, param) => {
      // Change page if in params
      if (param === 'pg') this.currentPage = values;
      // Checkbox management
      else {
        values.split(',').forEach(id => {
          const el = document.getElementById(`${param}-${id}`);
          if (el) el.checked = true;
        });
      }
    })
  }

  // Axios ajax call
  fetchAjax = async data => {
    const query = new URLSearchParams(data).toString();
    // console.log('AJAX REQUEST:', this.url, query);

    return await axios.post(this.url, query)
      .then(response => {
        // console.log('AJAX RESPONSE:', response);
        return response;
      })
      .catch(error => {
        console.log('AJAX ERROR:', error);
        return false;
      });
  }

  // Toggle loading status, add class to container and throw callback
  toggleLoading = (isLoading = null) => {
    this.loading = isLoading === null
      ? !this.loading
      : !!isLoading;

    if (this.loading) this.contentContainer.classList.add(loadingClass);
    else this.contentContainer.classList.remove(loadingClass);

    this.onLoadChange(this.loading)
  }

  // Update the content container with new html content (or clear contents if no param)
  updateContentHtml = (html = '') => {
    this.innerContainer.innerHTML = html;
    this.initPagination();
  }
  
  // Replace current url param string with new params
  updateCurrentUrl = params => {
    // Get current URL and remove unused params
    const searchParams = new URLSearchParams(params);
    searchParams.delete('limit');

    // Build new url query string
    const urlPrefix = this.getCurrentUrlPrefix();
    const title = 'Ajax';
    const url = urlPrefix + (Object.keys(params).length ? '?' + searchParams.toString() : '');

    history.replaceState({ title, url }, title, url);
  }

  // Un-check all boxes and reload data
  clearFilters = () => {
    this.formContainer.querySelectorAll('input:checked').forEach(i => { i.checked = false; });
    this.onFormChange();
  }

  // Fetch first part of current url, and remove trailing slash
  getCurrentUrlPrefix = () => {
    const urlPrefix = window.location.href.split('?')[0];
    return urlPrefix.slice(-1) === '/' ? urlPrefix.slice(0, -1) : urlPrefix;
  }

  // Set event listeners on pagination elements
  initPagination = () => {
    // Ignore if no pagination
    if (!this.pagination) return false;

    // Set default page
    if (!this.currentPage) this.currentPage = 1;

    // Count number of pages based on the last button
    const pageButtons = this.pagination.querySelectorAll('.ajax-page');
    this.nbPages = parseInt(pageButtons[pageButtons.length - 2].innerText);

    // Set disabled class on prev/next if needed
    if (this.currentPage === 1) this.pagination.querySelector('.prev').classList.add('disabled');
    if (this.currentPage == this.nbPages) this.pagination.querySelector('.next').classList.add('disabled');
    
    // Set click listener on page buttons
    pageButtons.forEach(page => { page.addEventListener('click', e => this.pageChange(e.target)); });
  }

  // Change current page and trigger ajax fetch
  pageChange = pageElement => {
    const value = pageElement.getAttribute('value');

    // Ignore '...' buttons
    if (!['prev', 'next', 'prec', 'suiv'].includes(value) && isNaN(parseInt(value))) return;
    
    // Toggle selected classes
    document.querySelector('.ajax-page.current').classList.remove('current');
    pageElement.classList.add('current');

    // Set current page
    if (value === 'prev') 
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    else if (value === 'next') 
      this.currentPage = this.currentPage < this.nbPages ? this.currentPage + 1 : this.nbPages;
    else this.currentPage = +value;
  
    // Reload ajax content
    this.scrollToContent();
    this.onFormChange();
  }

  // Count total active filters
  countActiveFilters = () => {
    return this.formContainer.querySelectorAll('input:checked').length;
  }

  // Scroll to ajax content
  scrollToContent = () => {
    setTimeout(() => { window.scroll({ top: this.formContainer.offsetTop - 150, behavior: 'smooth' }); }, 10); 
  }
  
  // Delay helper function
  timeout = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // (Optional) Show/hide clear button depending on checked filters
  toggleClearButton = () => {
    if (!this.clearButton) return false;
    const filtersActive = !![...this.formContainer.querySelectorAll('input:checked')].length;
    this.clearButton.style.display = filtersActive ? 'block' : 'none';
  }

  // (Optional) Indicate the number of filters currently active in filtersCount element
  setActiveFiltersCount = () => {
    if (!this.filtersCount) return false;
    this.filtersCount.innerHTML = '';
    const nb = this.countActiveFilters();
    if (this.filtersCount && nb) this.filtersCount.innerHTML = `(${ nb })`;
  }
}