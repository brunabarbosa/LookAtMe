<!DOCTYPE>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Look At Me</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		<link rel="stylesheet" href="css/default.css">
	</head>
	<body>
		<div class="container">
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand" href="#"></a>
					</div>
				</div>
			</nav>
			<div class="panel panel-default">
				<div class="panel-heading">
					Últimas perguntas
				</div>
				<ul class="list-group">
					<a href="#" class="list-group-item">
						<table class="question">
							<tr>
								<td class="question-title">
									<a href="#">Título da pergunta</a>
								</td>
								<td class="question-icons" rowspan="3">
									<span class="badge">10 comentários</span>
									<span class="glyphicon glyphicon-star star star-active" aria-hidden="true"></span>
								</td>
							</tr>
							<tr>
								<td>
									Descrição da pergunta...
								</td>
							</tr>
							<tr>
								<td class="question-time">Postado por <a href="#">barbaragatinha123</a> às 30/10/2015 22:59</td>
							</tr>
						</table>
					</a>
					<a href="#" class="list-group-item">
						<table class="question">
							<tr>
								<td class="question-title">
									<a href="#">Título de outra pergunta</a>
								</td>
								<td class="question-icons" rowspan="3">
									<span class="badge">5 comentários</span>
									<span class="glyphicon glyphicon-star star" aria-hidden="true"></span>
								</td>
							</tr>
							<tr>
								<td>
									Descrição da pergunta...
								</td>
							</tr>
							<tr>
								<td class="question-time">Postado por <a href="#">ano123</a> às 29/10/2015 22:59</td>
							</tr>
						</table>
					</a>
					<a href="#" class="list-group-item">
						<table class="question">
							<tr>
								<td class="question-title">
									<a href="#">Título de outra pergunta</a>
								</td>
								<td class="question-icons" rowspan="3">
									<span class="badge">0 comentários</span>
									<span class="glyphicon glyphicon-star star" aria-hidden="true"></span>
								</td>
							</tr>
							<tr>
								<td>
									Descrição da pergunta...
								</td>
							</tr>
							<tr>
								<td class="question-time">Postado por <a href="#">ano123</a> às 29/10/2015 22:59</td>
							</tr>
						</table>
					</a>
				</ul>
				<div class="panel-footer">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Digite aqui uma nova pergunta" autofocus id="question-title" />
						<span class="input-group-btn"><button class="btn btn-warning" id="new-question">Enviar</button></span>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="question-modal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">Nova pergunta</h4>
					</div>
					<form id="question-form" type="post" enctype="multipart/form-data">
						<div class="modal-body">
							<div class="form-group">
								<input type="text" class="form-control" name="title" placeholder="Título da pergunta" autofocus required />
							</div>
							<div class="form-group">
								<textarea class="form-control" name="description" placeholder="Descrição" required></textarea>
							</div>
							<div class="form-group">
								<input type="file" name="images" multiple accept="image/x-png, image/gif, image/jpeg">
							</div>
							<div id="images-container">
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
							<input type="submit" class="btn btn-warning" value="Enviar" />
						</div>
					</form>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script>
			$(function() {
				$("#new-question").click(function() {
					$("#question-modal").modal("show");
					$("#question-form")[0].reset();
					$("#images-container").html("");
					$("#question-form input[name='title']").val($("#question-title").val());
					$("#question-form input[name='description']").focus();
				});
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
			});
		</script>
	</body>
</html>