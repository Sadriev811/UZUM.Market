const gulp = require('gulp');
const htmlInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'))
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const concatJs = require('gulp-concat')

// html
const htmlIncludeSetting = {
    prefix:'@@',
    basepath: "@file",
};

const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        })
    };
}

gulp.task('html', function () {
    
    return gulp
        .src('./src/*.html')
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(htmlInclude(htmlIncludeSetting))
        .pipe(gulp.dest('./dist/'));
})

// sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(plumber(plumberNotify('SCSS')))
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/css/'))
})

// js
gulp.task('js', function() {
    return gulp.src('./src/js/**/*.js')
    // .pipe(concatJs('main.js'))
    .pipe(plumber(plumberNotify('JS')))
    // .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
})

// img
gulp.task('images', function() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest('./dist/img/'))
})

// fonts
gulp.task('fonts', function() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
})
gulp.task('files', function() {
    return gulp.src('./src/files/**/*')
        .pipe(gulp.dest('./dist/files/'))
})

// liveServer
const liveServerOptions = {
    livereload: true,
    open: true
}

gulp.task('server', function () {
    return gulp.src('./dist/')
        .pipe(server(liveServerOptions))
})

// clean 
gulp.task('clean', function(done) {
    if (fs.existsSync('./dist/')) {

        return gulp
            .src('./dist/', { read: false })
            .pipe(clean({ force: true }));
    }
    done();
})

// watch
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('./src/**/*.html', gulp.parallel('html'))
    gulp.watch('./src/img/**/*', gulp.parallel('images'))
    gulp.watch('./src/js/**/*.js', gulp.parallel('js'))
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'))
    gulp.watch('./src/files/**/*', gulp.parallel('files'))
})

// default
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html', 'sass', 'images', 'fonts', 'files', 'js'),
    gulp.parallel('server', 'watch')
))