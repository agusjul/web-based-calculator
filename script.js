let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';



const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click",(event) =>{
        console.log(event.target.value);
    })
})

const calculatorScreen = document.querySelector(".kalkulator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}


//memanggil angka ketika di klik
numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        updateScreen(event.target.value);
    });
})


//fungsi untuk angka 0 tidak di depan
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }
    else{
        currentNumber += number;
    }
}

//input angka di layar
numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

//operator
const operators = document.querySelectorAll(".operator");

//input operator
operators.forEach((operator) =>{
    operator.addEventListener("click",(event) =>{
        inputOperator(event.target.value);
    });
})

// operasi hitung
// Memberikan nilai yang tersimpan di  currentNumber ke prevNumber.
// Berikan operator ke calculationOperator sebagai suatu argument. 
// Kosongkan currentNumber.

const inputOperator = (operator) =>{
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
   
        calculationOperator = operator;
        currentNumber = '0';
    
}


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () =>{
    calculate();
    updateScreen(currentNumber);
})

//menghitung kalkulasi
const calculate = () =>{
    let result = '';
        switch (calculationOperator){
            case "+" : 
                result = parseFloat(prevNumber) +  parseFloat(currentNumber);
                break;
            case "-" :
                result = prevNumber - currentNumber;
                break;
            case "*" :
                result = prevNumber * currentNumber;
                break;
            case "/" :
                result = prevNumber / currentNumber;
                break;
            default :
                break;
        }

        currentNumber = result;
        calculationOperator = '';
    }


//tombol AC
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click",() =>{
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () =>{
    prevNumber ='';
    currentNumber = '0';
    calculationOperator = '';
}

//kalkulasi desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click",(event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    else {
        currentNumber += dot; 
    }
}
