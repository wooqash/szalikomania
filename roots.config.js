const path = require("path");

module.exports = {
  originDir: path.resolve(__dirname, "roots"),
  localizedDir: path.resolve(__dirname, "src/app/pages"),
  locales: ["pl", "en"],
  defaultLocale: "pl",
  prefixDefaultLocale: false, // serves "en" locale on / instead of /en
};
