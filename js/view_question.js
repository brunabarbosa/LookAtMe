var hasFavorite = false;
var isAuthorized = false;
var isEvaluated = [];
function update_list(id) {
	$("#comments").append('<li class="list-group-item" id="loading"><img class="loading" src="img/loading.gif" /></li>');
	$.ajax({
		type: 'get',
		url: SERVER_URL + "question/get.php?id=" + id,
		cache: false,
		success: function(jsonObj) {
			$("#loading").fadeOut(function() {
				if (jsonObj.success) {
					var canAnswer = true;
					isAuthorized = user.email == jsonObj.user_email;
					if (isAuthorized) {
						canAnswer = false;
					}
					$("#comments").html("");
					var $question = $("#question-template").clone();
					$question.attr("id", "");
					if (jsonObj.user_photo) {
						$question.find(".message-avatar img").attr("src", SERVER_URL + user.photo);
					}
					$question.find(".message-username a").html(jsonObj.user_name);
					$question.find(".message-description").html("<b>" + jsonObj.title + "</b><br>" + jsonObj.description);
					$question.find(".message-time").html("Postado às " + jsonObj.creation_date);
					for (var i = 0; i < jsonObj.photos.length; i++) {
						$question.find(".images-container").append('<img src="' + SERVER_URL + jsonObj.photos[i]["link"] + '" class="img-thumbnail" />');
					}
					$("#comments").append($question);
					$question.fadeIn();
					// Best comment first 
					var comments = [];
					for (var i = 0; i < jsonObj.comments.length; i++) {
						if (jsonObj.comments[i].id == jsonObj.favorite_comment) {
							hasFavorite = true;
							comments.push(jsonObj.comments[i]);
						}
					}
					for (var i = 0; i < jsonObj.comments.length; i++) {
						if (jsonObj.comments[i].id != jsonObj.favorite_comment) {
							comments.push(jsonObj.comments[i]);
						}
					}
					for (var i = 0; i < comments.length; i++) {
						var commentObj = comments[i];
						if (user.email == commentObj.user_email) {
							canAnswer = false;
						}
						var $comment = $("#comment-template").clone();
						$comment.attr("id", "");
						if (commentObj.user_photo) {
							$comment.find(".message-avatar img").attr("src", SERVER_URL + commentObj.user_photo);
						}
						$comment.find(".message-username a").html(commentObj.user_name);
						$comment.find(".message-description").html(commentObj.comment);
						$comment.find(".message-time").html("Postado às " + commentObj.creation_date);
						if (commentObj.id == jsonObj.favorite_comment) {
							$comment.addClass("message-success");
						}
						if (commentObj.like_status == "liked") {
							$comment.find(".message-icon .glyphicon-thumbs-up").addClass("like");
							isEvaluated[commentObj.id] = true;
						} else if (commentObj.like_status == "disliked") { 
							$comment.find(".message-icon .glyphicon-thumbs-down").addClass("dislike");
							isEvaluated[commentObj.id] = true;
						} else {
							isEvaluated[commentObj.id] = false;
						}
						// Enable hovering effects
						if (user.email == jsonObj.user_email && !isEvaluated[commentObj.id]) {
							$comment.find(".message-icon .glyphicon-thumbs-up").addClass("glyphicon-thumbs-up-enabled");
							$comment.find(".message-icon .glyphicon-thumbs-down").addClass("glyphicon-thumbs-down-enabled");
						}
						if (user.email == jsonObj.user_email && !jsonObj.has_favorite) {
							$comment.find(".message-icon .glyphicon-star").addClass("glyphicon-star-enabled");
						}
						$comment.find(".message-icon .glyphicon-thumbs-up").data("comment-id", commentObj.id);
						$comment.find(".message-icon .glyphicon-thumbs-down").data("comment-id", commentObj.id);
						$comment.find(".message-icon .glyphicon-star").data("comment-id", commentObj.id);
						if (user.email != jsonObj.user_email && user.email != commentObj.user_email || commentObj.comment == "<i>Este comentário foi removido pelo autor.</i>") {
							$comment.find(".close").hide();
						}
						else
						{
							$comment.find(".close").data("comment-id", commentObj.id);
						}
						$("#comments").append($comment);
						$comment.fadeIn();
					}
					if (canAnswer) {
						$("#comment-form").parent().show();
					}
				} else {
					$("#comments").append("<li class='list-group-item alert alert-danger'>" + jsonObj.message + "</li>");
				}
			}); 
		}, 
		error: function(msg) {
			$("#loading").fadeOut(function() {
				$("#comments").html("");
				$("#comments").append("<li class='list-group-item alert alert-danger'>Ops, um erro ocorreu. Tente novamente.</li>");
			});
		}
	});
}
$(function() {
	var params = getSearchParameters();
	var id = params["id"];
	update_list(id);
	// Favorite comment 
	$(document).on("click", ".message-icon .glyphicon-star", function() {
		if (!hasFavorite && isAuthorized) {
			var commentId = $(this).data("comment-id");
			var data = new FormData();
			data.append("comment_id", commentId);
			data.append("email", user.email);
			data.append("auth_key", user.auth_key);
			var $self = $(this);
			$.ajax({
				type: 'post',
				url: SERVER_URL + "comment/favorite.php",
				cache: false,
				contentType: false,
				processData: false,
				data: data,
				success: function(jsonObj) {
					if (jsonObj.success) {
						$self.closest("li").addClass("message-success");
						$self.removeClass("glyphicon-star-enabled");
						hasFavorite = true;
					}
				}
			});
		}
	});
	// Like comment
	$(document).on("click", ".message-icon .glyphicon-thumbs-up", function() {
		var commentId = $(this).data("comment-id");
		if (!isEvaluated[commentId] && isAuthorized) {
			var data = new FormData();
			data.append("comment_id", commentId);
			data.append("email", user.email);
			data.append("auth_key", user.auth_key);
			data.append("status", "liked");
			var $self = $(this);
			$.ajax({
				type: 'post',
				url: SERVER_URL + "comment/like.php",
				cache: false,
				contentType: false,
				processData: false,
				data: data,
				success: function(jsonObj) {
					if (jsonObj.success) {
						$self.addClass("like");
						$self.parent().find(".glyphicon-thumbs-up").removeClass("glyphicon-thumbs-up-enabled");
						$self.parent().find(".glyphicon-thumbs-down").removeClass("glyphicon-thumbs-down-enabled");
						isEvaluated[commentId] = true;
					}
				}
			});
		}
	});
	// Dislike comment
	$(document).on("click", ".message-icon .glyphicon-thumbs-down", function() {
		var commentId = $(this).data("comment-id");
		if (!isEvaluated[commentId] && isAuthorized) {
			var data = new FormData();
			data.append("comment_id", commentId);
			data.append("email", user.email);
			data.append("auth_key", user.auth_key);
			data.append("status", "disliked");
			var $self = $(this);
			$.ajax({
				type: 'post',
				url: SERVER_URL + "comment/like.php",
				cache: false,						
				contentType: false,
				processData: false,
				data: data,
				success: function(jsonObj) {
					if (jsonObj.success) {
						$self.addClass("dislike");
						$self.parent().find(".glyphicon-thumbs-up").removeClass("glyphicon-thumbs-up-enabled");
						$self.parent().find(".glyphicon-thumbs-down").removeClass("glyphicon-thumbs-down-enabled");
						isEvaluated[commentId] = true;
					}
				}
			});
		}
	});
	// Delete comment
	$(document).on("click", ".close", function() {
		var commentId = $(this).data("comment-id");
		var data = new FormData();
		data.append("comment_id", commentId);
		data.append("email", user.email);
		data.append("auth_key", user.auth_key);
		var $self = $(this);
		$.ajax({
			type: 'post',
			url: SERVER_URL + "comment/delete.php",
			cache: false,
			contentType: false,
			processData: false,
			data: data,
			success: function(jsonObj) {
				if (jsonObj.success) {
					console.log(jsonObj);
					$self.parent().find(".message-description").html("<i>Este comentário foi removido pelo autor.</i>");
					$self.fadeOut();
				}
			},
			error: function(msg) {
				console.log(msg);
			}
		});
	});
	// Send a new comment
	$("#comment-form").submit(function(e) {
		e.preventDefault();
		var data = new FormData();
		data.append("question_id", id);
		data.append("comment", $(this).find("input[name='comment']").val());
		data.append("email", user.email);
		data.append("auth_key", user.auth_key);
		$.ajax({
			type: 'post',
			url: SERVER_URL + "comment/create.php",
			contentType: false,
			processData: false,
			cache: false,
			data: data,
			success: function(jsonObj) {
				if (jsonObj.success) {
					$("#comment-form")[0].reset();
					$("#comment-form").parent().hide();
					update_list(id);
				} else {
					alert(jsonObj.message);
				}
			},
			error: function() {
				alert("Ocorreu um erro. Tente novamente.");
			}
		});
	});
});