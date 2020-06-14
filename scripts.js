let display = document.querySelector('#calc')
const allButtons = document.querySelectorAll('input')
const resetForm = document.querySelector('#calculadora')

let values = ["","",""]

function  cleanOne()  {
    
    let subs
        if(values[0] !== "" && values[1] == "" && values[2] == "") {
            
            subs = values[0].substr(0,values[0].length -1) 
            values[0] = subs 
            display.innerText = values[0]
          return display.innerText

        } else if(values[0] !== ""  && values[1] !== "" && values[2] == "") {
            subsValues = values[1].substr(0,values[1].length -1) 
            subsDisplay = display.innerText.substr(0,display.innerText.length -1)
            values[1] = subsValues
            display.innerText = subsDisplay 
            return display.innerText
            
        } else if(values[2] && values[1] !== "") {
            subsValues = values[2].substr(0,values[2].length -1) 
            subsDisplay = display.innerText.substr(0,display.innerText.length -1)
            values[2] = subsValues
            display.innerText = subsDisplay 
        
        return display.innerText

      }

    return display.innerText 
}

function  buttonDot(num)  {
        
    if(values[0] !== "" && !values[0].includes(".")) {
        values[0] +=num
        display.innerText = values[0]

    } else if(values[2] !== "" && !values[2].includes(".")) {
        values[2] =num
        display.innerText += values[2]
    }
    
}

function  buttonOperator(num)  {
    
    if(values[0] !== ""  && values[1] === "" && values[1].length <= 1  ) {
        values[1] = num
        display.innerText += values[1]
        
    } else if(values[1] !== "" && values[2] === ""){
        let subs = display.innerText.substr(0,display.innerText.length -1) //substr 2 de tras para frente (-2) e remove o 1 (ultimo) 1º do final
       
        values[1] = num
        display.innerText = subs
        display.innerText += values[1]
    }

    return display.innerText
}

function  buttonNumber(num){
    
    if(values[0].length <= 7 && values[1] == "") {
        display.innerText = num
        values[0] += display.innerText
        display.innerText = values[0]
    }

    if( values[1] !== "") {
        if(values[2].length <= 7) {
            display.innerText += num
            values[2] += num
        }
    }
    return values
}


function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    if(num2 == 0) {
        return 0
    }
    return num1 / num2
}

function porc(num1, num2) {
    if(num2 == 0) {
        return 0
    }
    return num1 * num2 / 100
}


   
function calculate() {
    
    if(display.innerText.includes("+")) { 
        values = display.innerText.split("+")
        display.innerText = add(Number(values[0]), Number(values[1]))
        values = ["","",""]
    
    } else if(display.innerText.includes("-")) {
        values = display.innerText.split("-")
        display.innerText = sub(Number(values[0]), Number(values[1])) 
        values = ["","",""]
        

    } else if(display.innerText.includes("x")) {
        values = display.innerText.split("x")
        display.innerText = mult(Number(values[0]), Number(values[1]))
        values = ["","",""]
        values[0]= display.innerText

    } else if(display.innerText.includes("÷")) {
        values = display.innerText.split("÷")
        display.innerText = div(Number(values[0]), Number(values[1]))
        values = ["","",""]
        
        
    } else if(display.innerText.includes("%")) {
        values = display.innerText.split("%")
        display.innerText = porc(Number(values[0]), Number(values[1]))
        values = ["","",""]
        
        
    } 
    
    return display.innerText
    
}

function restart() {
    values = ["","",""]
    display.innerText = values[0]
    resetForm.reset()
}



