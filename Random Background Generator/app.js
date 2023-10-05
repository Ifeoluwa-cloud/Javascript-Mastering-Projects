const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    // get random number between 0 - 3;
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

/** Or use Click to get background color sequentially instead of randomly;
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    const btn = document.getElementById('btn');
    const color = document.querySelector(".color");
    let currentIndex = 0;

    btn.addEventListener("click", function(){
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
    color.textContent = colors[currentIndex];
});**/


