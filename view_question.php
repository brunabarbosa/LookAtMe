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
				<div class="panel-body">
					<ul class="list-group">
						<li class="list-group-item">
							<table class="message">
								<tr>
									<td class="message-avatar">
										<img src="http://www.globalbiketours.com/images/default_user.png" class="img-circle" />
									</td>
									<td>
										<table>
											<tr>
												<td class="message-username">
													<a href="#">Maria</a>
												</td>
											</tr>
											<tr>
												<td>Gente, por favor, me ajuda a escolher... Qual o melhor?</td>
											</tr>
											<tr>
												<td>
													<div id="images-container">
														<img src="http://images.tcdn.com.br/img/img_prod/345307/camiseta_chaves_roupa_do_nhonho_226_1_20131216093625.jpg" class="img-thumbnail" />
														<img src="http://images.tcdn.com.br/img/img_prod/345307/camiseta_chaves_icone_seu_barriga_235_1_20131216145633.jpg" class="img-thumbnail" />
													</div>
												</td>
											</tr>
											<tr>
												<td class="message-time">Postado em 30/10/2015 às 23:30</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</li>
						<li class="list-group-item arrow-box message-success">
							<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
							<table class="message">
								<tr>
									<td class="message-avatar">
										<img src="http://www.globalbiketours.com/images/default_user.png" class="img-circle" />
									</td>
									<td>
										<table>
											<tr>
												<td class="message-best">
													<p class="hide">Avaliado como melhor resposta</p>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-thumbs-up"></span>
													<span class="glyphicon glyphicon-thumbs-down"></span>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-star"></span>
												</td>
											</tr>
											<tr>
												<td class="message-username">
													<a href="#">Maria</a>
												</td>
											</tr>
											<tr>
												<td>Gente, por favor, me ajuda a escolher... Qual o melhor?</td>
											</tr>
											<tr>
												<td class="message-time">Postado em 30/10/2015 às 23:30</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</li>
						<li class="list-group-item arrow-box">
							<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
							<table class="message">
								<tr>
									<td class="message-avatar">
										<img src="http://www.globalbiketours.com/images/default_user.png" class="img-circle" />
									</td>
									<td>
										<table>
											<tr>
												<td class="message-best">
													<p class="hide">Avaliado como melhor resposta</p>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-thumbs-up like"></span>
													<span class="glyphicon glyphicon-thumbs-down"></span>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-star"></span>
												</td>
											</tr>
											<tr>
												<td class="message-username">
													<a href="#">Maria</a>
												</td>
											</tr>
											<tr>
												<td>Gente, por favor, me ajuda a escolher... Qual o melhor?</td>
											</tr>
											<tr>
												<td class="message-time">Postado em 30/10/2015 às 23:30</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</li>
						<li class="list-group-item arrow-box">
							<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
							<table class="message">
								<tr>
									<td class="message-avatar">
										<img src="http://www.globalbiketours.com/images/default_user.png" class="img-circle" />
									</td>
									<td>
										<table>
											<tr>
												<td class="message-best">
													<p class="hide">Avaliado como melhor resposta</p>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-thumbs-up"></span>
													<span class="glyphicon glyphicon-thumbs-down dislike"></span>
												</td>
												<td class="message-icon" rowspan="4">
													<span class="glyphicon glyphicon-star"></span>
												</td>
											</tr>
											<tr>
												<td class="message-username">
													<a href="#">Maria</a>
												</td>
											</tr>
											<tr>
												<td>Gente, por favor, me ajuda a escolher... Qual o melhor?</td>
											</tr>
											<tr>
												<td class="message-time">Postado em 30/10/2015 às 23:30</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</li>
					</ul>
				</div>
				<div class="panel-footer">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Enviar resposta" autofocus id="question-response" />
						<span class="input-group-btn"><button class="btn btn-warning" id="new-response">Enviar</button></span>
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
				
			});
		</script>
	</body>
</html>