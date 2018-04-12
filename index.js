module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'indentation': 4,
    'order/properties-alphabetical-order': false,
    'rule-empty-line-before': 'never-multi-line',
    'max-nesting-depth': [3, {ignoreAtRules: ['media', 'supports', 'include']}],
    'selector-no-qualifying-type': [true, {ignore: ['attribute', 'class']}],
  },
};
