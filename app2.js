'use strict'

let randomNum,
    num,
    res;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function stateANumber() {
    return Math.floor(Math.random()*101);
    //return num;
} 
randomNum = stateANumber();
console.log(randomNum);

function start(){
    function game() {
        do{
            num = prompt('Введите число от 1 до 100');
            if (isNaN(num)){
                alert('Вы ввели не число!');
            }
        }while(!isNumber(num));
    //let num = +prompt('Введите число от 1 до 100');
        function number(){
            if (num > randomNum){
               //alert('Ваше число больше');
                res = confirm('Ваше число больше');
                if (res){
                    game();
                } else alert('Игра окончена!');
            //console.log('Ваше число больше');
            //game();
            } else if (num <randomNum){
                //alert('Ваше число меньше');
                res = confirm('Ваше число меньше');
                if (res){
                    game();
                } else alert('Игра окончена!');
            //console.log('Ваше число меньше');
            //game();
            } else if (num == randomNum){
                alert('Поздравляю, Вы угадали!!!');
                
            //console.log('Вы угадали!');
            return 1;
            }
        }number();
    } game();
}
start();

