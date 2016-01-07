var h = (function ViewHelpers(){
  var out = {};
  out.el = function(selector){
    var base = selector.substring(0,1);
    if(selector.substring(0,1) === "#"){
      return document.getElementById(selector.substring(1));
    }else{
      return document.querySelector(selector);
    }
  }
  return out;
}());

window.onload = function(){
  var table = new StringTable(h.el("#table"), ".", "x");
}

function StringTable(el){
  var instance = this;
  this.el = el;
  this.rows = [];
  instance.loadHelpers();
  el.textContent.split(/[\n\r]/g).forEach(instance.parseLine);
}
StringTable.helpers = (function(){
  var out = {};
  out.parseLine = function(line){
    var instance = this, row;
    if(!(line = line.trim())) return;
    row = line.split(/\s+/g);
    if(!instance.numCols) instance.numCols = row.length;
    if(instance.numCols !== row.length){
      throw("Expected " + instance.numCols + " columns; got " + row.length);
    }else instance.rows.push(row);
  }
  return out;
}());
StringTable.prototype = (function(){
  var out = {};
  out.loadHelpers = function(){
    var instance = this, helperName;
    for(helperName in StringTable.helpers){
      instance[helperName] = StringTable.helpers[helperName].bind(instance);
    }
  }
  return out;
}());
