
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('./dist/styles/sass/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('js', function () {
    return gulp.src(['app/scripts/projectsService.js', 'app/scripts/index.js', 'app/scripts/*.js'])
        .pipe(concat('myApp.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'))
});

gulp.task('html', function () {
    return gulp.src('app/views/*.html')
        .pipe(gulp.dest('./dist/views/'))
});

gulp.task('sass', function () {
    return gulp.src('app/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles/sass'));
});

gulp.task('sass:watch', function () {
    gulp.watch('/app/styles/**/*.scss', ['sass']);
});