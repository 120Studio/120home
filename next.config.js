// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript(
    {
        exportPathMap: function () {
            return {
              '/': { page: '/', staticMarkup: true }
            }
          }
    }
)