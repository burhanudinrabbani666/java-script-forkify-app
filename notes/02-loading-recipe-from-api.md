## Loading recipe from api

> Note: sass has replaced @import with @use, then removed the darken method. Replaced with @use "sass:color". Read the sass code

save the API request in variable asynchronus

```js
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
```

[Next: Rendering The Recipe](./03-rendering-the-recipe.md)
