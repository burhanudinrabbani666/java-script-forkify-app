## Implement Seacrh Result

Here, we create a new function that displays a lot of data, of course, while also implementing MVC.

Create a data array to show the type of food the user is searching for.

```js
// models.js
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.result = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    console.log(`${error} 💥💥💥💥💥`);
    throw error;
  }
};
```

```js
// controller.js
const controlSearchResult = async function () {
  try {
    // 1) Get Search Quey
    const query = searchViews.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render Results
    console.log(model.state.search.result);
  } catch (error) {
    console.log(error);
  }
};

controlSearchResult();
// Publisher - Subscriber pattern
const init = function () {
  recipeView.addHandleRender(controlRecipes);
  searchViews.addHandlerSearc(controlSearchResult);
};
init();
```

```js
// seacrh-views.js

class SearchView {
  #parentElement = document.querySelector(".search");

  getQuery() {
    const query = this.#parentElement.querySelector(`.search__field`).value;
    this.#clearInput();

    return query;
  }

  #clearInput() {
    this.#parentElement.querySelector(`.search__field`).value = "";
  }

  addHandlerSearc(handler) {
    this.#parentElement.addEventListener("submit", function (event) {
      event.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
```

## Part 2

we create Parent Class for smothing like render data, loading spinner, showing messsage in new file call view.js

this class is becoming parent Classes

```js
export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSuuces(message = this._succesMessage) {
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
```

parent classes of

```js
class ResultView extends View {}

// And

class RecipeView extends View {}
```

### Rendering List

```js
  _parentElement = document.querySelector(".results");
  _errorMessage = `No recipe found for your query! please try again`;
  _succesMessage = "";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
  <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
      </div>
    </a>
  </li>    `;
  }

```

[Next: implement Pagination](./11-implement-pagination.md)
