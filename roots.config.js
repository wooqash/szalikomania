const path = require('path');

module.exports = {
  originDir: path.resolve(__dirname, 'app/_roots'),
  localizedDir: path.resolve(__dirname, 'app/(roots)'),
  locales: ['en', 'pl'],
  defaultLocale: 'pl',
  prefixDefaultLocale: false, // serves "pl" locale on / instead of /pl
}