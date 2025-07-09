const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  serializer: {
    getModulesRunBeforeMainModule: () => [
      require.resolve('react-native/Libraries/Core/InitializeCore'),
    ],
  },
});

module.exports = withNativeWind(config, { input: './global.css' });
