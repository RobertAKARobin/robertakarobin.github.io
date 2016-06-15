"use strict";

window.onload = function(){

  var h = Helpers();
  var css = {
    modes: {
      "business": {},
      "party":    {"media": "base"},
      "print":    {"theme": "business", "media": "print"}
    },
    els: {
      list: h.el("#modes"),
      theme: h.el("#theme"),
      media: h.el("#media")
    }
  };

  (function setStartingCSS(){
    var mode = (location.hash || "").substring(1);
    var info = css.modes[mode];
    if(!info) return;
    setCSS(info["theme"] || mode, info["media"]);
  }());

  h.ajax("GET", "/contact.json", function loadContact(response){
    if(!response) return;
    h.el("#phone").innerHTML = "<br />" + response.phone;
    h.el("#street").innerHTML = response.street + "<br />";
  });

  (function setCSSModeOptions(){
    var mode;
    for(mode in css.modes){
      createModeOption(mode, css.modes[mode]);
    }
    function createModeOption(name, info){
      var link = h.setEl("A");
      link.textContent = name.charAt(0).toUpperCase() + name.substring(1) + " Mode";
      link.href = "#" + name;
      link.target = "_self";
      link.setAttribute("data-theme", (info["theme"] || name));
      link.setAttribute("data-media", info["media"] || "");
      link.addEventListener("click", optionListener);
      css.els.list.appendChild(link);
    }
    function optionListener(){
      setCSS(this.getAttribute("data-theme"), this.getAttribute("data-media"));
    }
  }());

  h.ajax("GET", "http://ineedaprompt.com/count", function loadCount(response){
    if(response.success){
      h.el("#promptNum").textContent = response.count.toLocaleString();
    }
  });

  function setCSS(theme, media){
    theme = (theme || "business");
    media = (media || "screen");
    css.els.theme.href = "css/" + theme + ".css";
    css.els.media.href = "css/" + media + ".css";
  }

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
        callback(JSON.parse(this.responseText));
      }
      http.send();
    }
    out.setEl = function(type){
      return document.createElement(type);
    }
    return out;
  }

}
