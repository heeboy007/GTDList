// eslint-disable-next-line no-undef
module.exports = {
    presets: [
        '@babel/preset-typescript',
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ["@babel/plugin-proposal-decorators", { "version": "2023-11" }],
    ],
};