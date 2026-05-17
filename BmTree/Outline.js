'use strict';
var Outline = Outline || {};
(function ($) {

  $.displayChildren = function (parent, val) {
    let ce = parent.children, ret = false;
    for (let i=0; i<ce.length; i++) if (ce[i].className.match(/\bchild\b/)) {
      ce[i].style.display = val;
      ret = true;
    }
    return ret;
  };

  $.opng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABwSURBVChTY/zz589/BiIAExFqwErooPDs2bMMCxcuxHQRyDMwfPz48f+BgYH/fX194WIwObgbT58+zdDV1cWgqqqK1X9ghciKGBkZsSskRhFIJ8u1a9cYgO5guH79OtwkPz8/DFMZh2LM4EokRCcKAOxzRVVdKkpxAAAAAElFTkSuQmCC";
  $.cpng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAACqSURBVChTtdExCoQwEAXQ73ZpJDYprbxCDiBB8MiBEFOks80NLCysEhubgIspBNm4WOxO/WD+nylijDsezOuBSeRP0DmHbdu+pkir53mGtRbe+1t8ZuScwxiDZVmy+IRVVaFtW2itMU3TB760ppSi6zpIKbGu6wVfYAgBSin0fY+yLPPwKDIMA4QQqOv6fvU4jikjYyxbpjh+fdyxaRoQQm7Pk+CTf//+129INT0gbFjWOQAAAABJRU5ErkJggg==";

  $.treeInit = function (e) {
    let divs = document.getElementsByTagName("div");
    for (let i=0; i<divs.length; i++) if (divs[i].className.match(/\bparent\b/)) {
      let div = divs[i];
      $.displayChildren(div, "none");
      if (div.firstChild.nodeType==Node.ELEMENT_NODE) div.firstChild.onclick = $.toggleTree;
      let img = div.insertBefore(document.createElement("img"), div.firstChild);
      img.src = $.cpng;
      img.alt = "-";
      img.className = "toggle";
      img.onclick = $.toggleTree;
    }
  };

  $.toggleTree = function (e) {
    let p = e.target || event.srcElement;
    while (p.tagName!="DIV") p = p.parentNode;
    if (p.firstChild.src==$.cpng) {
      $.displayChildren(p, "");
      p.firstChild.src = $.opng;
    } else {
      $.displayChildren(p, "none");
      p.firstChild.src = $.cpng;
    }
    return false;
  };

})(Outline);

// if (window.addEventListener){
//   window.addEventListener('load', Outline.treeInit, false);
// } else if (window.attachEvent){
//   window.attachEvent('onload', Outline.treeInit);
// }

let sh = document.head.appendChild(document.createElement('style')).sheet;
sh.insertRule('.child { text-indent:0; }', 0);
sh.insertRule('.parent { text-indent:-10px; }', 1);
sh.insertRule('.parent > img.toggle { vertical-align:baseline; }', 2);
