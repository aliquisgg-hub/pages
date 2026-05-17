'use strict';
/**************************************************************************************************/
// グローバル関数

function createNode(jm) {
  if (jm.constructor!==Array) return document.createTextNode(jm);
  var el = document.createElement(jm.shift());
  if (jm[0] && jm[0].constructor===Object) el.addProp(jm.shift());
  return el.appendChildNodes.apply(el, jm);
}

/**************************************************************************************************/
// グローバルクラス

// TxtFileReaderDialog
class TxtFileReaderDialog {
/*
メソッド
  open(callback, accept)
*/
  constructor() {
    this.input = createNode(["input", {type: "file"}]);
    this.form = createNode(["form", {style: "display:none;"}, this.input]);
    this.reader = new FileReader();
    this.input.onchange = ()=>{
      this.reader.readAsText(this.file = this.input.files[0], "UTF-8");
      this.form.reset();
    };
  }

  open(callback, accept){
    document.body.appendChild(this.form);
    if (accept) this.input.accept = accept;
    this.reader.onloadend = ()=>{
      console.log('Local file "'+this.file.name+'" read successfully.');
      callback(this.reader.result);
    };
    this.input.click();
  }

}

/**************************************************************************************************/
// オブジェクト拡張

//Object

Object.prototype.addProp = function (p) {
  for (let k in p) {
    if (p[k].constructor===Object) this[k].addProp(p[k]);
    else this[k] = p[k];
  }
  return this;
};

//Node

Node.prototype.setFirstChild = function (x) {
  switch (x.constructor) {
  case Array:  x = createNode(x); break;
  case Number:
  case String: x = createNode(x);
  }
  if (this.childNodes.length===0) this.appendChild(x);
  else this.replaceChild(x, this.firstChild);
  return this;
}

Node.prototype.appendChildNodes = function () {
  for (let x of arguments) switch (x.constructor) {
    case String:
    case Number:
    case Array:
      this.appendChild(createNode(x)); break;
    default:
      this.appendChild(x);
  }
  return this;
};

// MyDate
class MyDate extends Date {

  getYMD() {	// returns ["YY", "MM", "DD"]
    return [
      ""+this.getFullYear(),
      ("0"+(this.getMonth()+1)).slice(-2),
      ("0"+this.getDate()).slice(-2)
    ];
  }

  toMyTimeString() {	// returns "YYMMDD_hhmmss.mmm"
    return this.getYMD().concat([
      "_",
      ("0"+this.getHours()).slice(-2),
      ("0"+this.getMinutes()).slice(-2),
      ("0"+this.getSeconds()).slice(-2),
      ".",
      ("00"+this.getMilliseconds()).slice(-3)
    ]).join("");
  }

}

// MyDropbox extends Dropbox
//   Dropbox (Dropbox-sdk.js) from https://cdnjs.com/libraries/dropbox.js/
//   https://cdnjs.cloudflare.com/ajax/libs/dropbox.js/2.5.13/Dropbox-sdk.min.js

class MyDropbox extends Dropbox {

  readFile(filename, suc, err) {
    this.filesDownload({ path: "/"+filename })
    .then(function (data) {
      var reader = new FileReader();
      reader.addEventListener("loadend", function (e) {
        console.log('File "'+filename+'" read from Dropbox successfully.');
        suc(e.target.result);
      });
      reader.readAsText(data.fileBlob);
    })
    .catch(function (error) {
      if (err) err(error);
      //console.error('API error: ' + error.response.error.message);
    });
  }

  writeFileWithBom(filename, contents, suc, err) {
    const bom = "\uFEFF";
    if(!filename.length || !contents.length){
      alert('filename or content is empty.');
    }
    this.filesUpload(
      { path: '/' + filename, contents: bom+contents, mode: 'overwrite' } // 既存ファイルがあるとき上書き
      //{ path: '/' + filename, contents: bom+contents, autorename: true } // 既存ファイルがあるときリネーム
    )
    .then(function (response) {
      console.log('File "'+filename+'" written to Dropbox successfully.');
      if (suc) suc(response);
    })
    .catch(function (error) {
      if (err) err(error);
      //console.error('API error: ' + error.response.error.message);
    });
  }

}

