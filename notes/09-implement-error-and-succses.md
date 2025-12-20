## Implement Error And Succss message

disini ita membaut mehtod baru untuk menampilkan error message pada dom dalam class recipeViews kita

```js
renderError(message = this.#errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;

    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSuuces(message = this.#succesMessage) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;

    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
```

[Next; Implement Search Result](./10-implement-search-result-part-1.md)
