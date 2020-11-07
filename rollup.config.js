const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
const dist = './dist/';
const name = 'themost_d';
const pkg = require('./package.json');

module.exports = [{
    input: './src/index.ts',
    output: [
        {
            file: `${dist}${name}.cjs.js`,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: `${dist}${name}.esm.js`,
            format: 'esm',
            sourcemap: true
        },
        {
            name: '@themost/d',
            file: `${dist}${name}.umd.js`,
            format: 'umd',
            sourcemap: true
        },
    ],
    external: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)),
    plugins: [
        typescript()
    ]
}];
