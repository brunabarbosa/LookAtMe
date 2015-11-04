var SERVER_URL = "http://localhost/lookatmeserver/";
var content = window.localStorage.getItem("user");
var path = window.location.pathname;
var page = path.split("/").pop();
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
if (!content) {
	if (page != "index.html") window.location.href = "index.html";
} else {
	var user = JSON.parse(content);
	$(function() {
		$("#name").html(user.name);
		if (user.photo) {
			$("#avatar").attr("src", SERVER_URL + user.photo);
		}
		$("#logout").click(function() {
			window.localStorage.clear();
			window.location.href = "index.html";
		});
	});
}
