"use strict";

var loaderUtils = require(`loader-utils`);
var unified = require(`unified`);
var parse = require(`remark-parse`);

function walkAstForHeadings(ast, tree = [], options = {}) {
  if (!Array.isArray(ast.children)) {
    return tree;
  }
  let cascade = [];
  for (let i = 0; i < ast.children.length; i++) {
    if (ast.children[i].type === 'heading' && ast.children[i].children[0]) {
      const item = {
        value: options.getAst
          ?ast.children[i].children
          : ast.children[i].children.map(({ value }) => value).join(''),
        depth: ast.children[i].depth,
        children: []
      }
      while (cascade.length) {
        if (item.depth > cascade[cascade.length - 1].depth) {
          cascade[cascade.length - 1].children.push(item)
          cascade.push(item)
          break;
        } else {
          cascade.pop();
        }
      }

      if (!cascade.length) {
        tree.push(item);
        cascade.push(item);
      }
    }
  }

  return tree
}

module.exports = function getHeadingPlugin(source) {
  var heading = '';

  this.cacheable && this.cacheable(true);
  var options = loaderUtils.getOptions(this) || {};

  /* Get markdown AST (powered by unified and remark-parse) */
  var parser = unified().use(parse, Object.assign({
    commonmark: !!options.commonmark
  }, options));

  var ast = parser.parse(source);

  const headings = walkAstForHeadings(ast, [], options)

  return `module.exports = ${JSON.stringify(headings)};`
};