/**************************************************************************************************/
// DateEntry部品
class DateEntry {
/*
コンストラクタ関数
  DateEntry([w, [h]])
    w: 幅(px単位)．省略時は 340．35の倍数+25 が望ましい．
    h: 高さ(px単位)．省略時は 26．

プロパティ・メソッド
  value:       選択された日付のDateオブジェクト．
  stringValue: 選択された日付の yyyy/mm/dd 型の文字列．

イベント
  change:      日付が変更されたときに発生する．
*/
  constructor(w, h) {
    w = w||340; h = h||26;

    const week = ["日","月","火","水","木","金","土"];

    // 内部変数・関数
    var value;

    function setCal(y, m) {
      spnY.setFirstChild(y);
      spnM.setFirstChild(m);
      var tday = new MyDate().getYMD();
      var cur = value.getYMD();
      var d1 = new MyDate(y, m-1, 1), d2=new MyDate(y, m, 1);
      var f = d1.getDay(), ds=(d2.getTime()-d1.getTime())/86400000;
      tds.map(td => { td.style.fontWeight = td.style.backgroundColor = ""; });
      for (let i=0; i<42; i++) {
        tds[i].setFirstChild((f<=i && i<f+ds) ? i-f+1 : "");
      }
      if (y===tday[0]-0 && m===tday[1]-0) tds[tday[2]-1+f].style.fontWeight = "bold";
      if (y===cur[0]-0 && m===cur[1]-0) tds[cur[2]-1+f].style.backgroundColor = "#DDDDDD";
    }

    function hideCal() {
      tblCal.style.display = "none";
    }

    function setDt(dt) {
      var ymd = dt.getYMD();
      var wday = dt.getDay();
      value = dt;
      spnDt.setFirstChild(dateEntry.stringValue + " (" + week[wday] + ")");
      switch (wday%7) {
      case 0:  spnDt.style.color = "red"; break;
      case 6:  spnDt.style.color = "blue"; break;
      default: spnDt.style.color = "";
      }
      setCal(ymd[0]-0, ymd[1]-0);
      hideCal();
      dateEntry.dispatchEvent(new Event("change"));
    }

    // エレメントの構成
    var btnPD = createNode(
      ["input", { type:"button", name:"PD", value:"前日", style:{
            width: w/5+"px", height: h+"px", verticalAlign: "bottom", fontSize: "100%"//, fontWeight: "bold"
      }}]
    );
    var btnND = btnPD.cloneNode().addProp({ name:"ND", value:"翌日" });
    var btnTD = btnPD.cloneNode().addProp({ name:"TD", value:"今日" });
    var spnDt = createNode(
      ["span", { style: {
            display: "inline-block",
            border: "solid #AAAAAA 1px",
            width: w*2/5-2+"px",
            height: h-2+"px",
            textAlign: "center",
            fontSize: "90%"
      }}]
    );

    var btnPM = createNode(
      ["td", { name:"PM", colSpan:2, style:{ textAlign:"center" }}, "\u25C0"]);
    var btnNM = btnPM.cloneNode().addProp({ name:"NM" }).appendChildNodes("\u25B6");

    var spnM = createNode(["span"]);
    var spnY = createNode(["span"]);

    var row = week.map(d => createNode(
        ["td", { style: { width:(w-4)/7-28+"px", padding:"0px 13px", textAlign:"right", fontWeight: "bold" }}, d]
    ));
    row[0].style.color = "red"; row[6].style.color = "blue";

    var tblCal = createNode(
      ["table", { style:{ border:"solid #DDDDDD 1px", backgroundColor:"#FFFFFF", position:"absolute" }},
        ["tr",
          btnPM,
          ["td", { colSpan:3, style:{ textAlign:"center" }}, ["strong", spnM, "月"], " (", spnY, ")"],
          btnNM,
        ],
        ["tr"].concat(row)
      ]
    );
    var tds = [];
    for (let i=0; i<6; i++) {
      let cpy = row.map(td => td.cloneNode(true));
      tblCal.appendChild(createNode(["tr"].concat(cpy)));
      tds = tds.concat(cpy);
    }
    var dateEntry = createNode(
      ["div", { className:"DateEntry", style: { lineHeight: (h-2)+"px" }},
        btnPD, spnDt, btnND, btnTD, tblCal]);

    // イベントハンドラ
    btnPD.onclick=
    btnND.onclick=
    btnTD.onclick=(e)=>{
      var bias = 86400000;
      switch (e.target.name) {
      case "TD": dateEntry.value = new MyDate(); return;
      case "PD": bias = -bias;
      case "ND": 
      }
      var cur = new MyDate(spnDt.innerHTML);
      cur.setTime(cur.getTime()+bias);
      dateEntry.value = cur;
    };

    spnDt.onclick = (e)=>{
      if (tblCal.style.display==="table") {
        hideCal();
      } else {
        tblCal.style.display = "table";
      }
    };

    btnPM.onclick = 
    btnNM.onclick = (e)=>{
      var [y, m] = [spnY.innerHTML-0, spnM.innerHTML-0];
      switch (e.target.name) {
      case "PM": if (--m===0)  { m = 12; y--; } break;
      case "NM": if (++m===13) { m = 1;  y++; }
      }
      setCal(y, m);
    };

    tds.map(td => { td.onclick=(e)=>{
      dateEntry.stringValue = [spnY.innerHTML, spnM.innerHTML, e.target.innerHTML].join("/");
    }; });

    // プロパティ・メソッド
    Object.defineProperty(dateEntry, "value", {
      set: setDt,
      get: () => value
    });
    Object.defineProperty(dateEntry, "stringValue", {
      set: (s)=> (s==="") || setDt(new MyDate(s)),
      get: () => value.getYMD().join("/")
    });

    // 初期化
    dateEntry.value = new MyDate();

    return dateEntry;
  }
}

/**************************************************************************************************/
// ItemEntry部品
class ItemEntry {
/*
コンストラクタ関数
  ItemEntry(w, h)
    w: 幅(px単位)
    h: 高さ(px単位)

プロパティ
  heading      <readonly>
  description  <readonly>

メソッド
  setValue(h, d)

イベント
  keyup
*/
  constructor(w, h) {

    // エレメントの構成
    var itemEntry = createNode(
      ["textarea", { className:"ItemEntry", style:{
            display: "block",
            width: (w-6)+"px",
            height: (h-6)+"px",
            fontSize: "125%",
            lineHeight: "125%"
      }}]
    );

    // プロパティ・メソッド
    Object.defineProperty(itemEntry, "heading", {
      get: ()=>itemEntry.value.substr(0, (itemEntry.value+"\n").indexOf("\n")).trim()
    });
    Object.defineProperty(itemEntry, "description", {
      get: ()=>itemEntry.value.substr((itemEntry.value+"\n").indexOf("\n")+1).trim()
    });

    itemEntry.setValue=(h, d)=>{
      itemEntry.value = (h + "\n" + d).trim();
      itemEntry.dispatchEvent(new Event("keyup"));
    };

    return itemEntry;
  }
}

