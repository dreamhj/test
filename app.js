$(function() {
    init();
    addressRemove();
    swiper();
    bxslider();
    datepicker();
	
});

function init() {
    toolBar();
    navi();
    //tab('#tab', '#tabcont');
	tabs();
    allchk('#allchk');
    stepmenu('step1');
    stepmenu('step2');
    goTop();
    layer_open();
    popup();
}

function stepmenu(ele) {
    $('#' + ele).click(function() {
        if(!$('#' + ele + ' .step_list').is(':visible')) {
            $('.step_list').hide();
            $('.step_mn').removeClass('active');
            $(this).addClass('active').find('button').next().slideDown('fast');
        }
        return false;
    });
    $('#' + ele + ' .step_list li a').click(function() {
        var stepText = $(this).text();
        $('#' + ele + ' .step_list li').removeClass('on');
        $(this).parent().addClass('on');
        $('#' + ele).find('button span').text(stepText);
        //console.log(stepText);
        return false;
    });
    $('body').click(function(e) {
        if(!$('.step_div').has(e.target).length) {
            $('.step_list').slideUp('fast');
            $('.step_mn').removeClass('active');
        }
    });
}

function addressRemove() {
    window.addEventListener('load', function() {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
}
//메인 화면 넘기기
function swiper() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        //paginationClickable: true,
        //spaceBetween: 30,
        loop: true,
        mousewheelControl: true
    });
}
//메인 이미지 슬라이드
function bxslider() {
    if($('.bxslider').length > 0) {
        $('.swipe1 .bxslider').bxSlider({
            auto: true,
            controls: false,
            autoHover: true,
            pause: 5000
        });
        $('.swipe2 .bxslider').bxSlider({
            auto: true,
            controls: false,
            autoHover: true,
            pause: 5000
        });
    }
}

function datepicker() {
    $("#fromDate").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showOn: "button",
        buttonImageOnly: true,
        buttonImage: '../resource/image/icon_datepicker.png',
		buttonText: "기간설정",
        showAnim: "slideDown",
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        onClose: function(selectedDate) {
            $("#toDate").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#toDate").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showOn: "button",
        buttonImageOnly: true,
        buttonImage: '../resource/image/icon_datepicker.png',
		buttonText: "기간설정",
        buttonImage: '../resource/image/icon_datepicker.png',
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        onClose: function(selectedDate) {
            $("#fromDate").datepicker("option", "maxDate", selectedDate);
        }
    });
	/*
	https://github.com/KidSysco/jquery-ui-month-picker/wiki/Button-Option
	https://kidsysco.github.io/jquery-ui-month-picker/
	https://github.com/KidSysco/jquery-ui-month-picker
*/
	$('#monthpicker').MonthPicker({
		MonthFormat: 'yy-mm', // Default is 'mm/yyyy' and separator char is not mandatory
		Button: '<img src="../resource/image/icon_datepicker.png" alt="달력" />',
		Animation: 'slideToggle'
	});
}
//위로가기버튼
function goTop() {
    $('#goTop').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
}
//탑- 즐겨찾기, 최신기록
function toolBar() {
    var toolH = $('#toolbar').outerHeight();
    var headerH = $('.site_header .top').outerHeight();
    var footH = $('.site_footer').outerHeight();
    //console.log(headerH);
    var subNav = parseInt($('#subNav').css("top"), 10);
    $('#toolbar').find('.btn_toggle').click(function() {
        if(!$(this).hasClass('off')) {
            toolbarUp();
        } else {
            toolbarDown();
        }
        return false;
    });

    function toolbarUp() {
        $('#container > .grid').stop().animate({
            'paddingTop': headerH
        }, 150);
        $('#toolbar').stop().animate({
            'top': -toolH
        }, 150);
        $('#subNav, #allNav').stop().animate({
            'top': subNav - toolH
        }, 150);
        $('.site_header .top').stop().animate({
            'top': '0px'
        }, 150);
        $('#toolbar').find('.btn_toggle').addClass('off');
    }

    function toolbarDown() {
        $('#container > .grid').stop().animate({
            'paddingTop': headerH + toolH
        }, 150);
        $('#toolbar').stop().animate({
            'top': ''
        }, 150);
        $('#subNav, #allNav').stop().animate({
            'top': subNav
        }, 150);
        $('.site_header .top').stop().animate({
            'top': toolH
        }, 150);
        $('#toolbar').find('.btn_toggle').removeClass('off');
    }
    footerBar(); //footer함수
    if(!$('body').hasClass('main')) { // body main클래스유무에 따른 애니메이션
        $('#container > .grid').css({
            'paddingTop': ''
        });
        $('#toolbar').css({
            'top': -toolH
        });
        $('#subNav, #allNav').css({
            'top': subNav - toolH
        });
        $('.site_header .top').css({
            'top': '0px'
        });
        $('#toolbar').find('.btn_toggle').addClass('off');
        $('.site_footer').hide();
    } else {
        var toggle = setTimeout(function() { //2초후에 하단 토글
            $('.site_footer').animate({
                'marginBottom': -footH
            }, 250).find('.btn_toggle').addClass('off');
        }, 2000);
    }
}
//푸터
function footerBar() {
    $('.site_footer').find('.btn_toggle').click(function() {
        if(!$(this).hasClass('off')) {
            $('.site_footer').animate({
                'marginBottom': -footH
            }, 250);
            $(this).addClass('off');
        } else {
            $('.site_footer').animate({
                'marginBottom': ''
            }, 250);
            $(this).removeClass('off');
        }
        return false;
    });
}

