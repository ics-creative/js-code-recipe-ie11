const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: false,
      modules: false,
      targets: {
        ie: "11"
      },
      loose: true
    }
  ]
];

const plugins = [
  [
    "@babel/plugin-transform-template-literals",
    {
      loose: true
    }
  ],
  [
    "@babel/plugin-transform-for-of",
    {
      loose: true,
      Optimization: true
    }
  ]
];

module.exports = {
  presets,
  plugins
};
