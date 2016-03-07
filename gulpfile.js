
var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', function () {
    gulp.src(['app/scripts/*.js', 'app/scripts/index.js'])
        .pipe(concat('myApp.js'))
        .pipe(gulp.dest('.'))
})