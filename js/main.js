const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(e) {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(e) {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', () => {
    searchInputEl.removeAttribute('placeholder');
    searchEl.classList.remove('focused');
})

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle((e)=> {
    if (window.scrollY > 500) {
        // 배지요소를 숨기기 
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            opacity : 0,
            display : 'none'
        });

        // to-top 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            opacity : 1,
            display : 'block',
            x : 0,
        })
    } else { 
        // 배지요소를 보여주기
        gsap.to(badgeEl, 0.6, { 
            opacity : 1,
            display : 'block'
        })

        // to-top 버튼 숨기기 
        gsap.to(toTopEl, 0.2, {
            opacity : 1,
            display : 'none',
            x : 100,
        })
    }
},300)); 

toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo : 0
    })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
    gsap.to(
        fadeEl, 
        1, 
        { 
            opacity : 1, delay : (index + 1) * 0.7
        }
    );
    
})


// .notice-line .swiper-container를 vertical slide로 변경해주는 코드
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    loop : true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백
    centeredSlides : true, // 1번 슬라이드가 가운데 보이기
    loop : true, 
    // autoplay : true, // boolean 혹은 { delay : 3000, }
    autoplay : {
        delay : 2000, 
    },
    pagination : { 
        el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true,
    },
    navigation : { // 화살표 방향 설정
        prevEl : '.promotion .swiper-prev', 
        nextEl : '.promotion .swiper-next',
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

function random(max, min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
    // 인수로 element뿐만 아니라 selector문자열도 받음
    gsap.to(
        selector, 
        random(1.5, 2.5), 
        {
            y : size,
            repeat : -1, // 무한반복
            yoyo : true, // 반복할때 돌아가는 애니메이션
            ease : Power1.easeInOut,
            delay : random(0,delay),
            repeatDelay : .5,
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(spyEl => {
    // Scene : 특정 요소를 감시하는 옵션을 지정
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, // 보여짐 여부를 감시할 요소
            triggerHook : 0.8 // view port의 시작지점이0, 끝부분이 1일때 이벤트가 트리거될 위치
            // 트리거가 되면 setClassToggle이 실행됨
        })
        .setClassToggle(spyEl, 'show') // spyEl 요소의 show라는 클래스를 토글
        .addTo(new ScrollMagic.Controller());

})

new Swiper('.awards .swiper-container', {
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5, // 한번에 보여줄 슬라이드 개수
    navigation : {
        prevEl : '.swiper-prev',
        nextEl : '.swiper-next'
    }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 

