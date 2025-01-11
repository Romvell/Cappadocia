'use strict';

const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass')(sass);
// const sass = require('gulp-sass')(require('sass'));

exports.sass = function () {
    return gulp.src('./styles/sass/styles.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./styles'));
}

exports.adaptiveSass = function () {
    return gulp.src('./styles/sass/adaptive.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./styles'));
}

exports.watch = function () {
    gulp.watch('./styles/sass/styles.scss', gulp.series('sass'));
    gulp.watch('./styles/sass/adaptive.scss', gulp.series('adaptiveSass'));
}

const copySlickCss = () => {
    return gulp.src('./node_modules/slick-carousel/slick/*.css')
        .pipe(gulp.dest('./styles'));
};
const copySlickJs = () => {
    return gulp.src('./node_modules/slick-carousel/slick/slick.js')
        .pipe(gulp.dest('./scripts'));
};
const copyJQuery = () => {
    return gulp.src('./node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('./scripts'));
};
const copyJQueryValidation = () => {
    return gulp.src('./node_modules/jquery-validation/dist/jquery.validate.js')
        .pipe(gulp.dest('./scripts'));
};
const copyJQueryMaskedinput = () => {
    return gulp.src('./node_modules/jquery.maskedinput/src/jquery.maskedinput.js')
        .pipe(gulp.dest('./scripts'));
};

exports.copy = gulp.parallel(copySlickCss, copySlickJs, copyJQuery, copyJQueryValidation, copyJQueryMaskedinput);