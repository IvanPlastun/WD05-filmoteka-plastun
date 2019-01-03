<?php

    //Подключение к базе данных
    $linkUp = mysqli_connect('localhost', 'root', '', 'filmotekadb');

    if(mysqli_connect_error())
        die('Ошибка при подключении к базе данных');

    //Получение данных из БД. Запрос SELECT
    if(!empty($_GET)) { 
        if(array_key_exists('id', $_GET)) {
            $selectQuery = "SELECT * FROM `films` WHERE id='".mysqli_real_escape_string($linkUp, $_GET['id'])."' LIMIT 1";
            if($result = mysqli_query($linkUp, $selectQuery)) { 
                $film = mysqli_fetch_array($result);
                echo json_encode($film);
            }
        }
    }
    
    //Добавление данных в БД
    if(!empty($_POST)) {
        if(array_key_exists('updateFilm', $_POST)) {

            //Запрос для редактирования данных в БД
            $updateQuery = "UPDATE `films` SET 
                            title='".mysqli_real_escape_string($linkUp, $_POST['titleFilm'])."',
                            genre='".mysqli_real_escape_string($linkUp, $_POST['genreFilm'])."',
                            year='".mysqli_real_escape_string($linkUp, $_POST['yearFilm'])."',
                            posterImg='".mysqli_real_escape_string($linkUp, $_POST['posterFilm'])."',
                            description='".mysqli_real_escape_string($linkUp, $_POST['descriptionFilm'])."'
                            WHERE id='".mysqli_real_escape_string($linkUp, $_POST['idFilm'])."' LIMIT 1";

            if($_POST['titleFilm'] != "" && $_POST['genreFilm'] && $_POST['yearFilm'] != "" && $_POST['posterFilm'] != "" && $_POST['descriptionFilm'] != "") {
                //Результат запроса
                $updateResult = mysqli_query($linkUp, $updateQuery);
                if($updateResult) {
                    if(mysqli_affected_rows($linkUp) > 0) {
                        echo "Фильм был успешно отредактирован";
                    } else {
                        echo "Ошибка! Попробуйте снова отредактировать данные.";
                    }
                }
            }
        }
    }
?>