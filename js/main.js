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

window.addEventListener('scroll', _.throttle((e)=> {
    console.log(window.scrollY);
},300));