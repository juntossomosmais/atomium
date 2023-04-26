module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10',
        },
      },
    ],
  ];

  return {
    presets,
  };
};
