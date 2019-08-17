// Core
import gulp from "gulp";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import sourceMaps from "gulp-sourcemaps";
// import fs from "fs-extra";
import path from "path";

// HTML
import fileInclude from "gulp-file-include";
// Css
import sass from "gulp-sass";
import postCss from "gulp-postcss";
import postcssPresetEnv from "postcss-preset-env";
import postcssCustomMedia from "postcss-custom-media";
// import cssNano from 'cssnano';

// Img
import imgMin from "gulp-imagemin";
import imgMinPngquant from "imagemin-pngquant";
import svgSprite from "gulp-svg-sprite";

// JS
// import uglify from "gulp-uglify";
import webpack from "webpack";
import webpackStream from "webpack-stream";

sass.compiler = require("node-sass");

// Path
const buildPath = "./dist";
const buildPathWatch = `${buildPath}/**/*.*`;

const paths = {
  build: buildPath,
  watch: buildPathWatch,
  js: {
    core: "./src/js/*.js",
    src: "./src/js/**/*.js",
    dest: buildPath,
  },
  html: {
    core: "./src/html/_index.html",
    src: "./src/html/**/*.html",
    dest: buildPath,
  },
  css: {
    core: "./src/style/index.scss",
    src: "./src/style/**/*.{scss, css}",
    dest: buildPath,
  },
  img: {
    src: "./src/images/*.{png,jpeg,jpg,svg}",
    dest: `${buildPath}/images`,
  },
  spriteSvg: {
    src: "./src/images/assets/svg/**/*.{svg}",
    dest: `${buildPath}/images`,
  },
};

// svg params
const svgoParams = {
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      removeDimensions: true,
    },
    // {
    //   removeAttrs: { attrs: "(stroke|fill)" }
    // }
  ],
};

const svgoParamsClearStyle = {
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      removeDimensions: true,
    },
    {
      removeAttrs: { attrs: "(stroke|fill)" },
    },
  ],
};

const svgSpriteConfig = {
  shape: {
    dimension: {
      maxWidth: 32,
      maxHeight: 32,
    },
    spacing: {
      padding: 10,
      box: "content",
    },
  },
  mode: {
    view: {
      bust: false,
      render: {
        css: true,
      },
    },
    symbol: true,
  },
};

// PostCss plugins
const postCssPlugins = [
  postcssCustomMedia(),
  postcssPresetEnv({ stage: 0 }),
  // cssNano({ preset: "default" })
];

// HTML tasks
function htmlInclude(done) {
  gulp
    .src([paths.html.core])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      }),
    )
    .pipe(
      rename({
        basename: "index",
      }),
    )
    .pipe(gulp.dest(paths.build));
  done();
}

// Style tasks
function makeStyle(done) {
  gulp
    .src(paths.css.core)
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postCss(postCssPlugins))
    .pipe(sourceMaps.write("."))
    .pipe(rename("style.css"))
    .pipe(gulp.dest(paths.build));
  done();
}

// Image tasks
function imageMin(done) {
  gulp
    .src(paths.img.src)
    .pipe(
      imgMin([
        imgMin.jpegtran({ progressive: true }),
        imgMinPngquant({ quality: [0.75, 0.9], speed: 1 }),
        imgMin.svgo(svgoParams),
      ]),
    )
    .pipe(gulp.dest(paths.img.dest));
  done();
}

function spriteSvg(done) {
  const name = "plus";

  gulp
    .src(`src/images/assets/svg/${name}/*`)
    .pipe(imgMin([imgMin.svgo(svgoParamsClearStyle)]))
    .pipe(gulp.dest(`dist/images/assets/svg/${name}`))

    .pipe(gulp.src(`dist/images/assets/svg/${name}/*`))
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(rename(`${name}.symbol.svg`))
    .pipe(gulp.dest("dist/images/"));

  done();
}

// JS tasks
function jsBuild(done) {
  gulp
    .src(paths.js.core)
    .pipe(
      webpackStream({
        mode: "development",
        entry: {
          index: "./src/js/_index.js",
          // pageHome: "./src/js/pageHome.js",
        },
        output: {
          filename: "[name].bundle.js",
          path: path.resolve(__dirname, "dist"),
        },
        optimization: {
          splitChunks: {
            chunks: "all",
          },
        },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: {
                presets: ["env"],
              },
            },
          ],
        },
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          }),
        ],
      }),
    )
    .pipe(gulp.dest(paths.js.dest));
  // .pipe(uglify())
  // .pipe(rename({ suffix: ".min" }))
  // .pipe(gulp.dest(paths.js.dest));

  done();
}

// Core tasks
function watch(done) {
  gulp.watch(paths.html.src, htmlInclude);
  gulp.watch(paths.css.src, makeStyle);
  gulp.watch(paths.js.src, jsBuild);
  done();
}

function serve(done) {
  browserSync.init({
    server: paths.build,
  });
  browserSync.watch(paths.watch, browserSync.reload);
  done();
}

// Tasks
export { imageMin as imagemin };
export { spriteSvg as spritesvg };

const def = gulp.parallel(watch, serve);

export default def;
