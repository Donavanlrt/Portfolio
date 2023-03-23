// header scroll //

function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 120) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);

// text typing effect //


const dynamictext = document.querySelector(".dynamic-text");

const typingtext = () => {
	setTimeout(() => {
		dynamictext.textContent = "Développeur Web";
	}, 0);

	setTimeout(() => {
		dynamictext.textContent = "Intégrateur Web";
	}, 3800);

};

typingtext();
setInterval(typingtext, 8010);
