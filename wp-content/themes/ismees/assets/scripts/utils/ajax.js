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
import jsBlockLink from './jsBlockLink';
import moreLessButton from '../partials/cards/activity-card';

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
const resultCountClass = '.result-count';

export default class AjaxForm {
  // Necessary DOM containers for form and ajax html results
  formContainer;
  contentContainer;
  innerContainer;

  // Optional DOM elements
  clearButton;
  filtersCount;
  pagination;
  resultCounter;

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
    this.formContainer.addEventListener('change', () => { this.onFormChange()});
    this.formContainer.addEventListener('submit', (event) => { event.preventDefault(); this.onFormChange() });

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

    // Set result counter (optional)
    this.setActiveResultCount();
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
  onFormChange = async (pagement = null) => {

    // Reset all HTML only if is filter change
    if(!pagement){
      this.updateContentHtml(); // Clear current html
      this.scrollToContent('top');
      this.currentPage = 1;
      this.toggleLoading(true);
    }
    else
      this.toggleLoading(true, 'loading-alt');

    const params = this.getFormData();
    const { data } = await this.fetchAjax(params);
    await this.timeout(300);  // Optionnal - delay before loader fadeout
    this.updateCurrentUrl(params);

    this.toggleLoading(false);
    this.updateContentHtml(data.html, pagement);

    // Check if needed "next" button on new page
    this.checkPagination(data.pages_total);

    // Optional
    this.onDataChange(data);
    this.toggleClearButton();
    this.setActiveFiltersCount();
    if(data.count) {
      this.resultCounter = document.querySelectorAll(resultCountClass);
      this.setActiveResultCount(data.count);
    } 

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
    if (this.currentPage > 1) params.pagenb = this.currentPage;
    return { ...params, limit: this.limit };
  }

  // Parse current url and check all checkboxes accordingly
  applyFiltersFromUrl = () => {
    new URL(window.location.href).searchParams.forEach((values, param) => {
      // Change page if in params
      if (param === 'pagenb') this.currentPage = values;
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
  toggleLoading = (isLoading = null, type = loadingClass) => {
    let pageElement = null;
  
    if (this.pagination) {
      pageElement = this.pagination.querySelector('#next-page a');
    }
  
    this.loading = isLoading === null
      ? !this.loading
      : !!isLoading;
  
    if (this.loading) {
      this.contentContainer.classList.add(type);
      if (pageElement) {
        pageElement.classList.add('disabled');
      }
    }
    else {
      this.contentContainer.classList.remove(loadingClass);
      this.contentContainer.classList.remove('loading-alt');
      if (pageElement) {
        pageElement.classList.remove('disabled');
      }
    }
  
    this.onLoadChange(this.loading)
  }

  // Update the content container with new html content (or clear contents if no param)
  updateContentHtml = (html = '', append = false) => {
    if(append){
      this.innerContainer.insertAdjacentHTML('beforeend', html);
    }
    else{
      this.innerContainer.innerHTML = html;
    }
    new jsBlockLink();
    new moreLessButton();
  }
  
  // Replace current url param string with new params
  updateCurrentUrl = params => {
    // Get current URL and remove unused params
    const searchParams = new URLSearchParams(params);
    searchParams.delete('limit');
    searchParams.delete('pagenb');

    // Build new url query string
    const urlPrefix = this.getCurrentUrlPrefix();
    const title = 'Ajax';
    const anchor = window.location.hash.split('?')[0];
    const url = urlPrefix + (Object.keys(params).length ? '?' + searchParams.toString() : '') + anchor;

    history.replaceState({ title, url }, title, url);
  }

  // Un-check all boxes and reload data
  clearFilters = () => {
    event.preventDefault();
    this.formContainer.querySelectorAll('input:checked').forEach(i => { i.click(); });
    if(this.formContainer.querySelector('input#all')) {
      this.formContainer.querySelector('input#all').click();
    };
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
    const nextPage = this.pagination.querySelector('#next-page');

    // Set click listener on page buttons
    nextPage.addEventListener('click', e => this.pageChange(e.target));
  }

  // Check if needed "next" button on new page
  checkPagination = (max) => {
    let pageElement = null;
  
    if (this.pagination) {
      pageElement = this.pagination.querySelector('#next-page a');
    }
  
    if (pageElement) {
      if (this.currentPage === max || max === 0) {
        pageElement.classList.add('disabled');
      }
      else {
        pageElement.classList.remove('disabled');
      }
    }
  }
  // Change current page and trigger ajax fetch
  pageChange = pageElement => {
    event.preventDefault();
    const value = pageElement.getAttribute('value');

    // Set current page
    if (value === 'prev') 
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    else if (value === 'next') 
      this.currentPage = this.currentPage + 1;
    else this.currentPage = +value;

    // Reload ajax content
    this.onFormChange(true);
  }

  // Count total active filters
  countActiveFilters = () => {
    return this.formContainer.querySelectorAll('.countable input:checked').length;
  }

  // Scroll to ajax content
  scrollToContent = ( direction = null) => {
    if(direction == 'top')
      setTimeout(() => { window.scrollTo({ top: this.contentContainer.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 150, behavior: 'smooth' }); }, 10); 
    else
      setTimeout(() => { this.contentContainer.scrollIntoView({behavior: "smooth", block: 'start'}); }, 10); 
  }
  
  // Delay helper function
  timeout = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // (Optional) Show/hide clear button depending on checked filters
  toggleClearButton = () => {
    if (!this.clearButton) return false;
    
    const checkedInputs = [...this.formContainer.querySelectorAll('input:checked')];
    
    const filtersActive = checkedInputs.length;
    
    // Check if the 'all' filter is the only active one
    const onlyAllFilterActive = filtersActive === 1 && checkedInputs[0].id === 'all';
  
    if(filtersActive && !onlyAllFilterActive) {
      this.clearButton.style.display = 'block';
    } else {
      this.clearButton.style.display = 'none';
    }
  }

  // (Optional) Indicate the number of filters currently active in filtersCount element
  setActiveFiltersCount = () => {
    if (!this.filtersCount) return false;
    this.filtersCount.innerHTML = '';
    this.filtersCount.style.display = "none";

    const nb = this.countActiveFilters();
    if (this.filtersCount && nb) {
      this.filtersCount.style.display = "flex";
      this.filtersCount.innerHTML = `${ nb }`;
    }
  }

  setActiveResultCount = (number) => {
    if(this.resultCounter) {
      this.resultCounter.forEach((counter) => {
        counter.innerHTML = number;
      });
    }
  }
}