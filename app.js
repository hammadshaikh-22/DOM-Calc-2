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


document.addEventListener("keydown" , function(val){
    val.preventDefault()
    // console.log(val.key)
    if (val.key == "Enter"){
        
        equal()
    }
    else if(Number(val.key)>=0 && Number(val.key<=9)){
        setNum(val.key)
    }
    else if(val.key == "+" || val.key == "-" || val.key == "*" || val.key == "/"){
        setNum(val.key)
    }
    else if(val.key == "Backspace"){
        backSpace()
    }
}



)
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
function cubeRoot(){
    inputData.value = Math.cbrt(inputData.value)
}


function percentageCalc(){
    var result = 0
    var value = inputData.value + "%"
    if (value.toString().includes("%")){
        var numb = parseFloat(value)
        result = numb/100
    }
    if (value.toString().includes("%") && value.toString().includes("+")){
        var res = value.toString().split("+")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) +Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("-")){
        var res = value.toString().split("-")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) -Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("*")){
        var res = value.toString().split("*")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) *Number(num3)  
        console.log(result)
        inputData.value = result
    }
    if (value.toString().includes("%") && value.toString().includes("/")){
        var res = value.toString().split("/")
        var numb1 = res[0]
        var numb2 = res[1]
        var num3 = (parseFloat(numb2)/100)*numb1
        var result =  Number(numb1) /Number(num3)  
        console.log(result)
        inputData.value = result
    }
}


