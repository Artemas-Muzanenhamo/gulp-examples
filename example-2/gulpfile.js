const {series, src, dest} = require('gulp');

function clean(done) {
    dest('dist')
        .pipe()
    done();
}

function build(done) {
    console.log('build function was called');
    done();
}

exports.default = series(clean, build);