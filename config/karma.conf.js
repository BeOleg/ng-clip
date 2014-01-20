// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : '../',
    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'http://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.swf',
      'http://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.2.3/ZeroClipboard.min.js'
      'http://code.angularjs.org/snapshot/angular.min.js',
      'http://code.angularjs.org/snapshot/angular.min.js.map'
      'src/ngClip.js',
    ],

    autoWatch : true,

    browsers : ['Chrome'],

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
      //...
    }
  });
}