var SERVER_URL = "http://localhost/lookatmeserver/";
var content = window.localStorage.getItem("user");
var path = window.location.pathname;
var page = path.split("/").pop();
if (!content) {
	if (page != "index.html") window.location.href = "index.html";
} else {
	var user = JSON.parse(content);
	$(function() {
		$("#name").html(user.name);
		$("#logout").click(function() {
			window.localStorage.clear();
			window.location.href = "index.html";
		});
	});
}
