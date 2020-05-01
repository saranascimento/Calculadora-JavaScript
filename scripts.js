let display = document.querySelector('#panel')
const allButtons = document.querySelectorAll('input')
const resetForm = document.querySelector('#calculadora')

let values = ["","",""]

function  cleanOne()  {
    
    let subs
        if(values[0] !== "" && values[1] == "" && values[2] == "") {
            
            subs = values[0].substr(0,values[0].length -1) 
            values[0] = subs 
            display.value = values[0]
            ("0limei")
          return display.value

        } else if(values[0] !== ""  && values[1] !== "" && values[2] == "") {
            subsValues = values[1].substr(0,values[1].length -1) 
            subsDisplay = display.value.substr(0,display.value.length -1)
            values[1] = subsValues
            display.value = subsDisplay 
            return display.value
            
        } else if(values[2] && values[1] !== "") {
            subsValues = values[2].substr(0,values[2].length -1) 
            subsDisplay = display.value.substr(0,display.value.length -1)
            values[2] = subsValues
            display.value = subsDisplay 
        
        return display.value

      }

    return display.value 
}

function  buttonDot(num)  {
        
    if(values[0] !== "" && !values[0].includes(".")) {
        values[0] +=num
        display.value = values[0]

    } else if(values[2] !== "" && !values[2].includes(".")) {
        values[2] =num
        display.value += values[2]
    }
    
}

function  buttonOperator(num)  {
    
    if(values[0] !== ""  && values[1] === "" && values[1].length <= 1  ) {
        values[1] = num
        display.value += values[1]
        
    } else if(values[1] !== "" && values[2] === ""){
        let subs = display.value.substr(0,display.value.length -1) //substr 2 de tras para frente (-2) e remove o 1 (ultimo) 1º do final
       
        values[1] = num
        display.value = subs
        display.value += values[1]
    }

    return display.value
}

function  buttonNumber(num){
    
    if(values[0].length <= 7 && values[1] == "") {
        display.value = num
        values[0] += display.value
        display.value = values[0]
    }

    if( values[1] !== "") {
        if(values[2].length <= 7) {
            display.value += num
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
    
    if(display.value.includes("+")) { 
        values = display.value.split("+")
        display.value = add(Number(values[0]), Number(values[1]))
        values = ["","",""]
    
    } else if(display.value.includes("-")) {
        values = display.value.split("-")
        display.value = sub(Number(values[0]), Number(values[1])) 
        values = ["","",""]
        

    } else if(display.value.includes("x")) {
        values = display.value.split("x")
        display.value = mult(Number(values[0]), Number(values[1]))
        values = ["","",""]
        values[0]= display.value

    } else if(display.value.includes("÷")) {
        values = display.value.split("÷")
        display.value = div(Number(values[0]), Number(values[1]))
        values = ["","",""]
        
        
    } else if(display.value.includes("%")) {
        values = display.value.split("%")
        display.value = porc(Number(values[0]), Number(values[1]))
        values = ["","",""]
        
        
    } 
    
    return display.value
    
}

function restart() {
    values = ["","",""]
    resetForm.reset()
}



