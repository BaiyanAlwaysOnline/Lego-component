import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
// rollup只能resolve相对路径的module
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json'
export const file = type => `dist/${name}.${type}.js`
export const name = pkg.name;

const dep = Object.keys(pkg.dependencies);

const overrides = {
    compilerOptions: { declaration: true },
    exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}

export default {
    input: './src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides }),
        vue(),
        css({ output: 'bundle.css' })
      ],
    external: (id) => {
        return /^vue/.test(id) || dep.some( k => new RegExp(`^${k}`).test(id) )
    }
}