'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./sass/**/*.sass')
        // .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //   .pipe(plumber.stop())
        .pipe(autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});


gulp.task('jade', function () {
    return gulp.src('./jade/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'))
});

gulp.task('uglify', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js/min'));
});

gulp.task('imagemin', function () {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img/min/'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./jade/*.jade', ['jade']);
    gulp.watch('./js/*.js', ['uglify']);
});
