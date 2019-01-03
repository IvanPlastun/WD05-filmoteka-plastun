let checkFormUpdate = (function() {
    //Полчение формы
    let $updateForm = $('#update-formFilms'),
        $inputs = $($updateForm).find('input, textarea');

    //Поля формы
    let $titleInput = $('#title-film'),
        $genreInput = $('#genre-film'),
        $yearInput = $('#year-film'),
        $posterInput = $('#downloadFile'),
        $descriptionInput = $('#description-film');
    

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
        $($updateForm).on('submit', _validateForm);
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


    //Получение параметров GET из строки запроса
    function _getAllUrlParams(url) {
        // извлекаем строку из URL или объекта window
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
        
        // объект для хранения параметров
        var obj = {};
        
        // если есть строка запроса
        if (queryString) {
        
            // данные после знака # будут опущены
            queryString = queryString.split('#')[0];
        
            // разделяем параметры
            var arr = queryString.split('&');
        
            for (var i=0; i<arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');
        
            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });
        
            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];
        
            // преобразование регистра
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();
        
            // если ключ параметра уже задан
            if (obj[paramName]) {
                // преобразуем текущее значение в массив
                if (typeof obj[paramName] === 'string') {
                obj[paramName] = [obj[paramName]];

                }
                // если не задан индекс...
                if (typeof paramNum === 'undefined') {
                // помещаем значение в конец массива
                obj[paramName].push(paramValue);
                }
                // если индекс задан...
                else {
                // размещаем элемент по заданному индексу
                obj[paramName][paramNum] = paramValue;
                }
            }
            // если параметр не задан, делаем это вручную
            else {
                obj[paramName] = paramValue;
            }
            }
        }
        
        return obj;
    }
    

    //Получение данных из базы данных с помощью GET-запроса и добавление их в форму для редактирования
    let id = _getAllUrlParams(location.href);
    $.ajax({
        type: "GET",
        url: "update.php",
        data: id,
        dataType: "json",
        success: function (response) {
            $($titleInput).val(response['title']);
            $($genreInput).val(response['genre']);
            $($yearInput).val(response['year']);
            $($descriptionInput).text(response['description']);
        }
    });


    //Приватные методы модуля
    function _validateForm(event) {
        event.preventDefault();
        let $titleValue = $($titleInput).val().trim(),
            $genreValue = $($genreInput).val().trim(),
            $yearValue = $($yearInput).val().trim(),
            $posterValue = $($posterInput).val().trim().substr(12),
            $descriptionValue = $($descriptionInput).val().trim();

        checkInputs($titleValue, notifications.emptyTitleFilm, $updateForm);
        checkInputs($genreValue, notifications.emptyGenreFilm, $updateForm);
        checkYear($yearValue, notifications.incorrectYear, $updateForm);
        checkInputs($posterValue, notifications.emptyPosterFilm, $updateForm);
        checkInputs($descriptionValue, notifications.emptyDescriptionFilm, $updateForm);
        $($updateForm).find('.notify--success').remove();

        var postData = {
            idFilm: id.id,
            titleFilm: $titleValue,
            genreFilm: $genreValue,
            yearFilm: $yearValue,
            posterFilm: $posterValue,
            descriptionFilm: $descriptionValue,
            updateFilm: "edit"
        }

            
        if(postData.titleFilm.length == 0 && postData.titleFilm == "") {
            $(notifications.emptyTitleFilm).prependTo($updateForm);
        } else {
            $($updateForm).find('.notify').remove();
            
            if(postData.genreFilm.length == 0 && postData.genreFilm == "")
                $(notifications.emptyGenreFilm).prependTo($updateForm);
            else { 
                $($updateForm).find('.notify').remove();

                if(postData.yearFilm.length == 0 && postData.yearFilm == "")
                    $(notifications.emptyYearFilm).prependTo($updateForm);
                else {
                    $($updateForm).find('.notify').remove();
                    if(postData.yearFilm.length != 4 && typeof postData.yearFilm !== "number") {
                        $(notifications.incorrectYear).prependTo($updateForm);
                    } else {
                        $($updateForm).find('.notify').remove();
                    }

                    if(postData.posterFilm.length == 0 && postData.posterFilm == "")
                        $(notifications.emptyPosterFilm).prependTo($updateForm);
                    else {
                        $($updateForm).find('.notify').remove();

                        if(postData.descriptionFilm.length == 0 && postData.descriptionFilm == "") 
                            $(notifications.emptyDescriptionFilm).prependTo($updateForm);
                        else {
                            $($updateForm).find('.notify').remove();
                            $.ajax({
                                type: "POST",
                                url: `update.php`,
                                data: postData,
                                success: function (response) {
                                    let notifyInfo = $('<div class="notify notify--information mb-20"></div>');
                                    $(notifyInfo).text(response);
                                    $(notifyInfo).prependTo($($updateForm));
                                    $(notifyInfo).fadeOut(4000);
                                },
                                error: function(response) {
                                    let notifyQueryError = $('<div class="notify notify--error mb-20"></div>');
                                    $(notifyQueryError).text(response);
                                    $(notifyQueryError).prependTo($($updateForm));
                                }
                            });

                            document.getElementById('update-formFilms').reset();
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


checkFormUpdate.initModule();