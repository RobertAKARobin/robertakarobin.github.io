"use strict";

window.onload = function(){

  ajax("GET", "/contact.json", function loadContact(response){
    if(response){
      el("#phone").innerHTML = "<br />" + response.phone;
      el("#street").innerHTML = response.street + "<br />";
    }
  });

  ajax("GET", "http://ineedaprompt.com/count", function loadCount(response){
    if(response.success){
      el("#promptNum").textContent = response.count.toLocaleString();
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
