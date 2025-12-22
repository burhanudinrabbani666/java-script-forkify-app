import View from "./view";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const btn = event.target.closest(".btn--inline");

      console.log(btn);
      handler();
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    console.log(numPages);
    // Page 1, and there are another page
    if (currPage === 1 && numPages > 1) {
      return `
       <button class="btn--inline pagination__btn--next">
         <span>Page ${currPage + 1}</span>
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
       </button>
      `;
    }
    // Last Page
    if (currPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
      `;
    }
    //Other Page
    if (currPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }
    // Page 1, and there are No other page
    return;
  }
}

export default new PaginationView();
