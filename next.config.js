const production = process.env.NODE_ENV === 'production'

module.exports = {
    env: {
        API_ROOT: 'https://api.aiven.io/v1',
    },
    assetPrefix: production ? '/cloud-selection/' : '',
}
