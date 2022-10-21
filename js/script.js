/* var name = "Ivan";

let number = 7;
const pi = 3.14;

let leftBorderWith = 200;
 */
/* number - числа для обозначения зарплаты,пикселей(чего-либо)  */
/* string - "" - абсолютно любая информация которую можно описать словами */
/* true/false -  */
/* null  */
/* undefined - что-то существует,но не значения не имеет */
/* 
let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
} */
/* Symbol */

/* 
alert(1234) *//* 
console.log("vbsds") */
/* let answer = confirm("Вам есть 18?");
console.log(answer); */
/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */
/* console.log(4+4) */

/* let isChecked = true,
    isClose = true;
 */
/* console.log(isChecked && isClose); */
/* 
console.log(isChecked || isClose); */

/* if (2*6 == 8*1) {
    console.log('Верно')
} else {
    console.log('ошибка')
} */
/* 
let answer = confirm("Вам есть 18?");
if (answer) {
    console.log('Проходите')
} else {
    console.log('Уходи')
}
 */
/* const num = 50;

if (num < 49) {
    console.log('Неправильно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
} */
/* 
for(let i = 1; i < 8; i++) {
    console.log(i);
}
 */
/* 
function logging(a, b) {
    console.log(a + b )
}

logging(3, 5); */ 

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    dots: false,
                    arrows: false 
                    }    
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /* modal  */

    $('[data-modal=consulation]').on('click', function(){
        $('.overlay, #consulation').fadeIn('slow');
    });   
    $('.model__close').on('click', function(){
        $('.overlay, #consulation, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .model__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('#consulation-form');
    validateForms('#consulation form');
    validateForms('#order form');


    /* pageup and smooth scroll */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }   else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href^='#up'").click(function() {
        var _href = $(this).attr("href");
        $("html,body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
}); 
