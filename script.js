function countdown() {
    const timer = setInterval(timeText, 1000);
    let timeLeft = 5;
    
    function timeText() {
        document.getElementById("timer").innerHTML = --timeLeft + " sec ";
        if (timeLeft == 0) {
            clearInterval(timer);
        }
    }
}