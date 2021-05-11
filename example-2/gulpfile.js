const {series, src, dest} = require('gulp');
const del = require('del');
const files = {
    htmlPath: 'app/*.html'
}

function clean(done) {
    del(['dist/index.html']);
    done();
}

function serve(done) {
    src(files.htmlPath)
        .pipe(dest('dist'));
    done();
}

exports.default = series(clean, serve);