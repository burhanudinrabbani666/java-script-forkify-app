import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from "./helper";
import { stat } from "@babel/core/lib/gensync-utils/fs";

export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
};

// Load for spesific Menu
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    // rename Object
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.soure_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    console.log(`${error} 💥💥💥💥💥`);
    throw error;
  }
};

// Load for rendering all menu
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

// To get result when using pagination
export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPerPage; // 0
  const end = page * state.search.resultPerPage; // 9

  return state.search.result.slice(start, end);
};

// To Update Servings
export const updateServings = function (newServing) {
  state.recipe.ingredients.forEach((ingredients) => {
    ingredients.quantity =
      (ingredients.quantity * newServing) / state.recipe.servings;
  });

  state.recipe.servings = newServing;
};
