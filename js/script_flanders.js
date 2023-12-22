(function() {
  window.addEventListener('load', function() {
    //создаём экземпляр Swiper и применяем его к mySwiper
    var swiper = new Swiper(".mySwiper", {
      // Этот слайдер будет иметь пагинацию в виде прогресс-бара
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      // навигация с кнопками "вперёд", "назад"
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // поддержка прокрутки колёсиком мыши
      mousewheel: {
        sensitivity: 0.1,
      },
      // поддержка переключения слайдов на кнопки стрелок на клавиатуре
      keyboard: true
    });
  });
})();

// модули вс6, переключение на стрелочки, табличка видна после перезагрузки