var mySwiper = new Swiper('.slider-1', {
    effect: 'fade',
    loop: true,
    speed: 5000,
    autoplay: true,
  })

  var mySwiper = new Swiper('.slider-2', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
     breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },
        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 2
          },
          spaceBetween: 34
        },
        851: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 2
          },
          spaceBetween: 34
        },
        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 2
          },
          spaceBetween: 50
        }
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
 
  var mySwiper = new Swiper('.slider-3', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',  
    },
    breakpoints: {
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 49
      },
      851: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 49
      },
      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var swiper = new Swiper('.slider-events-mobile', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var Swiper = new Swiper('.slider-4', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 75
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    };
    $( "#accordion-france" ).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: icons, 
    });
  });
  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    }; 
    $( "#accordion-germany" ).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: icons
    });
  } );
  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    }; 
    $( "#accordion-italy" ).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: icons
    });
  } );
  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    }; 
    $( "#accordion-russia" ).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: icons
    });
  } );
  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    }; 
    $( "#accordion-belgium" ).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: icons
    });
  } );
  ('.accordeon-icon').click = function(){
    this.classList.toggle('rotate')
  }
  
  $( function() {
    $( "#tabs" ).tabs({
      heightStyle: 'content'
    });
  } );
  
  $( function() {
    $( "#tabs-picture-france" ).tabs({
      heightStyle: "content"
    });
    $('.ui-tabs-anchor').attr('tabindex', 0)
  } );
  $( function() {
    $( "#tabs-picture-germany" ).tabs({
      heightStyle: "content"
    });
    $('.ui-tabs-anchor').attr('tabindex', 0)
  } );
  $( function() {
    $( "#tabs-picture-italy" ).tabs({
      heightStyle: "content"
    });
    $('.ui-tabs-anchor').attr('tabindex', 0)
  } );
  $( function() {
    $( "#tabs-picture-russia" ).tabs({
      heightStyle: "content"
    });
    $('.ui-tabs-anchor').attr('tabindex', 0)
  } );
  $( function() {
    $( "#tabs-picture-belgium" ).tabs({
      heightStyle: "content"
    });
    $('.ui-tabs-anchor').attr('tabindex', 0)
  } );

  // events
  $('.events__btn').click(function() {
    $('.events__item-hidden, .events__item-hidden-tablet').show();
    $(this).hide();
  });
  $('.index').attr('tabindex', 0)

  //contacts
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999 99 99");

  im.mask(selector);

  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 40
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },  
    messages: {
      name: {
        required: 'Поле обязательное для заполнения',
        minLength: 'Имя должно содержать минимум 2 буквы'
      },
      tel: {
        required: 'Поле обязательное для заполнения',
        function: 'Номер введён не верно!'
      },
    },
   });


ymaps.ready(init);
function init(){
   var myMap = new ymaps.Map("map", {
  center: [55.75846306898368,37.601079499999905],
  zoom: 14,
  controls: []
   });

   var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-7, -42]

    });
    myMap.geoObjects.add(myPlacemark);
    
    var myMap2 = new ymaps.Map("map-mobile", {
    center: [55.75846306898368,37.601079499999905],
    zoom: 14,
    controls: []
       });
    
    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-7, -42]
    
    });
    myMap2.geoObjects.add(myPlacemark);
    }
  


// galery select
const element = document.querySelector('#selectCustom');
      const choices = new Choices(element, {
        searchEnabled: false
});

jQuery('.lightzoom').lightzoom({speed: 400, viewTitle: true});

$(document).ready(function(){
  $('.editions-category__subtitle').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
})
  
// burger
$('.burger-btn').on('click', function(event) {
  event.preventDefault;
  $(this).toggleClass('burger-btn-active');
  $('.burger-menu-nav').toggleClass('burger-menu-nav-active');
});

// tooltip
tippy('#myButton', {
  content: 'Пример современных тенденций - современная методология разработки ',
  theme: 'grey',
});
tippy('#myButton-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции ',
  theme: 'grey',
});
tippy('#myButton-3', {
  content: 'В стремлении повысить качество  ',
  theme: 'grey',
});
