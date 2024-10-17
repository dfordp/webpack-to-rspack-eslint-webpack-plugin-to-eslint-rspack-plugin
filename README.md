Change import from eslint-webpack-plugin to eslint-rspack-plugin.
### Before

```ts
//change the import package from eslint-webpack-plugin to eslint-rspack-plugin

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

### After

```ts
const ESLintPlugin = require('eslint-rspack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```