/**************************************************************************************************/
// AmountEntry部品
class AmountEntry {
/*
コンストラクタ関数
  AmountEntry(w, h)
    w: 幅(px単位)
    h: 高さ(px単位)
 
プロパティ・メソッド
  sign
  value
  absValue  <readonly>
  calc()
イベント
  change
*/
  constructor(w, h) {

    // 内部定数・関数
    const keys = ["7","8","9","(",")","4","5","6","/","C","1","2","3","*","BS","0",".","+","-","="];
    const faces = keys.map((str)=>str.replace(/./g, (c)=>String.fromCharCode(c.charCodeAt(0)+65248)));
    const outogo = createNode("支出");
    const income = createNode("収入");

    function setNeg() {
      btnSign.addProp({ value:-1, style:{
            border: "2px outset #DDDDDD",
            background: "#CCAAAA linear-gradient(to bottom, #FFDDDD, #DDBBBB)",
      }}).setFirstChild(outogo);
      txtAmo.addProp({ style:{ backgroundColor: "#FFDDDD" }});
    }

    function setPos() {
      btnSign.addProp({ value:1, style:{
            border: "2px inset #DDDDDD",
            background: "#AACCAA linear-gradient(to bottom, #BBDDBB, #DDFFDD)",
      }}).setFirstChild(income);
      txtAmo.addProp({ style:{ backgroundColor: "#DDFFDD" }});
    }

    function toggleSign(sign) {
      switch (sign) {
      case "-": setNeg(); break;
      case "+": setPos(); break;
      default:  amountEntry.sign==="-" ? setPos() : setNeg();
      }
      amountEntry.dispatchEvent(new Event('change'));
    }

    function keyHandler(e) {
      var key = e.target.name;
      var x;
      switch (key) {
      case "C":
        txtAmo.value = "0";
        amountEntry.dispatchEvent(new Event('change'));
        return;
      case "BS":
        txtAmo.value = txtAmo.value.slice(0, -1);
        if (txtAmo.value==="") txtAmo.value = "0";
        amountEntry.dispatchEvent(new Event('change'));
        return;
      case "=":
        try {
          x = eval(txtAmo.value);
          if (!isNaN(x)) {
            if (x<0) {
              x = -x;
              toggleSign();
            }
            txtAmo.value = x;
          }
        } catch (e) { alert("数式が誤っています"); }
        break;
      default:
        txtAmo.value += key;
      }
      txtAmo.value = txtAmo.value.replace(/(^|[^0-9.])0([0-9(])/g,"$1$2");
      var result = amountEntry.sign==="-" ? -amountEntry.absValue : amountEntry.absValue;
      if (!isNaN(result)) amountEntry.value = result;
      else amountEntry.dispatchEvent(new Event('change'));
   }

    // エレメントの構成・イベントハンドラ
    var btnSign = createNode(
      ["span", { value:-1, onclick:toggleSign, style:{
            display: "inline-block",
            border: "2px outset #DDDDDD",
            background: "#CCAAAA linear-gradient(to bottom, #FFDDDD, #DDBBBB)",
            width: (w/5-4)+"px",
            height: (h-4)+"px",
            textAlign: "center"
      }}, outogo]
    );
    var txtAmo = createNode(
      ["input", { type:"text", readOnly:true, value:"0", style:{
            backgroundColor: "#FFDDDD",
            fontSize: "20px",
            width: (w*4/5-12)+"px",
            height: (h-4)+"px",
            padding: "0px 4px",
            marginTop: "0px",
            verticalAlign: "bottom",
            textAlign: "right"
      }}]
    );
    var btn = createNode(
      ["input", { type:"button", style:{
            width: (w/5)+"px", height: h+"px", verticalAlign: "bottom", fontSize: "100%"//, fontWeight: "bold"
      }}]
    );
    var amountEntry = createNode(
      ["div", { className:"AmountEntry", style: { lineHeight: (h-4)+"px" }}, btnSign, txtAmo]
    );
    for (let i=0; i<20; i++) {
      if (i%5===0) amountEntry.appendChild(document.createElement("br"));
      amountEntry.appendChild(btn.cloneNode()
        .addProp({ name:keys[i], value:faces[i], onclick:keyHandler })
      );
      if (keys[i]==="=") var btnEq = amountEntry.lastChild;
    }

    // プロパティ・メソッド
    Object.defineProperty(amountEntry, "sign", {
      set: toggleSign,
      get: ()=>(btnSign.value>0 ? "+" : "-")
    });
    Object.defineProperty(amountEntry, "value", {
      set: (v)=>{
        v>0 ? setPos() : setNeg();
        txtAmo.value = Math.abs(v);
        amountEntry.dispatchEvent(new Event('change'));
      },
      get: ()=>btnSign.value*txtAmo.value
    });
    Object.defineProperty(amountEntry, "absValue", {
      get: ()=>txtAmo.value-0
    });
    
    amountEntry.calc=()=>{ btnEq.dispatchEvent(new Event("click")); }
    
    return amountEntry;
  }
}

/**************************************************************************************************/
// TemplateSelector部品
class TemplateSelector {
/*
コンストラクタ関数
  TemplateSelector(ie, ae, w, h)
    ie: 接続するItemEntry部品
    ae: 接続するAmountEntry部品
    w:  幅(px単位)
    h:  高さ(px単位)
メソッド
  setTemplates(tmpls)
イベント
  templates.change
*/
  constructor(itemEntry, amountEntry, w, h) {

    // 内部変数・関数
    var templates=[];

    function setTemplates() {
      while(selTmpl.options.length>1)selTmpl.remove(1);
      for (let i=0; i<templates.length; i++) {
        var [sign, amo, head, desc] = templates[i];
        var s = (sign==="-" ? "支出" : "収入") + " : " + head + " : " + amo + " : " + desc;
        var opt = selTmpl.appendChild(createNode(["option", {style: {fontSize: "80%"}}]));
        opt.appendChild(createNode(s.replace("\n", "／")));
        opt.value = i;
      }
    }

    function useTmpl(e) {
      var [sign, amo, head, desc] = templates[selTmpl.value];
      amountEntry.value = amo;
      amountEntry.sign = sign;
      itemEntry.setValue(head, desc);
      selTmpl.selectedIndex = 0;
    }

    function chkTmpl(e) {
      //console.log([amountEntry.sign, amountEntry.absValue, itemEntry.heading, itemEntry.description]);
      btnAddTmpl.disabled = btnDelTmpl.disabled = true;
      if (itemEntry.heading==="" || isNaN(amountEntry.absValue)) return false;
      for (let i=0; i<templates.length; i++) {
        if (templates[i][2]!==itemEntry.heading) continue;
        if (templates[i][1]!==amountEntry.absValue) continue;
        if (templates[i][3]!==itemEntry.description) continue;
        if (templates[i][0]!==amountEntry.sign) continue;
        btnDelTmpl.disabled = false;
        return i;
      }
      btnAddTmpl.disabled = false;
      return false;
    }

    function cmpTmpl(a, b) {
      if (a[0]<b[0]) return 1;
      if (a[0]>b[0]) return -1;
      if (a[2]<b[2]) return -1;
      if (a[2]>b[2]) return 1;
      if (a[1]<b[1]) return -1;
      if (a[1]>b[1]) return 1;
      if (a[3]<b[3]) return -1;
      if (a[3]>b[3]) return 1;
      return 0;
    }

    function addTmpl(e) {
      templates.push([amountEntry.sign, amountEntry.absValue, itemEntry.heading, itemEntry.description]);
      templates.sort(cmpTmpl);
      templateSelector.dispatchEvent(new Event("templates.change"));
      setTemplates();
      chkTmpl();
    }

    function delTmpl(e) {
      if (!confirm("テンプレートを削除しますか？")) return;
      templates.splice(chkTmpl(), 1);
      templateSelector.dispatchEvent(new Event("templates.change"));
      setTemplates();
      chkTmpl();
    }

    // エレメントの構成
    var selTmpl = createNode(
      ["select", { style: { width:(w*4/5)+"px", height:h+"px", fontSize: "100%" }},
        ["option", { value:"-1" }, "テンプレート"]
      ]
    );
    var btnAddTmpl = createNode(
      ["input", { type:"button", value:"＋", disabled:true, style:{
            width: (w/10)+"px", height: h+"px", verticalAlign: "bottom", fontWeight: "bold", fontSize: "100%"
      }}]
    );
    var btnDelTmpl = btnAddTmpl.cloneNode().addProp({ value:"－" })
    var templateSelector = createNode(
      ["div", { className:"TemplateSelector" }, selTmpl, btnAddTmpl, btnDelTmpl]
    );

    // イベントハンドラ
    itemEntry.onkeyup=
    amountEntry.onchange=chkTmpl;
    selTmpl.onchange=useTmpl;
    btnAddTmpl.onclick=addTmpl;
    btnDelTmpl.onclick=delTmpl;

    // メソッド
    templateSelector.setTemplates=(t)=>{ templates=t; setTemplates(); };

    return templateSelector;
  }
}

/**************************************************************************************************/
// MlogForm部品
class MlogForm {
/*
コンストラクタ関数
  MlogForm(w, h)
    w:  幅(px単位)
    h:  高さ(px単位)
プロパティ
  value
メソッド
  setTemplates(tmpls)
イベント
  enter
  delete
  templates.change
*/
  constructor(w, h) {

    // 内部変数・関数
    var last;

    function chkChange() {
      if ((last[0]==="" || dateEntry.stringValue===last[0])
          && amountEntry.value===last[1]
          && itemEntry.heading===last[2] && itemEntry.description===last[3])
      {
        btnOK.disabled = btnCancel.disabled = true;
        btnDelete.disabled = false;
      } else {
        btnOK.disabled = isNaN(Number(amountEntry.value));
        btnCancel.disabled = false;
        btnDelete.disabled = true;
      }
    }

    // エレメントの構成
    var dateEntry = new DateEntry(w, h);
    var itemEntry = new ItemEntry(w, h*2.5);
    var amountEntry = new AmountEntry(w, h);
    var templateSelector = new TemplateSelector(itemEntry, amountEntry, w, h);
    var btnOK = createNode(
      ["input", { type:"button", value:"追加", disabled:true, style:{
            width: (w/5)+"px", height: h+"px", verticalAlign: "bottom", fontSize: "100%"//, fontWeight: "bold"
      }}]
    );
    var btnCancel = btnOK.cloneNode().addProp({ value:"取消" });
    var btnDelete = btnOK.cloneNode().addProp(
      { value:"削除", style:{ position:"absolute", left:(w*4/5+8)+"px", visibility:"hidden" }}
    );
    var mlogForm = createNode(
      ["div", { className:"MlogForm" },
        dateEntry,
        templateSelector,
        itemEntry,
        amountEntry.addProp({ style:{ padding:"8px 0px" }}),
        btnOK, btnCancel, btnDelete
      ]
    );

    // イベントハンドラ
    templateSelector.addEventListener("templates.change", (e)=>{
      mlogForm.dispatchEvent(new Event("templates.change"));
    });
    btnOK.onclick=(e)=>{
      var ev = new Event("enter");
      ev.result = mlogForm.value;
      mlogForm.dispatchEvent(ev);
    };
    btnCancel.onclick=(e)=>{ mlogForm.value = last; };
    btnDelete.onclick=(e)=>{ mlogForm.dispatchEvent(new Event("delete")); };
    dateEntry.onclick=
    amountEntry.onclick=chkChange;
    itemEntry.addEventListener("keyup", chkChange, false);

    // プロパティ
    Object.defineProperty(mlogForm, "value", {
      set: (r)=>{
        last = r;
        if (r[0]==="") {
          btnOK.value = "追加";
          btnDelete.addProp({ style:{ visibility:"hidden" }});
        } else {
          btnOK.value = "決定";
          btnDelete.addProp({ style:{ visibility:"visible" }});
        }
        dateEntry.stringValue = r[0];
        amountEntry.value = r[1];
        itemEntry.setValue(r[2], r[3]);
      },
      get: ()=>[dateEntry.stringValue, amountEntry.value, itemEntry.heading, itemEntry.description]
    });

    // メソッド
    mlogForm.setTemplates=(t)=>{ templateSelector.setTemplates(t); };

    return mlogForm;
  }
}

/**************************************************************************************************/
// ListItem部品
class ListItem {
/*
コンストラクタ関数
  ListItem(r, w, h)

*/
  constructor(r, w, h) {

    // 内部関数
    function datFormat(ymd) {
      return ymd.slice(5).replace(/0(\d)/g, "\u2007$1");
      //return ymd.slice(5).replace(/0(\d)/g,'<span style="color:transparent">0</span>$1');
    }

    function amoFormat(x) {
      return x>0 ? "+" + x.toLocaleString() + "\u2008\u2007\u2007\u2007"
      //return x>0 ? "+" + x.toLocaleString() + '<span style="color:transparent">,000</span>'
                 : (-x).toLocaleString();
    }

    // エレメントの構成
    var spnDate = createNode(
      ["span", { style:{
            display: "inline-block", whiteSpace: "nowrap", overflow: "visible", width: "68px", 
      }}]
    );

    var spnHead = spnDate.cloneNode().addProp({ style:{ width:(w-282)+"px" }});
    var spnAmo = spnDate.cloneNode().addProp({ style:{ width: "204px", textAlign: "right"}});

    var listItem = createNode(
      ["div", { className:"ListItem", style:{
            width: (w-10)+"px",
            height: (h-2)+"px",
            lineHeight: (h-2)+"px",
            padding: "0px 4px",
            borderLeft: "solid #AAAAAA 1px",
            borderRight: "solid #AAAAAA 1px",
            borderBottom: "solid #AAAAAA 1px"
      }}, spnDate, spnHead, spnAmo]
    );

    spnDate.appendChild(createNode(datFormat(r[0])));
    spnAmo.appendChild(createNode(amoFormat(r[1])));
    spnHead.appendChild(createNode(r[2]));

    return listItem;
  }
}
/**************************************************************************************************/
// MlogList部品
class MlogList {
/*
コンストラクタ関数
  MlogList(w, h)
メソッド
  setRecords(rs)
イベント
  select
*/
  constructor(w, h) {

    // 内部変数・関数
    //var records;

    // エレメントの構成
    var mlogList = createNode(
      ["div", { className:"MlogList", style:{ borderTop:"solid #AAAAAA 1px" }}]
    );

    // メソッド
    mlogList.setRecords=(rs, cur)=>{
      while (mlogList.firstChild) mlogList.removeChild(mlogList.firstChild);
      for (let i=0; i<rs.length; i++) {
        let li = new ListItem(rs[i], w, h).addProp({ id:i });
        if (i===cur) li.style.backgroundColor = "#DDDDDD";
        li.onclick=(e)=>{
          var ev = new Event("select");
          ev.result = i;
          mlogList.dispatchEvent(ev);
        };
        mlogList.appendChild(li);
      }
    };

    return mlogList;
  }
}

/**************************************************************************************************/
// MlogTop部品
class MlogTop {
/*
コンストラクタ関数
  MlogTop(w, h)
イベント
  mode, prev, next, new
プロパティ・メソッド
  mode         <readonly>
  current
  number
  listMode()
  editMode()
*/
  constructor(w, h) {

    // 内部変数・関数
    var mode = "edit";
    function chkBtns() {
      btnPrev.disabled = (spnCur.innerHTML==="1");
      btnNext.disabled = (spnCur.innerHTML==="-");
    }

    // エレメントの構成
    var spnCur = document.createElement("span");
    var spnNum = document.createElement("span");
    var spnIdx = createNode(
      ["span", { style:{
            display: "inline-block",
            width: (3*w/10)+"px",
            height: h+"px",
            textAlign: "center"
      }}, spnCur, "/", spnNum]
    );
    var btnMode = createNode(
      ["input", { type:"button", value:"リスト", style:{
            width: (w/5)+"px", height: h+"px", verticalAlign: "bottom", fontSize: "100%"//, fontWeight: "bold"
      }}]
    );
    var btnPrev = btnMode.cloneNode().addProp({ value:"＜", style:{ width:(3*w/20)+"px" }});
    var btnNext = btnPrev.cloneNode().addProp({ value:"＞" });
    var btnNew = btnMode.cloneNode().addProp({ value:"新規" });
    var mlogTop = createNode(
      ["div", { className:"MlogTop", style: { lineHeight: h+"px" }}, 
        btnMode, btnPrev, spnIdx, btnNext, btnNew]);

    // イベントハンドラ
    btnMode.onclick=(e)=>{ mlogTop.dispatchEvent(new Event("mode")); };
    btnPrev.onclick=(e)=>{ mlogTop.dispatchEvent(new Event("prev")); };
    btnNext.onclick=(e)=>{ mlogTop.dispatchEvent(new Event("next")); };
    btnNew.onclick=(e)=>{ mlogTop.dispatchEvent(new Event("new")); };

    // プロパティ・メソッド
    Object.defineProperty(mlogTop, "mode", {
      get: ()=>mode
    });
    Object.defineProperty(mlogTop, "current", {
      set: (n)=>{
        spnCur.setFirstChild(n<0 ? "-" : n+1);
        chkBtns();
      },
      get: ()=>spnCur.innerHTML==="-" ? -1 : spnCur.innerHTML-1
    });
    Object.defineProperty(mlogTop, "number", {
      set: (n)=>{ spnNum.setFirstChild(n);},
      get: ()=>spnNum.innerHTML-0
    });
    mlogTop.listMode=()=>{
      //frmBtns.style.visibility = "hidden";
      [mode, btnMode.value, btnPrev.value, btnNext.value] = ["list", "編集", "∧", "∨"];
    };
    mlogTop.editMode=()=>{
      //frmBtns.style.visibility = "visible";
      [mode, btnMode.value, btnPrev.value, btnNext.value] = ["edit", "リスト", "＜", "＞"];
    };

    return mlogTop;
  }
}

/**************************************************************************************************/
// MlogMid部品
class MlogMid {
/*
コンストラクタ関数
  MlogMid(w, h)
プロパティ
  content
*/
  constructor(w, h) {

    // エレメントの構成
    var mlogMid = createNode(
      ["div",
        { className:"MlogMid", 
          style:{ width: w+"px", height: (h-16)+"px", margin: "8px 0px", overflowX: "hidden"}},
        ["span"]
      ]
    );

    // プロパティ
    Object.defineProperty(mlogMid, "content", {
      set: (el)=>{ mlogMid.setFirstChild(el); },
      get: ()=>mlogMid.firstChild
    });
    return mlogMid;
  }
}

/**************************************************************************************************/
// MlogBottom部品
class MlogBottom {
/*
コンストラクタ関数
  MlogBottom(w, h)
イベント
  menu.select
メソッド
  total(records)
*/
  constructor(w, h) {

    // 内部変数・関数
    var records;
    function menuHandler(e) {
      if (e.target.id == "") return;
      var ev = new Event("menu.select");
      ev.result = e.target.id;
      mlogBottom.dispatchEvent(ev);
      e.target.parentNode.style.display = "none";
    }

    // エレメントの構成・イベントハンドラ
    var btnMenu = createNode(
      ["span", { style:{
            display: "inline-block",
            //verticalAlign: "bottom",
            textAlign: "center",
            width: "24px",
            height: (h-2)+"px",
            font: "400 20px Arial"
      }}, "≡"]
    );
    var menuItems = [
      ["carryOver", "繰り越し処理"],
      ["", ["hr"]],
      ["chRecs", "データの切り替え"],
      ["chTmpls", "テンプレートの切り替え"],
      ["reset", "デフォルトのデータ・テンプレート"],
      ["", ["hr"]],
      ["exRecs", "データのエクスポート"],
      ["exTmpls", "テンプレートのエクスポート"],
      ["imTmpls", "テンプレートのインポート"],
    ];
    var ulMenu = createNode(
      ["ul", { style: {
          display: "none",
          position: "absolute",
          bottom: (h+12)+"px",
          margin: "0px",
          padding: "4px",
          backgroundColor: "white",
          border: "solid #AAAAAA 1px",
          listStyle: "none"
      }}].concat(menuItems.map((item)=>createNode(["li", { id: item[0], onclick: menuHandler }, item[1]])))
    );

    var spnHead = createNode(
      ["span", { style:{
            display: "inline-block",
            //verticalAlign: "bottom",
            width: "48px",
            height: (h-2)+"px",
            font: "400 20px Arial"
      }}, "Total:"]
    );
    var spnValue = spnHead.cloneNode().addProp({ style:{ textAlign:"right", width:(w-82)+"px" }});

    var mlogBottom = createNode(
      ["div", { className:"MlogBottom", style:{
            width: (w-10)+"px",
            height: (h-2)+"px",
            padding: "0px 8px 0px 0px",
            border: "solid #AAAAAA 1px"
      }}, ulMenu, btnMenu, spnHead, spnValue]
    );

    // イベントハンドラ
    btnMenu.onclick=(e)=>{
      if (ulMenu.style.display==="none") ulMenu.style.display = "block";
      else ulMenu.style.display = "none";
    };

    // メソッド
    mlogBottom.total=(r)=>{
        var v=0;
        for (let i=0; i<r.length; i++) v+=r[i][1];
        spnValue.setFirstChild("￥"+v.toLocaleString());
        return v;
    };

    return mlogBottom;
  }
}

/**************************************************************************************************/
// Mlog本体
class Mlog {
/*
コンストラクタ関数
  Mlog(token)
メソッド
  run()
*/
  constructor(token, recordFileStem, templateFileStem) {

    // 内部定数・変数・関数
    const elementHeight = 36;
    var [width, height]
      = [window.innerWidth-20, window.innerHeight-elementHeight-30/*-2*elementHeight*/-20];
    var dbx, records, current, templates;

    function csvToArray(csv) {
      if (csv==="") return [];
      return JSON.parse("["+csv.trim().replace(/^.*$/mg, "[$&]").replace(/\r?\n/g, ",")+"]")
      .map((r)=>{ r[1]-=0; return r; })
      ;
    }

    function arrayToCsv(arr) {
      return arr.map((r)=>JSON.stringify(r).replace(/^\[(.*)\]$/,"$1")).join("\n");
    }

    function carryOver() {
      if (!confirm("繰り越し処理を実行しますか？")) return;
      mlogMask.style.display = "block";
      var dt = new MyDate();
      var recfile = recordFileStem+dt.toMyTimeString()+".csv";

      dbx.writeFileWithBom(recfile, arrayToCsv(records), function (res) {
        if (confirm("データが " + recfile + " に保存されました．続行しますか？")) {
          mlogMask.style.display = "block";
          var rec = [ dt.getYMD().join("/"), mlogBottom.total(records), "繰り越し", dt.toString() ];
          mlogBottom.total(records = [rec]);
          mlogTop.editMode();
          mlogTop.number = records.length;
          mlogForm.value = records[mlogTop.current=current=-1] = ["", 0, "", ""];
          mlogMid.content = mlogForm;
          dbx.writeFileWithBom(recordFileStem+".csv", arrayToCsv(records), function (res) {
            mlogMask.style.display = "none";
          });
        }
        mlogMask.style.display = "none";
      });
    }

    function cmpTmpl(a, b) {
      if (a[0]<b[0]) return 1;
      if (a[0]>b[0]) return -1;
      if (a[2]<b[2]) return -1;
      if (a[2]>b[2]) return 1;
      if (a[1]<b[1]) return -1;
      if (a[1]>b[1]) return 1;
      if (a[3]<b[3]) return -1;
      if (a[3]>b[3]) return 1;
      return 0;
    }

    function uniqTmpl(tmpl) {
      tmpl.sort(cmpTmpl);
      return tmpl.filter((x, i, self) => i===0||cmpTmpl(x, self[i-1]));
    }

    function chkTmpl(tmpl) {
      return tmpl.filter((x) =>
        x.length!==4
        || (x[0]!=="+" && x[0]!=="-")
        || typeof x[1] !== "number"
        || typeof x[2] !== "string"
        || typeof x[3] !== "string"
      ).length===0;
    }

    // エレメントの構成
    var mlogTop = new MlogTop(width, elementHeight);
    var mlogForm = new MlogForm(width, elementHeight);
    var mlogList = new MlogList(width, elementHeight);
    var mlogMid = new MlogMid(width, height);
    var mlogBottom = new MlogBottom(width, 30/*elementHeight*/)
    mlogMid.content = mlogForm;
    var mlog = createNode(["div", { className:"Mlog" }, mlogTop, mlogMid, mlogBottom]);

    var mlogMask = createNode(["div",{ style:{
        position:"absolute",
        top:"0px", left:"0px",
        width:window.innerWidth+"px", height:window.innerHeight+"px",
        backgroundColor:"rgba(153,153,153,0.5)"
    }}]);
    var mlogMask2 = mlogMask.cloneNode();

    var dialog = new TxtFileReaderDialog();

    // イベントハンドラ
    mlogTop.addEventListener("mode", function (e) {
      if (mlogTop.mode == "edit") {
        mlogList.setRecords(records, current);
        mlogTop.listMode();
        mlogMid.content = mlogList;
        mlogMid.scrollTop
          = current<0 ? mlogMid.scrollHeight
                    : mlogList.childNodes[current].offsetTop - mlogList.offsetTop;
      } else {
        mlogTop.editMode();
        mlogForm.value = records[mlogTop.current = current];
        mlogMid.content = mlogForm;
      }
    }, false);
    mlogTop.addEventListener("prev", function (e) {
      mlogTop.current = current = current<0 ? records.length-1 : --current;
      if (mlogTop.mode == "edit") {
        mlogForm.value = records[current];
      } else {
        mlogList.setRecords(records, current);
      }
    }, false);
    mlogTop.addEventListener("next", function (e) {
      mlogTop.current = current = ++current>=records.length ? -1 : current
      if (mlogTop.mode == "edit") {
        mlogForm.value = records[current];
      } else {
        mlogList.setRecords(records, current);
      }
    }, false);
    mlogTop.addEventListener("new", function (e) {
      mlogTop.editMode();
      mlogForm.value = records[mlogTop.current=current = -1];
      mlogMid.content = mlogForm;
    }, false);

    mlogForm.addEventListener("enter", function (e) {
      mlogMask.style.display = "block";
      if (current<0) {
        var i = records.length;
        records.push(e.result);
        while (i>0 && records[i][0]<records[i-1][0]) {
          i--;
          [records[i], records[i+1]] = [records[i+1], records[i]];
        }
        mlogTop.number = records.length;
      } else {
        records[current] = e.result;
        while (current>0 && records[current][0]<records[current-1][0]) {
          current--;
          [records[current], records[current+1]] = [records[current+1], records[current]];
        }
        while (current<records.length-1 && records[current][0]>records[current+1][0]) {
          current++;
          [records[current-1], records[current]] = [records[current], records[current-1]];
        }
      }
      dbx.writeFileWithBom(recordFileStem+".csv", arrayToCsv(records), function (res) {
        mlogMask.style.display = "none";
      });
      mlogForm.value = records[mlogTop.current = current];
      mlogBottom.total(records);
    }, false);
    mlogForm.addEventListener("delete", function (e) {
      if (!confirm("このデータを削除しますか？")) return;
      mlogMask.style.display = "block";
      records.splice(current,1);
      dbx.writeFileWithBom(recordFileStem+".csv", arrayToCsv(records), function (res) {
        mlogMask.style.display = "none";
      });
      mlogForm.value = records[mlogTop.current = current = (mlogTop.current>=(mlogTop.number = records.length)) ? -1 : current];
      mlogBottom.total(records);
    }, false);
    mlogForm.addEventListener("templates.change", function (e) {
      mlogMask2.style.display = "block";
      dbx.writeFileWithBom(templateFileStem+".csv", arrayToCsv(templates), function (res) {
        mlogMask2.style.display = "none";
      });
    }, false);

    mlogList.addEventListener("select", function (e) {
      mlogTop.editMode();
      mlogForm.value = records[mlogTop.current = current = e.result];
      mlogMid.content = mlogForm;
    }, false);

    mlogBottom.addEventListener("menu.select", function (e) {
      var name;
      switch (e.result) {
      case "carryOver":
        carryOver();
        break;
      case "chRecs":
        if (name = prompt("名前を入力してください．")) {
          location.search = "?r="+name+"&t="+templateFileStem;
        }
        break;
      case "chTmpls":
        if (name = prompt("名前を入力してください．")) {
          location.search = "?r="+recordFileStem+"&t="+name;
        }
        break;
      case "reset":
        location.search = "";
        break;
      case "exRecs":
        window.open("data:text/csv;charset=UTF-8,"+encodeURIComponent(arrayToCsv(records)), "records");
        break;
      case "exTmpls":
        window.open("data:text/csv;charset=UTF-8,"+encodeURIComponent(arrayToCsv(templates)), "templates");
        break;
      case "imTmpls":
        var tmpl = confirm("テンプレートリストをクリアしてからインポートしますか？"
                           +"\nクリアする　 ― OK"
                           +"\nクリアしない ― Cancel")
                   ? [["-", 0, "", ""]] : templates;
        dialog.open((txt)=>{
          var tmpl2 = csvToArray(txt);
          if (chkTmpl(tmpl2)) {
            mlogForm.setTemplates(templates=uniqTmpl(tmpl.concat(tmpl2)));
            mlogForm.dispatchEvent(new Event("templates.change"));
          } else { alert("データ形式が不正です．"); }
        }, ".csv");
        break;
      default: console.log("Unknown menu item:", e.result, ".");
      }
    }, false);

    // メソッド
    mlog.run=()=>{
      document.body.appendChildNodes(mlog, mlogMask, mlogMask2);
      dbx = new MyDropbox({ accessToken: token });
      dbx.readFile(recordFileStem+".csv", function (result) {
        mlogBottom.total(records = csvToArray(result));
        mlogTop.number = records.length;
        mlogForm.value = records[mlogTop.current=current=-1] = ["", 0, "", ""];
        mlogMask.style.display = "none";
      }, function (e) {
        switch (e.status) {
        case 409:
          if (confirm(recordFileStem+".csv が見つかりません．作成しますか？")) {
            mlogBottom.total(records = []);
            mlogTop.number = records.length;
            mlogForm.value = records[mlogTop.current=current=-1] = ["", 0, "", ""];
            mlogMask.style.display = "none";
            alert("ファイルは，最初のレコードが追加されたときに作成されます．");
          }
          break;
        default: 
          if (confirm("Failed to read the record file: " + e.status
                      + "\nMay I clear access token?")) {
            localStorage.removeItem("MLog");
          }
        }
      });
      dbx.readFile(templateFileStem+".csv", function (result) {
        mlogForm.setTemplates(templates = csvToArray(result));
        mlogMask2.style.display = "none";
      }, function (e) {
        switch (e.status) {
        case 409:
          if (confirm(templateFileStem+".csv が見つかりません．作成しますか？")) {
            mlogForm.setTemplates(templates = [["-", 0, "", ""]]);
            mlogMask2.style.display = "none";
            alert("ファイルは，最初のテンプレートが追加されたときに作成されます．");
          }
          break;
        default: alert("Failed to read the template file: " + e.status);
        }
      });
    }

    return mlog;
  }
}
