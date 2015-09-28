var Emitter = require('event-emitter');
let _watchList = [];

class WatchInputs {

  observe(obj){
    obj.onkeyup = this.changed;
    _watchList.push({name: obj.id, obj:obj, type:obj.localName});
  }

  changed(changes) {
    //Interface, to be implemented by child clases//
  }


}
module.exports = WatchInputs;
