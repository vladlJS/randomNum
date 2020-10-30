'use strict'

let randomNum,
    num,
    res;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function stateANumber() {
    return Math.floor(Math.random()*101);
} 

function start(){
    const randomNum = stateANumber();
    console.log(randomNum);
    function game() {
        do{
            num = prompt('Введите число от 1 до 100');
            if (isNaN(num)){
                alert('Вы ввели не число!');
            } else if (num === null) {
                alert('Игра окончена!');
                return 1;
            }
        }while(!isNumber(num) || num > 100 || num < 1);
    function number(){
        if (num > randomNum){
            res = confirm('Ваше число больше');
            if (res){
                game();
            } else alert('Игра окончена!');
        } else if (num <randomNum){
            res = confirm('Ваше число меньше');
            if (res){
                game();
            } else alert('Игра окончена!');
        } else if (num == randomNum){
            alert('Поздравляю, Вы угадали!!!');
        return 1;
        }
    } number();
    } game();
}
start();

