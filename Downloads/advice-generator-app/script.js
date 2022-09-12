const adviceID = document.querySelector("#advice-id");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

generateAdvice();

dice.addEventListener('click', generateAdvice);

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => {
            let data = res.json();
            return data
        }).then(data => {
            console.log(data.slip);
            adviceID.innerHTML = data.slip.id;
            adviceText.innerHTML = data.slip.advice;
        })
};