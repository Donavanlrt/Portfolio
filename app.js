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
setInterval(typingtext, 7920);
