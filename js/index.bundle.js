!function(){new Swiper(".mySlider1",{slidesPerView:1,spaceBeetwen:0,navigation:{nextEl:".mySlider1-next",prevEl:".mySlider1-prev"},breakpoints:{1280:{slidesPerView:4},768:{slidesPerView:3},480:{slidesPerView:2}}}),new Swiper(".ourWork-Slider",{slidesPerView:1,spaceBeetwen:0,navigation:{nextEl:".ourWork-next",prevEl:".ourWork-prev"},breakpoints:{1600:{slidesPerView:5},1366:{slidesPerView:4},768:{slidesPerView:3},480:{slidesPerView:2}}});const e=document.querySelectorAll(".price-item"),t=(document.querySelectorAll(".price-item__title"),document.querySelector(".view-title")),r=document.querySelector(".price-item__image"),i=document.querySelector(".nav__burger"),c=document.querySelectorAll(".nav-list__link"),o=document.querySelectorAll(".service-item__button"),n=document.querySelector(".popUp"),l=document.querySelectorAll(".button"),s=()=>{setTimeout((()=>{document.addEventListener("click",(function e(t){const r=t.target;r==n||n.contains(r)||(n.classList.remove("active"),document.body.style.overflow="auto",document.removeEventListener("click",e))}))})),n.classList.add("active"),document.body.style.overflow="hidden"};l.forEach((e=>{e.addEventListener("click",(()=>{s()}))})),o.forEach((e=>{e.addEventListener("click",(()=>{s()}))})),c.forEach((e=>{e.addEventListener("click",(()=>{i.classList.remove("active"),document.querySelector(".nav-list").classList.remove("active")}))})),i.addEventListener("click",(()=>{i.classList.toggle("active"),document.querySelector(".nav-list").classList.toggle("active")})),e.forEach((i=>{i.addEventListener("click",(()=>{const c=i.querySelector("h3");var o;e.forEach((e=>{e.querySelector("h3").style.color="var(--text)"})),c.style.color="var(--accent)",o=c.textContent,t.querySelector("span").textContent=o,(e=>{"Простой"===e&&(r.src="./img/price1.png"),"Закрытый"===e&&(r.src="./img/price2.png"),"Сложный"===e&&(r.src="./img/price3.png"),"Круглый"===e&&(r.src="./img/price4.png")})(c.textContent)}))}))}();