const del = require('del');
const files = {
    htmlPath: '../app/*.html'
}

function clean(done) {
    del(['dist/index.html']);
    done();
}

module.exports.clean = clean;