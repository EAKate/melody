$(document).ready(function () {
    var currentFloor = 2; //переменная где хранитс текущий этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*кнопка увеличения этажа */
    var counterDown = $(".counter-down"); /*кнопка уменьшения этажа */
    var modal = $(".modal"); // диалоговое окно
    var modalCloseButton = $(".modal-close-button"); // кнопка закрытия диалогового окна
    var viewFlatsButton = $(".view-flats"); //кнопка смотреть квартиры

    //функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor);//записываем значение этажа в счетчик справа
    });
    floorPath.on("click", toggleModal); //при клике на этаж, вызвать окно
    modalCloseButton.on("click", toggleModal); //при клике на кнопу закрыть убирает окно (по факту присваивает/убирает класс "is-open" у modal)
    viewFlatsButton.on("click", toggleModal);

    //отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        console.log("Кликнули по кнопке вверх"); /* оставила, пишет в логе ("") если функция исполняется */
        //проверяем значение этажа,оно не дб больше 18
        if (currentFloor < 18) {
            currentFloor++; /* +1 этаж */
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом чтобы было не 1, а 01
            $(".counter").text(usCurrentFloor); /* присваивание классу counter значение функции */
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--; /* -1 этаж */
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
    function toggleModal() {
        modal.toggleClass("is-open"); //функция окрытия-закрытия окна
    }
});
