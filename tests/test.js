var chai = require('chai');
var expect = chai.expect;
var GeneralInputBox = require('../src/js/classes/general-input-box');


describe('General Input Boxes', function () {

  it('should construct the class by selecting the element', function(){
      var username = new GeneralInputBox( {debugMode: false, id:'username'});
      console.log(username);
      expect(username.element).equals(true);

  });

});
