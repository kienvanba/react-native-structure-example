module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extension: [
                    'ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    src: './src',
                    'src/*': './src/*',
                    ui: './src/components/ui',
                    containers: './src/containers',
                    'containers/*': './src/containers/*',
                    components: './src/components',
                    'components/*': './src/components/*',
                    services: './src/services',
                    'services/*': './src/services/*',
                    modules: './src/modules',
                    'modules/*': './src/modules/*',
                    configs: './src/configs',
                    'configs/*': './src/configs/*',
                    styles: './src/configs/styles',
                },
            },
        ],
    ],
    env: {},
};
