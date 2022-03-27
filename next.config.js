const nextTranslate = require('next-translate');
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

const slider = withImages(withTM());

module.exports = {
  ...nextTranslate(slider)
}