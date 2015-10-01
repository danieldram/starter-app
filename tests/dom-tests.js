var $               = require('jquery');
var j               = require('jasmine');
var $j              = require('jasmine-jquery');


describe('test the dom for an input',function(){

  it('should find the #username input', function(){
    jasmine.getFixtures().fixturesPath = 'public/';
    loadFixtures('index.html');
    expect($('#username')).not.toHaveText(/hello/);
  })


});
