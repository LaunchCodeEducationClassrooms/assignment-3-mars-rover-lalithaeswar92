/*
  DON'T EDIT THIS FILE
  Click Run to run the tests.
  Add new tests and .js files.
*/
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*command.spec.js",
    "**/*message.spec.js"    
  ],
  "helpers": [
    "helpers/reporter.js"
  ],
  random: false
});

jasmine.execute();
