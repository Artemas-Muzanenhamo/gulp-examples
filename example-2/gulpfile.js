const {series, src, dest} = require('gulp');
const del = require('del');
const files = {
    htmlPath: 'app/*.html'
}

function clean(done) {
    console.log('CLEAN JOB STARTING...');
    del(['dist/index.html']);
    console.log('CLEAN JOB FINISHED...');
    done();
}

function serve(done) {
    console.log('SERVE TASK STARTING...');
    src(files.htmlPath)
        .pipe(dest('dist'));
    console.log('SERVE TASK FINISHED...');
    done();
}

exports.default = series(clean, serve);