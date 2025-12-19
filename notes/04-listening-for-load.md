## Listening for load

So we have to create a window.addEventListener to track changes on the links we click to dynamically display the data.

```html
<a href="#664c8f193e7aa067e94e86ba">RECIPE1</a>
<a href="#664c8f193e7aa067e94e845a">RECIPE2</a>
```

For example, if we click on a link, the URL will change according to its href. Then we know there's a change there. Then we can track the changes.

```js
["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, showRecipe)
);
```

This is to track changes that occur in the window. We use hash

then we pass those changes to our render function

```js
const id = window.location.hash.slice(1);
console.log(id);

if (!id) return;

// 1. Loading recipe
renderSpinner(recipeContainer);
const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
```

This way, the data will automatically render according to its hash. This allows us to create a one-page app.

[Next: listening For load](./05-the-mvc-arcihtecture.md)
