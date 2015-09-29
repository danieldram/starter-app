"use strict";
var inherit         = require('inherit-prototypes');
var Debug           = require('./debug');
var WatchElement    = require('../watchers/input-watcher');

class classes {};
inherit(classes, [Debug, WatchElement]);

class GeneralInputBox extends classes {
  constructor({debugMode, id}){
      super();
      this._debugMode = debugMode;
      this._model = null;
      this._inputBox = document.getElementById(id);

      if(this._debugMode)
      this.log(this._inputBox);

      (this._inputBox) ? this.success() : this.error();
  }

  get element(){
    return this._inputBox;
  }

  success(){
    this.observe(this._inputBox);
  }

  error(){
    console.error("GeneralInputBox is unable to locate the specified element's ID");
  }

  changed(changes){

    console.log(this.value);
    console.log(changes);
  }



}




module.exports = GeneralInputBox;
