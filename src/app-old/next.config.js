const path = require('path')

module.exports = {
  distDir: `${path.relative(process.cwd(), __dirname)}/functions/next`,
  poweredByHeader: false,
}