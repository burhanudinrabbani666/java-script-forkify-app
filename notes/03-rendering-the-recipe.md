## Rendering Recipe dengan JavaScript

To render HTML using JavaScript, we need to **insert markup into the parent element** via the DOM.

First, select the HTML element that will be the container for the recipe.

```js
const recipeContainer = document.querySelector(".recipe");

const renderSpinner = function (parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;

  // Delete old content
  parentEl.innerHTML = "";

  // insert Spinner to the DOM
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

// Showing spinner in recipe container
renderSpinner(recipeContainer);
```

If the rendered data consists of multiple items (for example, a list of ingredients), use the .map() method to convert each item to HTML.

```js
const ingredientsMarkup = recipe.ingredients
  .map(
    (ingredient) => `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>

      <div class="recipe__quantity">
        ${ingredient.quantity}
      </div>

      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.description}
      </div>
    </li>
  `
  )
  .join("");

const markup = `
  ...
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe Ingredients</h2>

    <ul class="recipe__ingredient-list">
      ${ingredientsMarkup}
    </ul>
  </div>
  ...
`;

recipeContainer.innerHTML = "";
recipeContainer.insertAdjacentHTML("afterbegin", markup);
```

#### Why use .map()?

- Avoids repetitive HTML
- Easier to read and maintain
- Suitable for array data

## Conclusion

- HTML can be rendered using JavaScript via the DOM
- Use the parent element as the render target
- Use a spinner for loading state
- Use .map() + .join('') to render lists
- Always clean up the container before re-rendering

## Installing

```bash
npm i core-js

npm i regenerator-runtime
```

**why we install core-js and importing to project?**

When you import core-js, you ensure that:

- Your app works in older browsers
- Babel-transpiled code runs correctly
- Modern JS methods are available globally

When Do You Need regenerator-runtime?

You need it if:

- You use async / await
- You support older browsers
- You use Babel with @babel/preset-env
- If your app only targets modern browsers, you may not need it.

##### Summary

- core-js fixes missing JavaScript features
- regenerator-runtime fixes how async code runs
- Together, they ensure modern JavaScript works everywhere

[Next: Listen for load](./04-listening-for-load.md)
