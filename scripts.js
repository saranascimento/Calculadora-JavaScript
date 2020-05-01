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
            console.log("0limei")
            console.log(values)
          return display.value

        } else if(values[0] !== ""  && values[1] !== "" && values[2] == "") {
            subsValues = values[1].substr(0,values[1].length -1) 
            subsDisplay = display.value.substr(0,display.value.length -1)
            values[1] = subsValues
            display.value = subsDisplay 
            
            
            console.log("1limei")
            console.log(values)
            return display.value
            
        } else if(values[2] && values[1] !== "") {
            subsValues = values[2].substr(0,values[2].length -1) 
            subsDisplay = display.value.substr(0,display.value.length -1)
            values[2] = subsValues
            display.value = subsDisplay 
            console.log("2limei")
            console.log(values)
        return display.value

      }
      

    console.log(values)
    return display.value 
}

function  buttonDot(num)  {

    // Verificar
    // for(let count = 0; count === values.length; count++){
    //     if(values[count] === "" || values[count].includes(".")) {
    //         return false
            
    //     }else if(values[count] === 0 || values[count] === 2){
    //         values[count] +=num
    //         display.value += values[count]
    //         console.log(44441)
    //     }
    // }
    
    
    if(values[0] === "" || values[0].includes(".")) {
        return false

    }else if(values[0]){
        values[0] +=num
        display.value = values[0]
        console.log(display.value)
        
    } 


    // Verificar
    // if(values[2] === "" || values[2].includes(".")) {
    //     return false
        
    // }else if(values[2]){
    //     values[2] +=num
    //     display.value += values[2]
    //     console.log(display.value)
    // }


    
}

function  buttonOperator(num)  {
    
    if(values[0] !== ""  && values[1] === "" && values[1].length <= 1  ) {
        values[1] = num
        display.value += values[1]
        console.log(values)
        
    } else if(values[1] !== "" && values[2] === ""){
        let subs = display.value.substr(0,display.value.length -1) //substr 2 de tras para frente (-2) e remove o 1 (ultimo) 1º do final
       
        values[1] = num
        display.value = subs
        display.value += values[1]
        console.log(values)
    }

    return display.value
}

function  buttonNumber(num){
    
    if(values[0].length <= 7 && values[1] == "") {
        display.value = num
        values[0] += display.value
        display.value = values[0]
        console.log("1º") 
        console.log(values) 
    }

    if( values[1] !== "") {
        if(values[2].length <= 7) {
            display.value += num
            values[2] += num
            console.log("2º") 
        console.log(values) 
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
        display.value = add(Number(values[0]), Number(values[1])).toFixed(2) 
        values = ["","",""]
    
    } else if(display.value.includes("-")) {
        values = display.value.split("-")
        display.value = sub(Number(values[0]), Number(values[1])).toFixed(2) 
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
    
    console.log(values) 
    return display.value
    
}

function restart() {
    values = ["","",""]
    resetForm.reset()
}
console.log(values) 


