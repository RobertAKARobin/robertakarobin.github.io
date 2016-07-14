"use strict";

window.onload = function(){

  ajax("GET", "/contact.json", function loadContact(response){
    if(response){
      el("#phone").innerHTML = response.phone;
    }
  });

  function el(selector){
    return document.querySelector(selector);
  }

  function ajax(method, path, callback){
    var http = new XMLHttpRequest();
    http.open(method, path, true);
    http.onreadystatechange = function(){
      if(this.readyState !== 4 || this.status !== 200) return;
      callback(JSON.parse(this.responseText));
    }
    http.send();
  }

}
