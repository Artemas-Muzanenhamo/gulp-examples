const {series} = require('gulp');

function clean(done) {
    console.log('clean function was called');
    done();
}

function build(done) {
    console.log('build function was called');
    done();
}

exports.default = series(clean, build);