function navi() {
    navBasic('#allNav');
    navBasic('#subNav');
    navAll();
    navSub();

    function navAll() { //전체메뉴
        $('#allNav').hide();
        var contW = $('.grid').width() / 2;
        $('#allNav').css('marginLeft', contW - ($('#allNav').width())); // 위치
        $('#allNav .navi > ul > li').eq(0).addClass('active').find('> a').next().show(); // 첫번째 메뉴 활성화
        $('#allNavBtn').click(function() { //버튼클릭시 슬라이드
            if($(this).hasClass('on')) {
                $(this).removeClass('on');
                $('#allNav').slideUp();
                $('.navi > ul >li').removeClass('active');
                $('.navi_sub > ul >li').removeClass('active');
                $('.navi_sub ul ul:visible').slideUp();
            } else {
                $('#allNav .navi > ul > li').eq(0).addClass('active');
                $('#allNav').stop().slideDown();
                $(this).addClass('on');
            }
            return false;
        });
        $('body').click(function(e) {
            if($('#allNav').css('display') == 'block') {
                if(!$('#allNav').has(e.target).length) {
                    $('#allNavBtn').removeClass('on');
                    $('#allNav').slideUp();
                }
            }
        });
        $('#allNav .close').click(function(e) {
            $('#allNavBtn').removeClass('on');
            $('#allNav').slideUp();
        });
    }

    function navSub() { //좌측메뉴
        var subW = parseInt($('#subNav .navi > ul > li > a').outerWidth(), 10);
        var subNav = parseInt($('#subNav .navi_sub').outerWidth(), 10);
		//console.log(subW+2)
        $('#subNav').width(subW);
		$('#subNav .close').hide();
        $('#subNav .navi > ul > li > a').click(function() {
            if(!$('#subNav').hasClass('on')) {
                $('#subNav').addClass('on').animate({ 'width': subW + subNav + 2}, 250, function(){$('#subNav .close').show();});
                $('#allNav').slideUp();
                $('#allNavBtn').removeClass('on');
            }
            return false;
        });

        $('#subNav .close, #allNavBtn').click(function() {
            $('#subNav').animate({'width': subW}, 250, function() {
                $('#subNav .navi_sub').hide();
                $('#subNav').removeClass('on');
				$('#subNav .close').hide();
            });
            return false;
        });
        $('body').click(function(e) {
            if(!$('#subNav').has(e.target).length) {
                $('#subNav').animate({
                    'width': subW}, 250, function() {
                    $('#subNav .navi_sub').hide();
                    $('#subNav').removeClass('on');
					$('#subNav .close').hide();
                });
            }
        });
    }

    function navBasic(ele) {
        $(ele + ' .navi_sub').hide();
        $(ele + ' .navi > ul > li > a').click(function() {
            $(ele + ' .navi > ul > li').removeClass('active');
            $(ele + ' .navi_sub').hide();
            var subDiv = $(this).next();
            $(this).parent().addClass('active').find('> a').next().show();
            return false;
        });
        $(ele + ' .navi_sub ul ul').hide();
        $(ele + ' .navi_sub ul > li > a').click(function() {
            var subUl = $(this).next();
			$(ele + ' .navi_sub ul >li').removeClass('active');
			$(this).parent().addClass('active');
            if(subUl.is(':visible')) {
                $(ele + ' .navi_sub ul ul:visible').slideUp();
            };
            if(!subUl.is(':visible')) {
                $(ele + ' .navi_sub ul >li').removeClass('active');
                $(this).parent().addClass('active');
                $(ele + ' .navi_sub ul ul:visible').slideUp();
                subUl.slideDown(function() {
                    var subMn = $('#subNav').height();
                    var subH = $('#subNav .navi > ul > li.active .navi_sub > ul').height();
                    console.log(subMn);
                    console.log(subH);
                    if(subH < subMn) {
                        $('#subNav .navi > ul > li.active .navi_sub >ul').wrap('<div>').parent().css('overflow', 'auto').height(subMn);
                    }
                });
            }
            if(subUl.is('ul')) {
                return false;
            }
        });
        $(ele + ' .navi_sub ul ul li a').click(function() {
            $(ele + ' .navi_sub  ul ul li').removeClass('active');
            $(this).parent().addClass('active');
        });
        $('body').click(function(e) { //영역외 클릭시
            if(!$(ele).has(e.target).length) {
                $('.navi > ul >li').removeClass('active');
                $('.navi_sub > ul >li').removeClass('active');
                $('.navi_sub ul ul:visible').slideUp();
            }
        });
        $(ele + ' .close').click(function(e) { //닫기버튼
            $('.navi > ul >li').removeClass('active');
            $('.navi_sub > ul >li').removeClass('active');
            $('.navi_sub ul ul:visible').slideUp();
            return false;
        });
    }
}

