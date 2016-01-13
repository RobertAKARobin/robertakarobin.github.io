"use strict";

window.onload = function(){

  var h = Helpers();

  h.ajax("GET", "php/contact.php", function loadContact(response){
    if(!response) return;
    else response = JSON.parse(response);
    h.el("#phone").innerHTML = "<br />" + response["phone"];
    h.el("#street").innerHTML = response["street"] + "<br />";
  });

  h.ajax("GET", "php/count.php", function loadCount(response){
    h.el("#promptNum").textContent = response;
  });

  function Helpers(){
    var out = {};
    out.el = function(selector){
      var base = selector.substring(0,1);
      if(selector.substring(0,1) === "#"){
        return document.getElementById(selector.substring(1));
      }else{
        return document.querySelector(selector);
      }
    }
    out.ajax = function(method, path, callback){
      var http = new XMLHttpRequest();
      http.open(method, path, true);
      http.onreadystatechange = function(){
        if(this.readyState !== 4 || this.status !== 200) return;
        callback(this.responseText);
      }
      http.send();
    }
    return out;
  }

}
