const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;


refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(setBodyBgColor, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
});
refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
});

function setBodyBgColor() {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    refs.body.setAttribute("style", `background-color:${getRandomHexColor()}`)
};