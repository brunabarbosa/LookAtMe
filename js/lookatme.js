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
		$("#rating-form").submit(function(e) {
			e.preventDefault();
			var data = new FormData();
			data.append("rating", $(this).find("input[type='number']").val());
			data.append("comment", $(this).find("textarea").val());
			data.append("email", user.email);
			$.ajax({
				type: 'post',
				url: SERVER_URL + "rate.php",
				data: data,
				cache: false,
				processData: false,
				contentType: false,
				success: function(jsonObj) {
					if (jsonObj.success) {
						alert("Sua avaliação foi salva com sucesso. Muito obrigado!");
						$("#rating-modal").modal("hide");
					} else {
						alert(jsonObj.message);
					}
				},
				error: function(msg) {
					console.log(msg);
					alert("Ocorreu um erro durante sua avaliação. Tente novamente.");
				}
			});
		});
	});
}
