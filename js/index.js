// Prevent logged users from logging in again 
if (window.localStorage.getItem("user")) {
	window.location.href = "main.html";
}
function login(jsonObj) {
	window.localStorage.setItem("user", JSON.stringify(jsonObj));
	window.location.href = 'main.html';
}
$(function() {
	// Go to sign up page 
	$("#create").click(function(e) {
		e.preventDefault();
		$("#login-panel").fadeOut(function() {
			$("#login-panel form")[0].reset();
			$("#login-panel .alert").hide();
			$("#register-panel").fadeIn();
			setTimeout(function() {
				$("#register-panel input[name='name']").focus();
			}, 500);
		});
	});
	// Go back to log in page 
	$("#back").click(function(e) {
		e.preventDefault();
		$("#register-panel").fadeOut(function() {
			$("#register-panel form")[0].reset();
			$("#register-panel .alert").hide();
			$("#login-panel").fadeIn();
			setTimeout(function() {
				$("#login-panel input[name='email']").focus();
			}, 500);
		});
	});
	// User submit login form 
	$("#login-panel form").submit(function(e) {
		e.preventDefault();
		$("#login").button("loading");
		$.ajax({
			type: 'post',
			url: SERVER_URL + "user/login.php",
			data: $(this).serialize(),
			cache: false,
			success: function(jsonObj) {
				if (!jsonObj.success) {
					$("#login-panel .alert-danger").show();
					$("#login-panel .alert-danger").html(jsonObj.message);
					$("#login").button("reset");
				} else {
					jsonObj["email"] = $("#login-panel form input[name='email']").val();
					login(jsonObj);
				}
			},
			error: function(msg) {
				$("#login-panel .alert-danger").show();
				$("#login-panel .alert-danger").html(msg);
				$("#login").button("reset");
			}
		});
	});
	// User submit sing up form 
	$("#register-panel form").submit(function(e) {
		e.preventDefault();
		$("#register").button("loading");
		$.ajax({
			type: 'post',
			url: SERVER_URL + "user/register.php",
			data: $(this).serialize(),
			cache: false,
			success: function(jsonObj) {
				if (!jsonObj.success) {
					$("#register-panel .alert-danger").show();
					$("#register-panel .alert-danger").html(jsonObj.message);
					$("#register").button("reset");
				} else {
					jsonObj["email"] = $("#register-panel form input[name='email']").val();
					login(jsonObj);
				}
			},
			error: function(msg) {
				$("#register-panel .alert-danger").show();
				$("#register-panel .alert-danger").html(msg);
				$("#register").button("reset");
			}
		});
	});
});