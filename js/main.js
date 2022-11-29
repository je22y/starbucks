const searchEl = document.querySelector('.search');//search 라는 클래스를 찾아서 searchEl에 넣음
const searchInputEl = searchEl.querySelector('input');//search클래스 중 input 요소를 찾아서 searchInputEl에 넣음

searchEl.addEventListener('click',function(){
  searchInptrEl.focus(); //search를 눌르면 focus이벤트 발생
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');//searchInputEl가 포커스 되면 searchEl에 focused라는 클래스를 추가한다
  searchInputEl.setAttribute('placeholder', '통합검색');//searchInpurEl에 html요소를 지정한다
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');//searchInputEl가 포커스를 풀면(블러되면) searchEl에 focused라는 클래스를 제거한다
  searchInputEl.setAttribute('placeholder', '');//searchInpurEl에 html요소를 지정한다
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    // badgeEl.style.display ='none'; 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl,.6,{
      opacity:0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2,{ 
      x: 0 //버튼이 원래 위치로
    });
  }else{
    // badgeEl.style.display ='block'; 배지 보이기
    gsap.to(badgeEl,.6,{
      opacity:1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2,{ 
      x: 100
    });

  }
},300));//300=0.3초 0.3초 단위로 함수 실행에 부하를 줘서 함수가 우루루 실행되는 것을 막음 
// _.throttle(함수, 시간)
// window는 브라우저 객체, 우리가 보고있는 화면 자체

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo: 0 //화면 위치를 제일 위로 옮겨줌
  });

});


const fadeEls= document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //fade-in의 요소 수만큼 함수가 진행이 된다
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7, //0.7, 1.4, ···
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay: true, 
  loop : true //반복재생
}); //new는 생성자 new Super(생성자, 옵션)

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay:{
    delay : 3500
  },
  pagination:{
    el: '.promotion .swiper-pagination',//페이지 번호 요소 선택자
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',//다음 페이지 버튼
    nextEl:'.promotion .swiper-next'
  }

});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion =!isHidePromotion
  if(isHidePromotion){//promotionToggleBtn이 눌려서 true로 바뀌면
    promotionEl.classList.add('hide'); //.promotion에 hide를 추가해준다 => .promotion-hide
  }else{
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,//y측으로 20만큼 아래로 이동
    repeat: -1, //무한반복
    yoyo: true, // 재생 역재생
    ease: Power1.easeInOut,//움직이는 속도 조절
    delay:random(0, delay) // 몇초 뒤에 애니메이션 실행
  });
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')//scroll-spy 클래스를 가지는 요소를 spyEls에 할당
spyEls.forEach(function (spyEl){//spyEls의 요소마다 spyEl을 붙여 함수 반복시행, 
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //화면에서 보여지는 부분의 지점
    })
    .setClassToggle(spyEl, 'show') //spyEl요소에 화면의 0.8지점을 지나면 show라는 클래스 추가
    .addTo(new ScrollMagic.Controller());
});

const thisYear=document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //생성자 함수

