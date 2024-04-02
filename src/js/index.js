const swiper = new Swiper(".mySlider1", {
  slidesPerView: 1,
  spaceBeetwen: 0,
  navigation: {
    nextEl: ".mySlider1-next",
    prevEl: ".mySlider1-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});
const swiperSecond = new Swiper(".ourWork-Slider", {
  slidesPerView: 1,
  spaceBeetwen: 0,
  navigation: {
    nextEl: ".ourWork-next",
    prevEl: ".ourWork-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1366: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});

const priceItem = document.querySelectorAll(".price-item");
const pricetitle = document.querySelectorAll(".price-item__title");
const viewTitle = document.querySelector(".view-title");
const priceImage = document.querySelector(".price-item__image");
const nav__burger = document.querySelector(".nav__burger");
const navListLink = document.querySelectorAll(".nav-list__link");

navListLink.forEach((element) => {
  element.addEventListener("click", () => {
    nav__burger.classList.remove("active");
    document.querySelector(".nav-list").classList.remove("active");
  });
});

nav__burger.addEventListener("click", () => {
  nav__burger.classList.toggle("active");
  document.querySelector(".nav-list").classList.toggle("active");
});

const changeTitle = (text) => {
  const span = viewTitle.querySelector("span");
  span.textContent = text;
};
const changeSrc = (text) => {
  if (text === "Простой") {
    priceImage.src = "./img/price1.png";
  }
  if (text === "Закрытый") {
    priceImage.src = "./img/price2.png";
  }
  if (text === "Сложный") {
    priceImage.src = "./img/price3.png";
  }
  if (text === "Круглый") {
    priceImage.src = "./img/price4.png";
  }
};

const resetColor = () => {
  priceItem.forEach((element) => {
    const headerText = element.querySelector("h3");
    headerText.style.color = "var(--text)";
  });
};

priceItem.forEach((element) => {
  element.addEventListener("click", () => {
    const headerText = element.querySelector("h3");
    resetColor();
    headerText.style.color = "var(--accent)";
    changeTitle(headerText.textContent);
    changeSrc(headerText.textContent);
  });
});
