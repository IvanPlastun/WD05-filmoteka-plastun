-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 03 2019 г., 04:38
-- Версия сервера: 5.6.41
-- Версия PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `filmotekadb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `films`
--

CREATE TABLE `films` (
  `id` bigint(20) NOT NULL,
  `title` text NOT NULL,
  `genre` text NOT NULL,
  `year` int(11) NOT NULL,
  `posterImg` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `films`
--

INSERT INTO `films` (`id`, `title`, `genre`, `year`, `posterImg`, `description`) VALUES
(2, 'Превосходство', 'Фантакстика', 2014, 'superiority.jpg', 'Вы когда-нибудь задумывались о технологиях, как о разумном существе? Могли ли вы представить, что душу человека можно переселить в компьютер? Сейчас в эру технологического прогресса возможно многое. Вот, например, наш герой Уилл Кастер ученый в области искусственного интеллекта. Он предполагает, что душа человека может переселиться в компьютер, и это новое существо будет мыслить, чувствовать и переживать как живое разумное существо. Но все испытания до сегодняшнего дня проваливались, то ли оборудование было не тем, то ли это просто миф. Уилл не только ученый, но и профессор, читающий лекции, и в силу своих убеждений у него есть враги. Противники экспериментов решаются на отчаянный поступок. Для завершения научной карьеры и экспериментов, они хотят застрелить доктора. И вот после очередной лекции, Кастер выходит из аудитории и его останавливают студенты с вопросами, охотно общаясь с ними, к нему подходят и стреляют. Профессора моментально отвозят в больницу, где врачи ставят диагноз, что пуля не задела важных органов, но была пропитана радиоактивными веществами, которые постепенно убьют Уила. Жена не хочет терять мужа, поэтому решается на внедрение разума ученого в его же исследование. В последние минуты, команда проводит эксперимент. После смерти, компьютер начинает загружаться и оттуда звучит голос героя. Теперь это виртуальная личность может многое. Он как вирус проникает в любой уголок планеты, любые тайны открыты перед ним, он знает все, он видит все. И это только малое, что он может. А может он все, даже оживлять растения. Чем закончится эксперимент, можно узнать только при просмотре фильма «Превосходство» ...'),
(3, 'Пятая власть', 'Драма', 2013, 'fifthPower.jpg', 'В мире, где информация ценится превыше всего, а утечка сведений под грифом «секретно» может вызвать необратимые последствия, сайт WikiLeaks навсегда поменял правила игры. Фильм, основанный на реальных событиях, рассказывает о попытке разоблачить государственную коррупцию и ложь властей, которая превратила интернет-стартап в одну из самых известных и обсуждаемых организаций 21-го века. За первые годы существования WIKILEAKS обнародовал больше тайн, чем самые влиятельные в мире СМИ вместе взятые, раскрывая постыдные секреты государственных служб и финансовые преступления корпораций. Но когда основатели сайта получили доступ к крупнейшему засекреченному архиву США, им предстояло найти для себя ответ на один из важнейших вопросов современности: какова цена тайны в свободном обществе — и какова цена ее разглашения?'),
(4, 'Need for Speed Жажда скорости', 'Боевик', 2014, 'Need-for-speed.jpg', 'История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.'),
(6, 'Сноуден', 'Биография', 2016, 'Snowden.jpg', 'Молодой агент ЦРУ Эдвард Сноуден устраивает международный скандал, рассказав прессе о том, как американские спецслужбы следят за гражданским населением. После этого он вынужден бежать из страны и искать политическое убежище по всему миру.'),
(12, 'Из машины', 'Фантастика,драма', 2014, 'ex-machine.jpg', 'В центре сюжета — молодой человек, которого нанимает миллиардер, сделавший состояние на высокотехнологичных разработках. Задача работника — провести неделю в удаленном местечке, тестируя женщину-робота с искусственным интеллектом.');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `films`
--
ALTER TABLE `films`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
