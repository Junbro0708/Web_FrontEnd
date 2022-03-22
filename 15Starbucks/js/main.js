const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function(){
  searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합 검색');
});

searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});


const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log('scroll!', );
  if(window.scrollY > 500){
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
    //gsap.to(요소, 지속시간, 옵션);
  }else{
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// ._thorottle(함수, 몇 초에 한번 실행되는지 300은 0.3초)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});