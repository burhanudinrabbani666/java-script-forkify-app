## Implement Seacrh Result

disini membuat fungsi baru yang menampilkan banyak data. tentu saja dengan menerapkan MVC juga.

membuat array data nutk jenis makan apa yang dicari oleh user

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

[Next: implement Pagination](./11-implement-pagination.md)
