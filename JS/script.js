// Declaration
const displayPanel = document.getElementById("display")

function appendDisplay(input) {
    displayPanel.value += input;
};

function clearDisplay() {
    displayPanel.value = "";
};

function calculate() {
    try {
        displayPanel.value = eval(displayPanel.value)
    }catch(error) {
        console.log("eorrr");
    }
}

