var gulp = require("gulp");
var sass = require("gulp-sass");
var baseDir = './public';

gulp.task('sass', function () {
    return gulp.src(baseDir + '/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(baseDir + '/css'))
});

gulp.task('watch', ['sass'], function () {
    gulp.watch(baseDir + '/scss/**/*.scss', ['sass']);
});