"use strict";
var snck=(function(doc,eID){var _nTimeout=5400,_aQ=[];
    var _eSb=doc.getElementById(eID),_eSbText=_eSb.querySelectorAll("P")[0];
    var _fClose=function(){_aQ.shift();
    _eSb.classList.remove("snackbar__cont--show");
_eSb.classList.add("snackbar__cont--hide");
if(_aQ.length!=0){setTimeout(_fOpen,1200);
}};
var _fOpen=function(){_eSbText.innerHTML=_aQ[0].replace("|","<br>");
_eSb.style.left=((document.body.clientWidth/2)-(_eSb.clientWidth/2))+"px";
_eSb.classList.remove("snackbar__cont--hide");
_eSb.classList.add("snackbar__cont--show");
if ("vibrate" in navigator) { 
  window.navigator.vibrate([16,8]);
}
setTimeout(_fClose,_nTimeout);
};
return{q:function(sMsg){_aQ.push(sMsg);
    if(_aQ.length==1){_fOpen();
}}}})(document,"js-snackbar__id");
