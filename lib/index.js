function plugin(babel) {
  const { types: t } = babel;

  return {
    name: 'ast-transform', // not required
    visitor: {
      Identifier(path) {
        const { name } = path.node;
        if (name === '__DEV__') {
          path.node.name = 'process.env.NODE_ENV === "development"';
        } else if (name === '__PROD__') {
          path.node.name = 'process.env.NODE_ENV === "production"';
        }
        return;
      }
    }
  };
}

module.exports = plugin;
