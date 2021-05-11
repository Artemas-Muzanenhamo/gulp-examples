const {series, src, dest} = require('gulp');
const del = require('del');
const files = {
    htmlPath: 'app/*.html'
}
const {clean} = require('./gulp-custom/clean');

function serve(done) {
    src(files.htmlPath)
        .pipe(dest('dist'));
    done();
}

exports.default = series(clean, serve);