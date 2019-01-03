let checkaddForm = (function() {
    //Полчение формы
    let $addForm = $('#add-formFilms'),
        $inputs = $($addForm).find('input, textarea');
    

    //Блоки с нотификациями
    let notifications = {
        emptyDescriptionFilm: $('<div class="notify notify--error mb-20" data-descError="description-error">Описание фильма не может быть пустым.</div>'),
        emptyPosterFilm: $('<div class="notify notify--error mb-20" data-posterError="poster-error">Добавьте изображение с постером к фильму.</div>'),
        emptyYearFilm: $('<div class="notify notify--error mb-20" data-yearError="year-error">Год фильма не может быть пустым.</div>'),
        emptyGenreFilm: $('<div class="notify notify--error mb-20" data-genreError="genre-error">Жанр фильма не может быть пустым.</div>'),
        emptyTitleFilm: $('<div class="notify notify--error mb-20" data-titleError="title-error">Название фильма не может быть пустым.</div>'),
        incorrectYear: $('<div class="notify notify--error mb-20" data-titleError="title-error">Год должен состоять только цифр.</div>')
    }
    
    //Инициализация модуля
    function init() {
        _setUpListeners();
    }


    //Слушатель событий модуля
    function _setUpListeners(event) {
        $($addForm).on('submit', _validateForm);
    }

    function checkInputs(inputVal, notify, blockPosition) {
        if(inputVal.length == 0 && inputVal == "") {
            $(notify).prependTo(blockPosition);
        } else {
            $(blockPosition).find('.notify').remove();
        }
    }

    function checkYear(inputVal, notify, blockPosition) {
        if(inputVal.length == 0 && inputVal == "") {
            $(notify).prependTo(blockPosition);
        } else {
            $(blockPosition).find('.notify').remove();
            if(inputVal.length != 4 && typeof inputVal !== "number") {
                $(notifications.incorrectYear).prependTo(blockPosition);
            } else {
                $(blockPosition).find('.notify').remove();
            }
        }
    }

    //Приватные методы модуля
    function _validateForm(event) {
        event.preventDefault();
        let $titleValue = $('#title-film').val().trim(),
            $genreValue = $('#genre-film').val().trim(),
            $yearValue = $('#year-film').val().trim(),
            $posterValue = $('#downloadFile').val().trim().substr(12),
            $descriptionValue = $('#description-film').val().trim();
        
        checkInputs($titleValue, notifications.emptyTitleFilm, $addForm);
        checkInputs($genreValue, notifications.emptyGenreFilm, $addForm);
        checkYear($yearValue, notifications.incorrectYear, $addForm);
        checkInputs($posterValue, notifications.emptyPosterFilm, $addForm);
        checkInputs($descriptionValue, notifications.emptyDescriptionFilm, $addForm);
        $($addForm).find('.notify--success').remove();

        var postData = {
            titleFilm: $titleValue,
            genreFilm: $genreValue,
            yearFilm: $yearValue,
            posterFilm: $posterValue,
            descriptionFilm: $descriptionValue,
            newFilm: "Add"
        }
            
        if(postData.titleFilm.length == 0 && postData.titleFilm == "") {
            $(notifications.emptyTitleFilm).prependTo($addForm);
        } else {
            $($addForm).find('.notify').remove();
            
            if(postData.genreFilm.length == 0 && postData.genreFilm == "")
                $(notifications.emptyGenreFilm).prependTo($addForm);
            else { 
                $($addForm).find('.notify').remove();

                if(postData.yearFilm.length == 0 && postData.yearFilm == "")
                    $(notifications.emptyYearFilm).prependTo($addForm);
                else {
                    $($addForm).find('.notify').remove();
                    if(postData.yearFilm.length != 4 && typeof postData.yearFilm !== "number") {
                        $(notifications.incorrectYear).prependTo($addForm);
                    } else {
                        $($addForm).find('.notify').remove();
                    }

                    if(postData.posterFilm.length == 0 && postData.posterFilm == "")
                        $(notifications.emptyPosterFilm).prependTo($addForm);
                    else {
                        $($addForm).find('.notify').remove();

                        if(postData.descriptionFilm.length == 0 && postData.descriptionFilm == "") 
                            $(notifications.emptyDescriptionFilm).prependTo($addForm);
                        else {
                            $($addForm).find('.notify').remove();
                            $.ajax({
                                type: "POST",
                                url: "postdata.php",
                                data: postData,
                                success: function (response) {
                                    let notifySuccess = $('<div class="notify notify--success mb-20"></div>');
                                    $(notifySuccess).text(response);
                                    $(notifySuccess).prependTo($($addForm));
                                    $(notifySuccess).fadeOut(3000);
                                },
                                error: function(response) {
                                    let notifyQueryError = $('<div class="notify notify--error mb-20"></div>');
                                    $(notifyQueryError).text(response);
                                    $(notifyQueryError).prependTo($($addForm));
                                }
                            });

                            document.getElementById('add-formFilms').reset();
                        } 
                    }
                }
            }
        }
    } 

    return {
        initModule: init
    }

})();


checkaddForm.initModule();
