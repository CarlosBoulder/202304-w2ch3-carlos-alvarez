let counterNumber = 0;
const feedback = document.querySelector(".feedback");

let incrementCounter = () => {
    if(counterNumber < 20){
        counterNumber++
    }
    else{
        showFeedback();
    } 
}

let decrementCounter = () => {
    if(counterNumber > 0){
        counterNumber--;
    }
    else{
        showFeedback();
    }
}

const hideSpan = () => {
    feedback.textContent = "";
  };

const showFeedback = () => {
    feedback.textContent = `Sorry!! You can only use the counter with values between 0 and 20`;
};

const handleResetInput = () => {
    const counter = document.querySelector(".counter");
    counterNumber = 0;
    counter.value = counterNumber;
    hideSpan();
  };

const handleIncrementInput = () => {
    incrementCounter();
    const counter = document.querySelector(".counter");
    counter.value = counterNumber;
}

const handleDecrementInput = () => {
    decrementCounter();
    const counter = document.querySelector(".counter");
    counter.value = counterNumber;
}

const registerEventListeners = () => {
    const resetBotton = document.querySelector(".reset-botton");
    resetBotton.addEventListener("click", () => {
        handleResetInput();
    });

    const incrementBotton = document.querySelector(".increment-botton");
    incrementBotton.addEventListener("click", () => {
        handleIncrementInput();
    });

    const decrementBotton = document.querySelector(".decrement-botton");
    decrementBotton.addEventListener("click", () => {
        handleDecrementInput();
    });

  }
registerEventListeners();