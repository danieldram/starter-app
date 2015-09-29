//var chai            = require('chai');
//var expect          = chai.expect;
var $               = require('jquery');
var j               = require('jasmine');
var $j              = require('jasmine-jquery');


var GeneralInputBox = require('../src/js/classes/general-input-box');


describe('General Input Boxes', function () {

  it('should construct the class by selecting the element', function(){

      jasmine.getFixtures().fixturesPath = 'public/';
      loadFixtures('index.html');
      expect($('#username')).not.toHaveText(/hello/)


  });

});
