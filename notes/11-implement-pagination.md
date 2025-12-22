## Implement Pagination

we need a new model function that only has logic to display only 10 results

```js
// model.js
export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPerPage; // 0
  const end = page * state.search.resultPerPage; // 9

  return state.search.result.slice(start, end);
};

// controller.js

// before: rendering all result
resultView.render(model.state.search.result);

// after: only 10
resultView.render(model.getSearchResultPage());
```

[Next: Project Plannig 2](./12-project-planning2.md)
