"use strict";
var _aRevAct=0, _aRevX=0, _sRevId="", _bIsOpen = false, _fOnClose=null;
var a55Rev = {
  eRev: 0, eRevScrim: 0,
  "init" : function() {
    _aRevX = document.getElementsByClassName("close-reveal-modal");
    for (var i = 0, ln = _aRevX.length; i < ln; i++) {
        _aRevX[i].addEventListener("click", a55Rev.close, false);
    }
    _aRevAct = document.querySelectorAll("[data-rev-id]");
    for (var i = 0, ln = _aRevAct.length; i < ln; i++) {
        _aRevAct[i].addEventListener("click", a55Rev.open, false);
    }
    a55Rev.eRevScrim = document.getElementById("id-reveal__scrim");
  },
  "open" : function(e){
    _bIsOpen = true;
    _sRevId = this.getAttribute("data-rev-id");
    if(_sRevId){
      a55Rev.eRevScrim.classList.add("reveal__scrim");
      a55Rev.eRev = document.getElementById(_sRevId);
      a55Rev.eRev.classList.add("reveal__box");
      a55Rev.eRev.parentElement.classList.remove("reveal__init");
        a55Rev.eRev.style.top = String(window.pageYOffset + 84) + "px";
        a55Rev.eRev.style.visibility = "visible";
      a55Rev.eRev.setAttribute("aria-hidden", "false");
      e.preventDefault();
    }
    return false;
  },
  "close" : function(e){
    _bIsOpen = false;
    a55Rev.eRevScrim.classList.remove("reveal__scrim");
    a55Rev.eRev.classList.remove("reveal__box");
    a55Rev.eRev.parentElement.classList.add("reveal__init");
    a55Rev.eRev.setAttribute("aria-hidden", "true");
    if(e){ e.preventDefault(); }
    if( _fOnClose ) _fOnClose();
  },
  "autoOpen" : function(_sId){
    _bIsOpen = true;
    _sRevId = _sId;
    if(_sRevId){
      a55Rev.eRevScrim.classList.add("reveal__scrim");
      a55Rev.eRev = document.getElementById(_sRevId);
      a55Rev.eRev.classList.add("reveal__box");
      a55Rev.eRev.parentElement.classList.remove("reveal__init");
        a55Rev.eRev.style.top = String(window.pageYOffset + 84) + "px";
        a55Rev.eRev.style.visibility = "visible";
      a55Rev.eRev.setAttribute("aria-hidden", "false");
    }
    return false;
  },
  "isOpen" : function(){
    return _bIsOpen;
  },
  "setOnClose" : function( _f ){
    if( _f ) _fOnClose = _f;
  }
}; a55Rev.init();