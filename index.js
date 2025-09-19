const start = document.querySelector(".start");
const end = document.querySelector(".end");
const showTimer = document.querySelector(".showTimer");

let intervalID;

start.addEventListener("click",function(){
    const input = document.getElementById("input");
    let inputValue = Number(input.value);
    showTimer.innerText = inputValue;
    showTimer.style.color = "#ffffff";
    
    if(input.value === '' || inputValue === 0){
        alert("Please set a time");
        return;
    }

    if(inputValue < 0){
        alert("Please set a valid time");
        input.value = '';
        showTimer.innerText = 0;
        return;
    }

    alert(`${inputValue} seconds timer starting now, will end after ${inputValue} seconds if not ended before that.`);

    input.value = '';

    intervalID = setInterval(function(){
        inputValue--;

        if(inputValue <= 5){
            showTimer.style.color = "#ff5757"; 
        }

        if(inputValue === 0){
            clearInterval(intervalID);
            showTimer.style.color = "#ffffff"; 
        }

        showTimer.innerText = inputValue;
    },1000)

    // console.log(inputValue)
})

end.addEventListener('click',function(){
    clearInterval(intervalID)
})