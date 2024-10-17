export default function transform(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find require statements
  root.find(j.CallExpression, {
    callee: { name: 'require' },
    arguments: [{ value: 'eslint-webpack-plugin' }]
  }).forEach(path => {
    // Replace the require path
    if (j.Literal.check(path.node.arguments[0]) && path.node.arguments[0].value === 'eslint-webpack-plugin') {
      path.node.arguments[0].value = 'eslint-rspack-plugin';
      dirtyFlag = true;
    }
  });

  return dirtyFlag ? root.toSource() : undefined;
}


export const parser = "tsx";