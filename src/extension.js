'use strict';

const previewAliases = new Set(['bsl', 'os', 'sdbl']);

exports.activate = function activate() {
  return {
    extendMarkdownIt(md) {
      const highlight = md.options.highlight;
      if (typeof highlight !== 'function') {
        return md;
      }

      md.options.highlight = function highlightWithAliases(code, language, ...args) {
        const target = typeof language === 'string' && previewAliases.has(language.toLowerCase())
          ? '1c'
          : language;
        return highlight.call(this, code, target, ...args);
      };

      return md;
    },
  };
};
