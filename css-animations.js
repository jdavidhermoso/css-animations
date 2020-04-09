(() => {
    let index = 1;
    let min = 1;
    let max = 3;
    $(".nav-control").on("click", changeCharacter);

    function changeCharacter() {
        $(this).hasClass("next") ? moveNext() : movePrev();
        render();
    }

    function moveNext() {
        if (index < max) {
            index++;
        }
    }

    function movePrev() {
        if (index > min) {
            index--;
        }
    }

    function render() {
        const displayedClass = "displayed";
        $(".displayed").removeClass(displayedClass);
        $(`.picture-${index}`).addClass(displayedClass);
        $(`.description-${index}`).addClass(displayedClass);
    }

})();
