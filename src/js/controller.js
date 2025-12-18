const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function (params) {
  try {
    const res = await fetch(
      "https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e86ba"
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // rename Object
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.soure_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (error) {
    alert(error);
  }
};

showRecipe();
