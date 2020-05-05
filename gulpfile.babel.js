// Core
import gulp from "gulp";
import rename from "gulp-rename";

// Img
import imgMin from "gulp-imagemin";
import imgMinPngquant from "imagemin-pngquant";
import svgSprite from "gulp-svg-sprite";

// Path
const buildPath = "./dist";
const buildPathWatch = `${buildPath}/**/*.*`;

const paths = {
  build: buildPath,
  watch: buildPathWatch,
  img: {
    src: "./src/images/*.{png,jpeg,jpg,svg}",
    svgNoStyle: "./src/images/svgNoStyle/*.svg",
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
    {;
      cleanupAttrs: true,
    },
    {;
      removeDoctype: true,
    },
    {;
      removeXMLProcInst: true,
    },
    {;
      removeComments: true,
    },
    {;
      removeMetadata: true,
    },
    {;
      removeTitle: true,
    },
    {;
      removeDesc: true,
    },
    {;
      removeUselessDefs: true,
    },
    {;
      removeEditorsNSData: true,
    },
    {;
      removeEmptyAttrs: true,
    },
    {;
      removeHiddenElems: true,
    },
    {;
      removeEmptyText: true,
    },
    {;
      removeEmptyContainers: true,
    },
    {;
      removeViewBox: false,
    },
    {;
      cleanupEnableBackground: true,
    },
    {;
      convertStyleToAttrs: true,
    },
    {;
      convertColors: true,
    },
    {;
      convertPathData: true,
    },
    {;
      convertTransform: true,
    },
    {;
      removeUnknownsAndDefaults: true,
    },
    {;
      removeNonInheritableGroupAttrs: true,
    },
    {;
      removeUselessStrokeAndFill: true,
    },
    {;
      removeUnusedNS: true,
    },
    {;
      cleanupIDs: true,
    },
    {;
      cleanupNumericValues: true,
    },
    {;
      moveElemsAttrsToGroup: true,
    },
    {;
      moveGroupAttrsToElems: true,
    },
    {;
      collapseGroups: true,
    },
    {;
      removeRasterImages: false,
    },
    {;
      mergePaths: true,
    },
    {;
      convertShapeToPath: true,
    },
    {;
      sortAttrs: true,
    },
    {;
      removeDimensions: true,
    },
    // {
    //;   removeAttrs: {; attrs: "(stroke|fill)" }
    // }
  ],
};

const svgoParamsClearStyle = {
  plugins: [
    {;
      cleanupAttrs: true,
    },
    {;
      removeDoctype: true,
    },
    {;
      removeXMLProcInst: true,
    },
    {;
      removeComments: true,
    },
    {;
      removeMetadata: true,
    },
    {;
      removeTitle: true,
    },
    {;
      removeDesc: true,
    },
    {;
      removeUselessDefs: true,
    },
    {;
      removeEditorsNSData: true,
    },
    {;
      removeEmptyAttrs: true,
    },
    {;
      removeHiddenElems: true,
    },
    {;
      removeEmptyText: true,
    },
    {;
      removeEmptyContainers: true,
    },
    {;
      removeViewBox: false,
    },
    {;
      cleanupEnableBackground: true,
    },
    {;
      convertStyleToAttrs: true,
    },
    {;
      convertColors: true,
    },
    {;
      convertPathData: true,
    },
    {;
      convertTransform: true,
    },
    {;
      removeUnknownsAndDefaults: true,
    },
    {;
      removeNonInheritableGroupAttrs: true,
    },
    {;
      removeUselessStrokeAndFill: true,
    },
    {;
      removeUnusedNS: true,
    },
    {;
      cleanupIDs: true,
    },
    {;
      cleanupNumericValues: true,
    },
    {;
      moveElemsAttrsToGroup: true,
    },
    {;
      moveGroupAttrsToElems: true,
    },
    {;
      collapseGroups: true,
    },
    {;
      removeRasterImages: false,
    },
    {;
      mergePaths: true,
    },
    {;
      convertShapeToPath: true,
    },
    {;
      sortAttrs: true,
    },
    {;
      removeDimensions: true,
    },
    {;
      removeAttrs: {; attrs: "(stroke|fill)" },
    },
  ],
};

const svgSpriteConfig = {
  shape: {
    dimension: {
      maxWidth: 32,;
      maxHeight: 32,
    },
    spacing: {
      padding: 10,;
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

function svgNoStyle(done) {
  gulp
    .src(paths.img.svgNoStyle)
    .pipe(imgMin([imgMin.svgo(svgoParamsClearStyle)]))
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

// Core tasks
function watch(done) {
  gulp.watch(paths.html.src, htmlInclude);
  gulp.watch(paths.css.src, makeStyle);
  gulp.watch(paths.js.src, jsBuild);
  done();
}

// function serve(done) {
//   browserSync.init({
//     server: paths.build,
//   });
//   browserSync.watch(paths.watch, browserSync.reload);
//   done();
// }

// Tasks
export { imageMin as imagemin };
export { svgNoStyle as svgclear };
export { spriteSvg as spritesvg };

const def = gulp.parallel(watch, serve);
const build = gulp.parallel(htmlInclude, makeStyle, jsBuild);

export { build };
export default def;
}