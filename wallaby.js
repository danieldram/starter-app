var wallabify    = require('wallabify');
var browserify   = require('browserify');
var babelify     = require('babelify');
var wallabyPostprocessor = wallabify({
    // browserify options, such as
     "transform": ["babelify"],
  },
  browserify => browserify.transform(babelify)
);

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.js', load: false},
    ],

    tests: [
      {pattern: 'tests/test.js', load: false}
    ],
    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },
  };
};
