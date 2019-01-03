<?php

    //Подключение к базе данных
    $link = mysqli_connect('localhost', 'root', '', 'filmotekaDB');

    if(mysqli_connect_error())
        die('Ошибка при подключении к базе данных');

    //Удаление фильма
    if(!empty($_GET)) {
        if(array_key_exists('action', $_GET)) {
            $deleteQuery = "DELETE FROM `films` WHERE id='".mysqli_real_escape_string($link, $_GET['id'])."' LIMIT 1";
            mysqli_query($link, $deleteQuery);
            if(mysqli_affected_rows($link) > 0) {
                $resultInfo = "<div class='notify notify--information mb-20'>Фильм был удален<?=@$resultInfo?></div>";
                echo $resultInfo;
            }
        }
    }
    
    //Добавление данных в БД
    if(!empty($_POST)) {
        if(array_key_exists('newFilm', $_POST)) {

            //Запрос на добавление данных
            $InsertQuery = "INSERT INTO `films` (`title`,`genre`,`year`,`posterImg`, `description`) VALUES (
                '".mysqli_real_escape_string($link, $_POST['titleFilm'])."',
                '".mysqli_real_escape_string($link, $_POST['genreFilm'])."',
                '".mysqli_real_escape_string($link, $_POST['yearFilm'])."',
                '".mysqli_real_escape_string($link, $_POST['posterFilm'])."',
                '".mysqli_real_escape_string($link, $_POST['descriptionFilm'])."'
            )";

            if($_POST['titleFilm'] != "" && $_POST['genreFilm'] && $_POST['yearFilm'] != "" && $_POST['posterFilm'] != "" && $_POST['descriptionFilm'] != "") {
                //Результат запроса
                $insertResult = mysqli_query($link, $InsertQuery); 
                if($insertResult) {
                    echo "Фильм успешно добавлен";
                } else {
                    echo "Ошибка! Попробуйте добавить фильм снова.";
                }
            }
        }
    }

    //Получение данных из базы данных filmotekaDB для отображения их в карточке на странице
    $query = "SELECT * FROM `films`";
    $films = array();
    if($result = mysqli_query($link, $query)) {
        while($row = mysqli_fetch_array($result)) {
            $films[] = $row;
        }
    }

?>