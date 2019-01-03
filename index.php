<!-- Разные миксины по одному, которые понадобятся. Для логотипа, бейджа, и т.д.-->
<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8" />
	<title>Иван Пластун - Фильмотека</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<link rel="stylesheet" href="libs/normalize-css/normalize.css" />
	<link rel="stylesheet" href="libs/bootstrap-4-grid/grid.min.css" />
	<link rel="stylesheet" href="libs/jquery-custom-scrollbar/jquery.custom-scrollbar.css" />
	<link rel="stylesheet" href="./css/style.css"/>
	<link rel="stylesheet" href="./css/main.css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&amp;subset=cyrillic-ext" rel="stylesheet">
	<!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
</head>

<body class="index-page">
	<div class="container user-content section-page">
	<div class="section-page-head">
		<h1 class="title-1 pt-0">Фильмотека</h1>
		<a class="button button--enter" href="addfilm.html">Добавить фильм</a>
	</div>
		<?php
			include "postdata.php";
			foreach($films as $keyFilm => $filmVal) { ?>
				<div class="card mb-20">
					<div class="row">
						<div class="col-3">
							<img class="mb-20" src="img/films-examples/<?=@$filmVal['posterImg']?>" alt="ex-machine">
							<div class="films-badges">
								<div class="badge mr-15 mb-10"><?=@$filmVal['genre']?></div>
								<div class="badge mb-10"><?=@$filmVal['year']?></div>
							</div>
						</div>
						<div class="col-9">
							<div class="card__info">
								<h4 class="title-4 title-films"><?=@$filmVal['title']?></h4>
								<div class="card__info-buttons">
									<a class="button button--small button--edit" href="edit.html?id=<?=@$filmVal['id']?>">Редактировать</a>
									<a class="button button--small button--remove" href="?action=delete&id=<?=@$filmVal['id']?>">Удалить</a>
								</div>
							</div>
							<h5 class="title-5">Описание фильма</h5>
							<p><?=@$filmVal['description']?></p>
						</div>
					</div>
				</div>
		<?php } ?>
	</div>
	<script defer="defer" src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
</body>

</html>