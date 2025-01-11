$(document).ready(() => {

    $('#burger').click(() => {
        $('#menu').addClass('open');
    })
    $('#menu').click(() => {
        $('#menu').removeClass('open');
    })

    $('.schedule-slider').slick({
        accessibility: true,
        arrows: true,
        dots: true,
        dotsClass: 'dots-style',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type = "button" class="button-prev">\n' +
            '        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '            <g clip-path="url(#clip0_3910_124)">\n' +
            '                <path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#fff3e1"/>\n' +
            '            </g>\n' +
            '        </svg>\n' +
            '    </button>',
        nextArrow: '<button type="button" class="button-next">\n' +
            '    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <g clip-path="url(#clip0_3910_130)">\n' +
            '            <path d="M25.6795 20.5226L17.2181 29.8232C17.0224 30.0385 16.7538 30.1645 16.4619 30.1781C16.1699 30.1916 15.891 30.091 15.6765 29.8947L14.9936 29.2705C14.5493 28.8638 14.5176 28.1707 14.9231 27.7251L22.0284 19.915L14.2331 12.788C14.0186 12.5918 13.8928 12.3228 13.8795 12.0303C13.8661 11.7375 13.9668 11.4579 14.1625 11.2425L14.7856 10.5579C14.9815 10.3426 15.2499 10.2165 15.5419 10.203C15.8338 10.1894 16.1127 10.2901 16.3272 10.4863L25.6087 18.9718C25.8237 19.1687 25.9492 19.439 25.9619 19.732C25.976 20.0261 25.8757 20.3068 25.6795 20.5226Z" fill="#fff3e1"/>\n' +
            '        </g>\n' +
            '    </svg>\n' +
            '</button>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 816,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                    // centerPadding: '100px'
                }
            },
            // {
            //     breakpoint: 510,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // }
        ]
    });

    $('.photo-slider').slick({
        accessibility: true,
        lazyLoad: 'ondemand',
        arrows: true,
        dots: true,
        dotsClass: 'dots-style',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type = "button" class="button-prev">\n' +
            '        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '            <g clip-path="url(#clip0_3910_124)">\n' +
            '                <path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#2a2927"/>\n' +
            '            </g>\n' +
            '        </svg>\n' +
            '    </button>',
        nextArrow: '<button type="button" class="button-next">\n' +
            '    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <g clip-path="url(#clip0_3910_130)">\n' +
            '            <path d="M25.6795 20.5226L17.2181 29.8232C17.0224 30.0385 16.7538 30.1645 16.4619 30.1781C16.1699 30.1916 15.891 30.091 15.6765 29.8947L14.9936 29.2705C14.5493 28.8638 14.5176 28.1707 14.9231 27.7251L22.0284 19.915L14.2331 12.788C14.0186 12.5918 13.8928 12.3228 13.8795 12.0303C13.8661 11.7375 13.9668 11.4579 14.1625 11.2425L14.7856 10.5579C14.9815 10.3426 15.2499 10.2165 15.5419 10.203C15.8338 10.1894 16.1127 10.2901 16.3272 10.4863L25.6087 18.9718C25.8237 19.1687 25.9492 19.439 25.9619 19.732C25.976 20.0261 25.8757 20.3068 25.6795 20.5226Z" fill="#2a2927"/>\n' +
            '        </g>\n' +
            '    </svg>\n' +
            '</button>'
    });

    $('.adaptive-photo-slider').slick({
        accessibility: true,
        lazyLoad: "ondemand",
        arrows: true,
        dots: true,
        dotsClass: 'dots-style',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type = "button" class="button-prev">\n' +
            '        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '            <g clip-path="url(#clip0_3910_124)">\n' +
            '                <path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#2a2927"/>\n' +
            '            </g>\n' +
            '        </svg>\n' +
            '    </button>',
        nextArrow: '<button type="button" class="button-next">\n' +
            '    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <g clip-path="url(#clip0_3910_130)">\n' +
            '            <path d="M25.6795 20.5226L17.2181 29.8232C17.0224 30.0385 16.7538 30.1645 16.4619 30.1781C16.1699 30.1916 15.891 30.091 15.6765 29.8947L14.9936 29.2705C14.5493 28.8638 14.5176 28.1707 14.9231 27.7251L22.0284 19.915L14.2331 12.788C14.0186 12.5918 13.8928 12.3228 13.8795 12.0303C13.8661 11.7375 13.9668 11.4579 14.1625 11.2425L14.7856 10.5579C14.9815 10.3426 15.2499 10.2165 15.5419 10.203C15.8338 10.1894 16.1127 10.2901 16.3272 10.4863L25.6087 18.9718C25.8237 19.1687 25.9492 19.439 25.9619 19.732C25.976 20.0261 25.8757 20.3068 25.6795 20.5226Z" fill="#2a2927"/>\n' +
            '        </g>\n' +
            '    </svg>\n' +
            '</button>',
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.feedback-slider').slick({
        accessibility: true,
        arrows: true,
        dots: true,
        dotsClass: 'dots-style',
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type = "button" class="button-prev">\n' +
            '        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '            <g clip-path="url(#clip0_3910_124)">\n' +
            '                <path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#2a2927"/>\n' +
            '            </g>\n' +
            '        </svg>\n' +
            '    </button>',
        nextArrow: '<button type="button" class="button-next">\n' +
            '    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <g clip-path="url(#clip0_3910_130)">\n' +
            '            <path d="M25.6795 20.5226L17.2181 29.8232C17.0224 30.0385 16.7538 30.1645 16.4619 30.1781C16.1699 30.1916 15.891 30.091 15.6765 29.8947L14.9936 29.2705C14.5493 28.8638 14.5176 28.1707 14.9231 27.7251L22.0284 19.915L14.2331 12.788C14.0186 12.5918 13.8928 12.3228 13.8795 12.0303C13.8661 11.7375 13.9668 11.4579 14.1625 11.2425L14.7856 10.5579C14.9815 10.3426 15.2499 10.2165 15.5419 10.203C15.8338 10.1894 16.1127 10.2901 16.3272 10.4863L25.6087 18.9718C25.8237 19.1687 25.9492 19.439 25.9619 19.732C25.976 20.0261 25.8757 20.3068 25.6795 20.5226Z" fill="#2a2927"/>\n' +
            '        </g>\n' +
            '    </svg>\n' +
            '</button>',
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // $('.onclick').click(() => {
    //     // console.log($(e.target).closest('.slider-page').height);
    //     console.log($(this).closest('.slider-page'));
    // });

    // $('.onclick').click(() => {
    //     const fbSlider = $('.feedback-slider');
    //     fbSlider.slick('slickPrev');
    // });

    $('.play-button').click(() => {
        $('.wallpaper').hide();
        $('.main-video').show();
    });

    (function ($) {
        $('.swipebox').swipebox();
    })(jQuery);

    $('.main-button').click(() => {
        let offset = 0;
        $('html, body').animate({
            scrollTop: $('#program').offset().top - offset
        }, 500);
    });

    function formValidate(form) {
        form.validate({
            errorClass: "error fail-alert",
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: 'Пожалуйста, представьтесь.'
                },
                phone: {
                    required: 'Укажите номер телефона',
                }
            }
        })
    }

    let form = $('#order-form');
    formValidate(form);

    const url = 'https://testologia.ru/checkout';
    let loader = $('.loader');

    $('#order-button').click(function () {
        let isFormValid = form.validate().form(); // Запускаем валидацию для всей формы.
        if (isFormValid) {
            loader.css('display', 'flex');
            $.ajax({
                url: url,
                method: 'post',
                data: $('#order-form').serialize(),
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        $('.form').hide();
                        $('.order-accepted').show();
                        document.getElementById('order-form').reset();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.');
                    }
                })
        }
    })

    let mailingForm = $('#mailing-form');
    mailingForm.validate({
        errorClass: "error fail-alert",
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: 'Пожалуйста, укажите свой адрес электронной почты.',
                email: 'Некорректный адрес электронной почты.'
            }
        }
    })

    $('#mailing-button').click(function () {
        let isFormValid = mailingForm.validate().form(); // Запускаем валидацию для всей формы.
        if (isFormValid) {
            alert('Спасибо за подписку на нашу рассылку!')
            document.getElementById('mailing-form').reset();
        }
    })

    let popUp = $('#popup-bg');
    $('#header-order-call').click(function () {
        popUp.show();
    })

    $('#footer-order-call').click(function () {
        popUp.show();
    })

    let popupForm = $('#popup-form');
    formValidate(popupForm);
    $('#popup-button').click(function () {
        let isFormValid = popupForm.validate().form(); // Запускаем валидацию для всей формы.
        if (isFormValid) {
            loader.css('display', 'flex');
            $.ajax({
                url: url,
                method: 'post',
                data: popupForm.serialize(),
            })
                .done(function (message) {
                    loader.hide();
                    if (message.success) {
                        $('.popup-container').hide();
                        $('.popup-order-accepted').show();
                        document.getElementById('popup-form').reset();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.');
                    }
                });
        }
    })

    popUp.click(() => {
        if (!$(event.target).closest('#popup-form').length && !$(event.target).is('#popup-form')) {
            popUp.hide();
            $('.popup-container').show();
            $('.popup-order-accepted').hide();
        }
    })

    $('#popup-phone').mask('+375 (99) 999-99-99');
    $('#phone').mask('+375 (99) 999-99-99');

})
;