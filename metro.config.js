const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind({
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});