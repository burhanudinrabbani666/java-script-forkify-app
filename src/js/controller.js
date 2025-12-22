import * as model from "./model";
import recipeView from "./views/recipe-view";
import searchViews from "./views/search-views";
import resultView from "./views/result-view";
import paginationView from "./views/pagination-view";

///
import "core-js/stable";
import "regenerator-runtime/runtime";

// if (module.hot) {
//   module.hot.accept();
// }

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function (params) {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    // 1) Get Search Quey
    const query = searchViews.getQuery();
    if (!query) return;

    resultView.renderSpinner();
    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render Results
    // resultView.render(model.state.search.result);
    resultView.render(model.getSearchResultPage(1));

    // 4) Render Initial Pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  // 3) Render new Result
  // resultView.render(model.state.search.result);
  resultView.render(model.getSearchResultPage(goToPage));

  // 4) Render Initial Pagination
  paginationView.render(model.state.search);
};

// Publisher - Subscriber pattern
const init = function () {
  recipeView.addHandleRender(controlRecipes);
  searchViews.addHandlerSearc(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
