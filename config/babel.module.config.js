module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // useBuiltIns: 'entry',
        corejs: 3.21,
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};