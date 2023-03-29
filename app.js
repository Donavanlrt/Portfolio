// text typing effect 

const dynamictext = document.querySelector(".dynamic-text");

const typingtext = () => {
    setTimeout(() => {
        dynamictext.textContent = "Développeur Web";
    }, 0);

    setTimeout(() => {
        dynamictext.textContent = "Intégrateur Web";
    }, 3900);

};

typingtext();
setInterval(typingtext, 8010);
