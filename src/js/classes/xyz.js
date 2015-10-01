"use strict";
var inherit         = require('inherit-prototypes');
var Debug           = require('./debug');
var Base            = require('./base');

class classes {};
inherit(classes, [Debug, Base]);

class Xyz extends classes {
  test(){
    return true;
  }
}


module.exports = Xyz;
