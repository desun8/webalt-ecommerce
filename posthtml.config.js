module.exports = {
  plugins: [
    require('posthtml-include')({
      root: "./src/html"
    }),
    require("posthtml-img-autosize")({
      root: "./src"
    }),
  ]
};