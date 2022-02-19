module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'ie10',
            'ios7'
          ],
        bugfixes: true,
        useBuiltIns: 'usage',
        corejs: 3.21,
      },
    ],
  ],
};