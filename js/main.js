// Update the list of most recent questions
function update_list() {
	$("#questions").append('<li class="list-group-item" id="loading"><img class="loading" src="img/loading.gif" /></li>');
	$.ajax({
		type: 'get',
		url: SERVER_URL + "question/last.php",
		cache: false,
		success: function(jsonObj) {
			$("#loading").fadeOut(function() {
				if (jsonObj.success) {
					$("#questions").html("");
					if (jsonObj.result.length == 0) {
						$("#questions").append("<li class='list-group-item'>Não há questões criadas no momento. <a href='#' id='create-question' role='button'>Seja o primeiro a criar</a>.</li>");
					} else {
						for (var i = 0; i < jsonObj.result.length; i++) {
							var questionObj = jsonObj.result[i];
							var $question = $("#question-template").clone();
							$question.attr("id", "");
							$question.attr("href", "view_question.html?id=" + questionObj.id);
							$question.find(".question-title a").html(questionObj.title);
							$question.find(".question-title a").attr("href", "view_question.html?id=" + questionObj.id);
							$question.find(".question-description").html(questionObj.description);
							$question.find(".question-author").html(questionObj.user_name);
							$question.find(".question-date").html(questionObj.creation_date);
							if (questionObj.num_comments <= 1) {
								$question.find(".question-comments").html(questionObj.num_comments + " comentário");
							} else {
								$question.find(".question-comments").html(questionObj.num_comments + " comentários");
							}
							if (questionObj.has_favorite) {
								$question.find(".glyphicon-star").removeClass("star");
								$question.find(".glyphicon-star").addClass("star-active");
							}
							$("#questions").append($question);
							$question.fadeIn();
						}
					}
				} else {
					$("#questions").append("<li class='list-group-item alert alert-danger'>" + jsonObj.message + "</li>");
				}
			});
		}, 
		error: function() {
			$("#loading").fadeOut(function() {
				$("#questions").html("");
				$("#questions").append("<li class='list-group-item alert alert-danger'>Ops, um erro ocorreu. Tente novamente.</li>");
			});
		}
	});
}
$(function() {
	// Fill questions 
	update_list();
	// Open new question modal 
	$("#new-question").click(function() {
		$("#question-modal").modal("show");
		$("#question-form")[0].reset();
		$("#images-container").html("");
		$("#question-form input[name='title']").val($("#question-title").val());
		$("#question-form input[name='description']").focus();
	});
	// Insert question images preview 
	$("#question-form input[type='file']").on("change", function() {
		$("#images-container").html("");
		$.each($(this)[0].files, function(i, file) {
			var fr = new FileReader();
			fr.onload = function(ev) {
				var $elem = $("<img class='img-thumbnail' src='" + ev.target.result + "' />");
				$elem.hide();
				$("#images-container").append($elem);
				$elem.fadeIn();
			};
			fr.readAsDataURL(file);
		});
	});
	// Open the modal upon sending the simplified form 
	$("#question-form-simplified").submit(function(e) {
		e.preventDefault();
		$("#question-modal").modal("show");
		setTimeout(function() {
			$("#description").focus();
		}, 500);
	});
	$("#question-modal").on("show.bs.modal", function() {
		$("#error").html("");
		$("#error").hide();
	});
	// Submit a new question form 
	$("#question-form").submit(function(e) {
		e.preventDefault();
		$("#send").button("loading");
		var request = new FormData();
		var count = 0;
		$.each($("#images")[0].files, function(i, file) {
			request.append("image_" + i, file);
			count++;
		});
		request.append("email", user.email);
		request.append("auth_key", user.auth_key);
		request.append("title", $("#title").val());
		request.append("description", $("#description").val());
		request.append("num_images", count);
		$.ajax({
			type: 'post',
			url: SERVER_URL + "question/create.php",
			cache: false,
			contentType: false,
			processData: false,
			data: request,
			success: function(jsonObj) {
				console.log(jsonObj);
				if (jsonObj.success) {
					$("#question-modal").modal("hide");
					$("#question-form")[0].reset();
					$('html, body').animate({ scrollTop: 0 }, 'slow');
					update_list();
				} else {
					$("#error").html(json.message);
					$("#error").show();
				}
				$("#send").button("reset");
			},
			error: function(msg) {
				$("#error").html(msg);
				$("#error").show();
				$("#send").button("reset");
			}
		});
	});
	$(document).on("click", "#create-question", function() {
		$("#question-modal").modal("show");
		setTimeout(function() {
			$("#title").focus();
		}, 500);
	});
});