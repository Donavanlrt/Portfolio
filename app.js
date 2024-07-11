// text typing effect 

const dynamictext = document.querySelector(".dynamic-text");

const typingtext = () => {
    setTimeout(() => {
        dynamictext.textContent = "Web Designer";
    }, 0);

    setTimeout(() => {
        dynamictext.textContent = "UX Designer";
    }, 3900);

};

typingtext();
setInterval(typingtext, 8010);

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.addEventListener("click", function(event) {
  var menu = document.getElementById("menu");
  var hamburger = document.querySelector(".hamburger");
  var isClickInsideMenu = menu.contains(event.target);
  var isClickInsideHamburger = hamburger.contains(event.target);
  
  if (!isClickInsideMenu && !isClickInsideHamburger) {
    menu.style.display = "none";
  }
});