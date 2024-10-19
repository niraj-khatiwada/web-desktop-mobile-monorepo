/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = withNativeWind(getDefaultConfig(projectRoot), {
  input: './global.css',
  configPath: './tailwind.config.ts',
});

// Add any monorepo packages that is used by this app.
const monorepoPackages = [
  path.resolve(monorepoRoot, 'packages/tsconfig'),
  path.resolve(monorepoRoot, 'packages/tailwind-config'),
];

config.watchFolders = [projectRoot, ...monorepoPackages];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = [
  'browser',
  'require',
  'react-native',
];

module.exports = config;
