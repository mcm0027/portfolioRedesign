
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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