!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),function(){const e=document.getElementById("nav-menu").getElementsByTagName("a");for(let t=0,n=e.length;t<n;t++)if(e[t].href===window.location.href){e[t].classList.add("active");break}}(),window.addEventListener("scroll",(function(e){(window.scrollY||document.documentElement.scrollTop)>50?document.querySelector(".header").classList.add("header-scroll"):document.querySelector(".header").classList.remove("header-scroll")})),document.addEventListener("mousemove",(function(e){this.querySelectorAll(".hero__img-left").forEach((t=>{const n=t.getAttribute("value"),o=(window.innerWidth-e.pageX*n)/100,i=(window.innerHeight-e.pageY*n)/100;t.style.transform=`translateX(${o}px) translateY(${i}px)`})),this.querySelectorAll(".hero__img-right").forEach((t=>{const n=t.getAttribute("value"),o=(window.innerWidth-e.pageX*n)/90,i=(window.innerHeight-e.pageY*n)/90;t.style.transform=`translateX(${o}px) translateY(${i}px)`}))})),document.addEventListener("click",(e=>{e.target&&!e.target.closest(".uslugi-menu__item")||(e=>{const t=e.closest(".uslugi-grid");if(e.classList.contains("uslugi-menu__item--active"))return;console.log(t);const n=e.dataset.targetId,o=t.querySelector(`.uslugi-content[data-id="${n}"]`);o&&(t.querySelector(".uslugi-menu__item--active").classList.remove("uslugi-menu__item--active"),t.querySelector(".uslugi-content--active").classList.remove("uslugi-content--active"),e.classList.add("uslugi-menu__item--active"),o.classList.add("uslugi-content--active"))})(e.target.closest(".uslugi-menu__item"))}))}();