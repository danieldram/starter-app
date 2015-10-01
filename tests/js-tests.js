var chai            = require('chai');
var expect          = chai.expect;
var Xyz             = require('../src/js/classes/xyz');


describe('Test Class', function () {

  it('test should return true', function(){

      var xyz = new Xyz();
      console.log(xyz.test());
      expect(xyz.test()).equals(true)



  });

});
