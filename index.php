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
			<div class="page-header hidden-xs">
				<center><img src="img/logo.png" /></center>
			</div>
			<div class="page-header hidden-sm hidden-md hidden-lg">
				<center><img src="img/logo-xs.png" /></center>
			</div>
			<div class="panel panel-default col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" id="login-panel">
				<div class="panel-body">
					<form method="post">
						<div class="form-group">
							<input type="email" class="form-control" name="email" placeholder="E-mail" required autofocus />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" name="password" placeholder="Senha" required />
						</div>
						<button type="submit" class="btn btn-default form-control">Entrar</button> 
						<hr>
						<center>Não possui uma conta? <button class="btn btn-warning" id="create">Criar</button></center>
					</form>
				</div>
			</div>
			<div class="panel panel-default col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" id="register-panel" style="display: none;">
				<div class="panel-body">
					<form method="post">
						<div class="form-group">
							<input type="text" class="form-control" name="name" placeholder="Nome" maxlength="50" required autofocus />
						</div>
						<div class="form-group">
							<input type="email" class="form-control" name="email" placeholder="E-mail" maxlength="100" required />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" name="password" placeholder="Senha" minlength="6" maxlength="30" required />
						</div>
						<div class="form-group">
							<input type="password" class="form-control" name="repeat-password" placeholder="Repetir Senha" minlength="6" maxlength="30" required />
						</div>
						<center>
							<button type="submit" class="btn btn-warning">Criar</button> 
							<button class="btn btn-default" id="back">Voltar</button>
						</center>
					</form>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script>
			$(function() {
				$("#create").click(function(e) {
					e.preventDefault();
					$("#login-panel").fadeOut(function() {
						$("#login-panel form")[0].reset();
						$("#register-panel").fadeIn();
					});
				});
				$("#back").click(function(e) {
					e.preventDefault();
					$("#register-panel").fadeOut(function() {
						$("#register-panel form")[0].reset();
						$("#login-panel").fadeIn();
					});
				});
				$("#login-panel form").submit(function(e) {
					e.preventDefault();
				});
			});
		</script>
	</body>
</html>