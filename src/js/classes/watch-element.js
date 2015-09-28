var Emitter = require('event-emitter');
let _elements = [];

var deepSearch = ({string, key, value }) => {

}

class WatchElement {

  observe(obj){
    _elements.push({name: obj.id, obj:obj, type:obj.loalName});
    console.log(_elements);
    Object.observe(obj, this.changed);


  }
  changed(changes) {
    //Interface, to be implemented by child clases//
  }

}
module.exports = WatchElement;
