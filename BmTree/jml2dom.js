'use strict';
function jml2dom(jml) {
    switch (jml.constructor) {
    case String:
    case Number:
      return document.createTextNode(jml);
    case Array:
      let elem = document.createElement(jml.shift());
      if (jml.length>0 && jml[0].constructor==Object) {
        let al = jml.shift();
        for (let a in al) {
          if (a.match(/^on/) && al[a].constructor==Function)
            elem[a] = al[a];
          else if (a=="style" && al[a].constructor==Object)
            for (let s in al[a]) elem.style[s] = al[a][s];
          else
            elem.setAttribute(a, al[a]);
        }
      }
      while (jml.length > 0) {
        if (jml[0].constructor==NodeList) {
          for (let i=0; i<jml[0].length; i++) elem.appendChild(jml[0][i].cloneNode(true));
          jml.shift();
        }
        else elem.appendChild(jml2dom(jml.shift()));
      }
      return elem;
    default:
      return jml;
    }
  }
  