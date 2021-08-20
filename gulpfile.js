// Require the npm modules we need
var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleanCSS = require("gulp-clean-css"),
    terser = require("gulp-terser");

// Looks for a file called styles.css inside the css directory
// Copies and renames the file to styles.min.css
// Minifies the CSS
// Saves the new file inside the css directory
function minifyCSS() {
  return gulp.src('./assets/styles/styles.css')
    .pipe(rename("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets/styles"));
}

// Looks for a file called app.js inside the js directory
// Copies and renames the file to app.min.js
// Minifies the JS
// Saves the new file inside the js directory
function minifyJS() {
  return gulp.src('./assets/js/script.js')
    .pipe(rename("script.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./assets/js"));
}

// Makes both functions available as a single default task
// The two functions will execute asynchronously (in parallel)
// The task will run when you use the gulp command in the terminal
exports.default = gulp.parallel(minifyCSS, minifyJS);
