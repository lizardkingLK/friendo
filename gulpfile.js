const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const watchDir = "./src/scss";
const srcDir = "./src/scss/app.scss";
const destDir = "./src/styles";

function buildStyles() {
    return src(srcDir)
        .pipe(sass())
        .pipe(dest(destDir))
}

function watchTask() {
    watch([watchDir], buildStyles);
}

exports.default = series(buildStyles, watchTask);