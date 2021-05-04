const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('gulp4-run-sequence');
const files = {
    htmlPath: 'app/*.html'
}

gulp.task('serve', (done) => {
    gulp.src(files.htmlPath)
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('clean', (done) => {
    gulp.dest('dist')
        .pipe(clean());
    done();
});

gulp.task('default', gulp.series((done) => {
    runSequence(
        'clean',
        'serve',
        done()
    );
}));
