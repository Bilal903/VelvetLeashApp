module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@react-native/babel-preset', {unstable_transformProfile: 'hermes-stable'}],
    ],
    plugins: ['nativewind/babel'],
  };
};