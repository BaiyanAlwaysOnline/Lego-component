import basicConfig, { file } from './rollup.config.js';

export default {
    ...basicConfig,
    output: {
        name: 'LegoComponents',
        file: file('umd'),
        format: 'umd',
        // umd依赖外部依赖是靠全局变量的
        globals: {
            'vue': 'Vue',
            'lodash-es': '_'
        },
        exports: 'named'
    },
}