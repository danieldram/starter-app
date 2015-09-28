
class Debug {

  constructor(debugMode){
    this._debugMode = debugMode;
  }

  log(data){

    console.log(data);
  }
}

module.exports = Debug;
