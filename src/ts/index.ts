require('../../styles/main.scss'); // import and work
// require('../../assets/img.JPG'); // import and created
// require('../../assets/regular.ttf') // import and created


import { Multiply, Subtraction, Addition, Division, final, clearFinal } from './function';
// variables
let inputA = window.document.getElementById('input-a') as HTMLInputElement;
let inputB = window.document.getElementById('input-b') as HTMLInputElement;
let btnMul = window.document.getElementById('multiply') as HTMLButtonElement;
let btnSub = window.document.getElementById('subtraction') as HTMLButtonElement;
let btnAdd = window.document.getElementById('addition') as HTMLButtonElement;
let btnDiv = window.document.getElementById('division') as HTMLButtonElement;
let btnEqual = window.document.getElementById('equal') as HTMLButtonElement;
let result = window.document.getElementById('strong') as HTMLSpanElement;


let operator: string = 'null';


btnMul.addEventListener('click', function (): void {
  operator = 'multiply';
})

btnSub.addEventListener('click', function (): void {
  operator = 'subtraction';
})

btnAdd.addEventListener('click', function (): void {
  operator = 'addition';
})

btnDiv.addEventListener('click', function (): void {
  operator = 'division';
})

btnEqual.addEventListener('click', function (): void {
  if(operator === 'multiply') {
    Multiply(Number(inputA.value), Number(inputB.value));
    inputA.value = '';
    inputB.value = '';
    console.log('final :', final);
    clearFinal()
  }
  if(operator === 'subtraction') {
    Subtraction(Number(inputA.value), Number(inputB.value));
    inputA.value = '';
    inputB.value = '';
    console.log('final :', final);
    clearFinal()
  }
  if(operator === 'addition') {
    Addition(Number(inputA.value), Number(inputB.value));
    inputA.value = '';
    inputB.value = '';
    console.log('final :', final);
    clearFinal()
  }
  if(operator === 'division') {
    Division(Number(inputA.value), Number(inputB.value));
    inputA.value = '';
    inputB.value = '';
    console.log('final :', final);
    clearFinal()
  }
})





