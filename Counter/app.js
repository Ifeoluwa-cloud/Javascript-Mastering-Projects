// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener('click', function(e){
        const myEvent = e.currentTarget.classList;
        console.log(myEvent);
        if (myEvent.contains('decrease')){
            count--;
        }
        else if(myEvent.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = '#222';
        }
    })
})