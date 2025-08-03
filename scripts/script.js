function tabs() {
  const tabsBtn = document.querySelectorAll(".procces-tabs__card");
  const tabsContent = document.querySelectorAll(".procces-main__description");
  tabsBtn.forEach(item => {
    item.addEventListener("click", e => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-id");
      let currentContent = document.querySelector(tabId);
      if (!currentBtn.classList.contains("procces-tabs__card-active")) {
        tabsBtn.forEach(item => {
          item.classList.remove("procces-tabs__card-active");
        });
        tabsContent.forEach(item => {
          item.classList.remove("procces-main__description-active");
        });
        currentBtn.classList.add("procces-tabs__card-active");
        currentContent.classList.add("procces-main__description-active");
      }
    });
  });
}

function scrolling(bgList, bgMenu, bgScroll) {
  const anchors = document.querySelectorAll("a.scroll-to");
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      bgList.classList.remove("navigation__active");
      bgMenu.classList.remove("nav-menu__active");
      bgScroll.classList.remove("lock");
    });
  }
}

function burger() {
  const burgerMenu = document.querySelector(".nav-menu");
  const burgerList = document.querySelector(".navigation");
  const stopScroll = document.querySelector("body");
  burgerMenu.addEventListener("click", e => {
    if (!burgerList.classList.contains("navigation__active")) {
      burgerList.classList.add("navigation__active");
      burgerMenu.classList.add("nav-menu__active");
      stopScroll.classList.add("lock");
    } else {
      burgerList.classList.remove("navigation__active");
      burgerMenu.classList.remove("nav-menu__active");
      stopScroll.classList.remove("lock");
    }
  });
  scrolling(burgerList, burgerMenu, stopScroll);
}

function render() {
  tabs();
  burger();
}

render();