function tabs(){
	var index = 0; // index 값을 0으로 초기화
	//if($.cookie("index")) { index = $.cookie("index"); }  // 쿠키에 저장된 index 값이 있으면 가져옵니다.
	$(".tab_cont > div").hide().eq(index).show(); // .tab_content 요소를 모두 숨긴후 index에 해당하는 요소만 보이게 합니다.
	$(".tab li").eq(index).addClass("on"); // .tabs의 자식 요소 li 중 index에 해당하는 요소에 active 클래스를 추가하고 color 스타일을 추가합니다.
	$(".tab li").click(function () {
		$(".tab li").removeClass("on");
		$(this).addClass("on");
		$(".tab_cont > div").hide();
		var activeTab = $(this).find('a').attr("id");
		$("#" + activeTab).fadeIn();
		//$.cookie("index", $(this).index(), { expires:7}); // 현재 활성화된 탭의 index값을 index 변수에 저장합니다. (쿠키 유효기간은 30일)
	});
}

/*
function tab(i, ele) {
	$(i + ' li').each(function(i){
		$(this).find('a').attr('id','tabmn'+i);
	});
    $(i + ' li').eq(0).addClass('on');
    $(ele + ' > div').hide().eq(0).show();
    $(i + ' li a').click(function(event) {
        var tabLink = $(this).attr('href');
        $(i + ' li').removeClass('on');
        $(this).parent('li').addClass('on');
        $(ele + ' > div').hide();
        $(tabLink).show();
        return false;
    });
}
*/
//전체체크박스 선택유무
function allchk(ele) {
    $(ele).click(function() {
        if($(ele).prop('checked')) {
            $(this).parents('.down_list').find('li  input[type=checkbox]').prop('checked', true);
        } else {
            $(this).parents('.down_list').find('li input[type=checkbox]').prop('checked', false);
        }
    });
}

function layer_open() {
    var temp = $('.layer_area');
    var bg = temp.prev().hasClass('block'); //dimmed 레이어를 감지하기 위한 boolean 변수
    temp.fadeIn('fast');
    if(temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
    else temp.css('top', '0px');
    if(temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
    else temp.css('left', '0px');
    temp.find('a.close').click(function(e) {
        $(this).parents('.layer').fadeOut('fast');
        e.preventDefault();
    });
    /*
    $('.layer .block').click(function(e){	//배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
    	$('.layer').fadeOut();
    	e.preventDefault();
    });
    */
}

function popup() {
    $('.popup a.close').click(function(e) {
        $(this).parents('.popup').fadeOut('fast');
        e.preventDefault();
    });
}