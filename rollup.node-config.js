import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import typescript from '@rollup/plugin-typescript'

export default {
  input: {
    index: 'src/index.ts',
    'test-events': 'src/test-events.js',
    types: 'src/types.ts',
    util: 'src/util.ts'
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    esModule: false,
    preserveModules: true
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/env', { modules: false, targets: { node: '10.0' } }]]
    }),
    typescript(),
    copy({ targets: [{ src: 'src/doc/*.d.ts', dest: 'dist/doc' }] })
  ],
  treeshake: { moduleSideEffects: false, propertyReadSideEffects: false }
}
