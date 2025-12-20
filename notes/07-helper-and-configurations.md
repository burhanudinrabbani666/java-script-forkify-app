## Helper and Configurations

### Helper

A JavaScript helper file is a module used to store small, reusable functions that perform specific, common tasks, making your main codebase cleaner, more readable, and promoting the "Don't Repeat Yourself" (DRY) principle.

```js
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};
```

### Configuration File

In JavaScript, a "config file" is typically a standard .js or .json file that stores settings and parameters for an application or development tools. The approach for creating and using one depends on whether it's for client-side browser use or a server-side Node.js environment.

```js
export const API_URL = `https://forkify-api.jonas.io/api/v2/recipes`;

export const TIMEOUT_SEC = 20;
```
