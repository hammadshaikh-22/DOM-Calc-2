var inputData = document.getElementById("input")
// console.log(inputData)


function setNum(num) {
    var lastValue = inputData.value.toString().slice(inputData.value.length - 1)
    // console.log(lastValue)
    if (lastValue == "+" || lastValue == "-" || lastValue == "*" || lastValue == "/") {
        if (num == "+" || num == "-" || num == "*" || num == "/") {
            Toastify({
                text: "Please enter correct data",
                className: "info",
                position : "center",
                style: {
                    background: "linear-gradient(to right, #c50000ff, #ff0000ff)",
                    
                }
            }).showToast();
        }
        else {
            inputData.value += num
        }
    }
    else {
        inputData.value += num

    }


}
function equal() {
    inputData.value = eval(inputData.value)
}

function signSet() {
    inputData.value = `(-${inputData.value})`
}

function backSpace(){
    inputData.value = inputData.value.toString().slice(0,inputData.value.length-1)
}

function clearAll(){
    inputData.value =""
}

function square(){
    inputData.value = inputData.value * inputData.value
}

function cube(){
    inputData.value = inputData.value * inputData.value * inputData.value
}

function squareRoot(){
    inputData.value = Math.sqrt(inputData.value)
}


