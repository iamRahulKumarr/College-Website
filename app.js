var prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
    console.log('Prev: ' + prevScrollPos);
    console.log('Curr: ' + currentScrollPos);
  } else {
    document.getElementById('header').style.top = '-15rem';
    console.log('Prev: ' + prevScrollPos);
    console.log('Curr: ' + currentScrollPos);
  }
  prevScrollPos = currentScrollPos;
};

const width = document.querySelectorAll('.width-0');
const observerW = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('width-0');
      entry.target.classList.add('width');
    }
  });
});
const observerH = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('height-0');
      entry.target.classList.add('height');
    }
  });
});
const height = document.querySelectorAll('.height-0');

width.forEach((el) => observerW.observe(el));
height.forEach((el) => observerH.observe(el));

const track = document.querySelector('.nav-track');
const button = document.querySelector('.navigation__button');
const header = document.querySelector('.header');
const headerId = header.getAttribute('id');
const opacity = document.querySelector('.opacity-select');
function toggleNav() {
  if (track.classList.contains('showTrack')) {
    track.classList.remove('showTrack');
    header.setAttribute('id', 'header');
  } else {
    track.classList.add('showTrack');
    header.removeAttribute('id');
  }
}

button.addEventListener('click', toggleNav);

const about = document.querySelector('.nav-link__main-1');
const enrol = document.querySelector('.nav-link__main-2');
const news = document.querySelector('.nav-link__main-3');
const containerAbout = document.querySelector('.nav-track__container-content-1');
const containerEnrol = document.querySelector('.nav-track__container-content-2');
const containerNews = document.querySelector('.nav-track__container-content-3');


about.addEventListener('click', activeAbout);
enrol.addEventListener('click', activeEnrol);
news.addEventListener('click', activeNews);

function activeAbout() {
  if (!about.classList.contains('active')) {
    about.classList.add('active');
    containerAbout.classList.remove('display-none');
    containerEnrol.classList.add('display-none');
    containerNews.classList.add('display-none');

    if (enrol.classList.contains('active')) {
      enrol.classList.remove('active');
    } else {
      news.classList.remove('active');
    }
  }
}

function activeEnrol() {
  if (!enrol.classList.contains('active')) {
    enrol.classList.add('active');
    containerEnrol.classList.remove('display-none');
    containerAbout.classList.add('display-none');
    containerNews.classList.add('display-none');
    if (about.classList.contains('active')) {
      about.classList.remove('active');
    } else {
      news.classList.remove('active');
    }
  }
}

function activeNews() {
  if (!news.classList.contains('active')) {
    news.classList.add('active');
    containerNews.classList.remove('display-none');
    containerAbout.classList.add('display-none');
    containerEnrol.classList.add('display-none');
    if (about.classList.contains('active')) {
      about.classList.remove('active');
    } else {
      enrol.classList.remove('active');
    }
  }
}

const loader = document.querySelector('.loader');


window.addEventListener('load', function(){
 loader.classList.add('load-animation');

});

const checkbox1 = document.querySelector('.nav-track__checkbox-1');
const checkbox2 = document.querySelector('.nav-track__checkbox-2');
const checkbox3 = document.querySelector('.nav-track__checkbox-3');
const menuListA = document.querySelector('.nav-track__menu-list--about');
const menuListE = document.querySelector('.nav-track__menu-list--enrol');
const menuListN = document.querySelector('.nav-track__menu-list--news');

checkbox1.addEventListener('click', function(){
  if(window.getComputedStyle(menuListA, null).getPropertyValue("display") == 'none'){
    menuListA.style.display= 'block';
  }else{
    menuListA.style.display = "none";
  }
})

checkbox2.addEventListener('click', function(){
  if(window.getComputedStyle(menuListE, null).getPropertyValue("display") == 'none'){
    menuListE.style.display= 'block';
  }else{
    menuListE.style.display = "none";
  }
})

checkbox3.addEventListener('click', function(){
  if(window.getComputedStyle(menuListN, null).getPropertyValue("display") == 'none'){
    menuListN.style.display= 'block';
  }else{
    menuListN.style.display = "none";
  }
})


const footer1 = document.querySelector('.footer__plus-1');
const footer2 = document.querySelector('.footer__plus-2');
const footer3 = document.querySelector('.footer__plus-3');
const footer4 = document.querySelector('.footer__plus-4');

const footerList01 = document.querySelector('.footer__list--1');
const footerList02 = document.querySelector('.footer__list--2');
const footerList03 = document.querySelector('.footer__list--3');
const footerList04 = document.querySelector('.footer__list--4');

footer1.addEventListener('click', function(){
  if(window.getComputedStyle(footerList01, null).getPropertyValue("display") == 'none'){
    footerList01.style.display= 'grid';
  }else{
    footerList01.style.display = "none";
  }
})
footer2.addEventListener('click', function(){
  if(window.getComputedStyle(footerList02, null).getPropertyValue("display") == 'none'){
    footerList02.style.display= 'grid';
  }else{
    footerList02.style.display = "none";
  }
})
footer3.addEventListener('click', function(){
  if(window.getComputedStyle(footerList03, null).getPropertyValue("display") == 'none'){
    footerList03.style.display= 'grid';
  }else{
    footerList03.style.display = "none";
  }
})

footer4.addEventListener('click', function(){
  if(window.getComputedStyle(footerList04, null).getPropertyValue("display") == 'none'){
    footerList04.style.display= 'grid';
  }else{
    footerList04.style.display = "none";
  }
})