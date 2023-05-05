/*
  Add JsBlockLink method 
  Search a href="" in a block
  Better for SEO
*/

export default class JsBlockLink {
  constructor(){
    const initialElems = document.querySelectorAll(".jsBlockLink");
    this.initBlocks(initialElems);
  }

  initBlocks = (elements) => {
    document.querySelectorAll(".jsBlockLink").forEach(element => {
      if(!element.classList.contains('block-linked')){
        element.classList.add('block-linked');
        element.addEventListener('click', event => {
          const link = event.currentTarget.querySelectorAll('a:not(.jsIgnoreBlockLink)')[0];
      
          if (!link.classList.contains('jsIgnoreBlockLink')) {
            if ((link.getAttribute('target') && link.getAttribute('target') === '_blank') ||
              event.ctrlKey ||
              event.button === 1) {
              window.open(link.getAttribute('href'));
            }
            else if (event.button === 0) {
              document.location.href = link.getAttribute('href');
            }
          }
          return false;
        })
      }
    })
  }

}
