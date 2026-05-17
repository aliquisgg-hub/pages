// MyDropbox extends Dropbox
//   Dropbox (Dropbox-sdk.js) from https://cdnjs.com/libraries/dropbox.js/
//   https://cdnjs.cloudflare.com/ajax/libs/dropbox.js/2.5.13/Dropbox-sdk.min.js

class MyDropbox extends Dropbox {

    readFile(filename, suc, err) {
      this.filesDownload({ path: "/"+filename })
      .then(function (data) {
        var reader = new FileReader();
        reader.addEventListener("loadend", function (e) {
          console.log('File "'+filename+'" read from Dropbox successfully');
          suc(e.target.result);
        });
        reader.readAsText(data.fileBlob);
      })
      .catch(function (error) {
        if (err) err(error);
        console.error('API error: ' + error.response.error.message);
      });
    }
  
    writeFileWithBom(filename, contents, suc, err) {
      const bom = "\uFEFF";
      if(!filename.length || !contents.length){
        alert('filename or content is empty');
      }
      this.filesUpload(
        { path: '/' + filename, contents: bom+contents, mode: 'overwrite' } // 既存ファイルがあるとき上書き
        // { path: '/' + filename, contents: bom+contents, autorename: true } // 既存ファイルがあるときリネーム
      )
      .then(function (response) {
        console.log('File "'+filename+'" written to Dropbox successfully');
        if (suc) suc(response);
      })
      .catch(function (error) {
        if (err) err(error);
        //console.error('API error: ' + error.response.error.message);
      });
    }

}
