let myCount = 0;
const result = document.getElementById("result");
const positiveBtn = document.getElementById("positiveBtn");
const negativeBtn = document.getElementById("negativeBtn");
positiveBtn.onclick = function() {
    //increment method in counter
    myCount += 1;
    result.innerText = myCount;
};
negativeBtn.onclick = function() {
    //decrrement method 
    myCount -= 1;
    result.innerText = myCount;
};