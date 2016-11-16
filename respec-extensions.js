(function () {
  function expose(name, obj) {
    window[name] = obj;
  }
  function getHeaders() {
    var headers = document.querySelectorAll("#respecHeader dl dt");
    var obj = {};
    for ( var i = 0; i < headers.length ; i++) {
      var header = headers[i];
      obj[header.textContent] = { "header": header,
        field: header.nextElementSibling }; 
    }
    return obj;
  }
  function enhanceLatestVersions() {
    console.log("Enhancing latest versions...");
    var title = document.querySe
    var shortName = window.respecConfig.shortName;
    var latestShortName = window.respecConfig.latestShortName;
    if (latestShortName === undefined) {
      // abort
      return;
    }
    var headers = getHeaders();
    // change the Latest published version
    var latestVersion = headers["Latest published version:"];
    latestVersion.header.textContent = "Latest version of " +
      document.title + ":";
    // add a new latest version
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    var a = document.createElement("a");
    var link = "https://www.w3.org/TR/" + latestShortName + "/";
    a.href = link;
    a.textContent = link;
    dd.appendChild(a);
    dt.textContent =  "Latest version:";
    var child = latestVersion.field.nextElementSibling;
    child.parentNode.insertBefore(dt, child);
    child.parentNode.insertBefore(dd, child);
    console.log(document.title);
  }
  expose("enhanceLatestVersions", enhanceLatestVersions);
})();
