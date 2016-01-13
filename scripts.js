"use strict";

window.onload = function(){

  var h = Helpers();

  h.ajax("GET", "php/contact.php", function loadContact(response){
    if(!response) return;
    else response = JSON.parse(response);
    h.el("#phone").innerHTML = "<br />" + response["phone"];
    h.el("#street").innerHTML = response["street"] + "<br />";
  });

  (function cssModes(){
    var mode, modes = {
      "business": {},
      "party":    {"media": "base"},
      "print":    {"theme": "business", "media": "print"}
    };
    var els = {
      list: h.el("#modes"),
      theme: h.el("#theme"),
      media: h.el("#media")
    }
    for(mode in modes){
      createModeOption(mode, modes[mode]);
    }
    function createModeOption(name, info){
      var link = h.setEl("A");
      link.textContent = name.charAt(0).toUpperCase() + name.substring(1) + " Mode";
      link.setAttribute("data-theme", (info["theme"] || name || "business"));
      link.setAttribute("data-media", (info["media"] || "screen"));
      link.addEventListener("click", optionListener);
      els.list.appendChild(link);
    }
    function optionListener(){
      els.theme.href = "css/" + this.getAttribute("data-theme") + ".css";
      els.media.href = "css/" + this.getAttribute("data-media") + ".css";
    }
  }());

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
    out.setEl = function(type){
      return document.createElement(type);
    }
    return out;
  }

}
