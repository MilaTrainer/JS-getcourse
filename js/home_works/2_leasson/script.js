'use strict';
    // Задание 1
    // Перепишите код с использованием тернарного оператора
    // let country = 'Sweden';
    // let access;
    // if (country == 'Sweden') {
    // access = true;
    // } else{
    // access = false;
    // }

    // let country = 'Sweden';
    // let access = (country === 'Sweden') ? true : false;

    // Задание 2
    // 2) - нужно вывести один итоговый результат, а не 10 результатов :)

    // Сейчас логика решения совсем иная, не по заданию. Вы как бы в голове вычислили результат, а нужно сделать это с помощью программы. Прошлое решение было лучше, но нужно устранить баг. Подскажу. То, что не нужно повторять, не пишется в теле цикла. Зачем вам на каждом круге цикла выводить что-то в консоль? нужно вывести один результат. когда цикл уже отработает.

    // Создать переменную и записать в нее число, например 10.

    // 10 раз увеличить значение этой переменной на 1. Итоговый результат вывести в консоль.

    // let num = 10;

    // for ( let i = num; i <= 20; i = i + 1 ){
    //     num++;
    // }
    // console.log(num);





    // Задание 3

    // 3) ОБА действия нужно повторять 5 раз. Посмотрите внимательно условие: должно получиться 5 запросов и 5 результатов в консоли. У вас 5 запросов, а результат один.

    // Увеличивая счетчик цикла на 2, нужно 5 раз выполнит след. действия:

    // - запросить у пользователя ввод числа

    // - проверить, равно ли это число 10. Если равно, вывести в консоль "Равно 10". Иначе вывести "Не равно 10"

    // В итоге должно получиться 5 запросов и 5 результатов в консоли.



    // for ( let i = 1; i <= 10; i = i + 2 ){
    //     let num = +prompt('Please enter a number')
    //     if ( num === 10){
    // console.log ('равно 10')
    //     }
    //     else{
    //         console.log('Не равно 10')
    //     }
    //     // result = (num === 10) ? console.log('Равно 10') : console.log('Не равно 10');
    // };


    // 2 вариант с функцией
    // function getNumber() {
    //     for (let i = 1; i <= 10; i = i + 2) {
    //         let number = +prompt('Number');
    //         if (number == 10) {
    //             console.log('answer 10');
    //         }
    //         else {
    //             console.log('its fals');
    //         }
    //     } return number;
    // }

    // getNumber();


    // Задание 4
    // стр.58 - console.log (`${i * i}`)} - зачем заворачивать это выражение в кавычки? Наш результат - число, пусть таким и выводится: console.log (i * i)}
    // Основное решение правильное, а вариант со звездочкой видимо поняли не правильно. У вас всегда будет выводиться 100 чисел, prompt получился бессмысленным.

    // Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
    // ** Задавать количество чисел, ,которые нужно вывести при помощи функции prompt. 


    // let userNumber = +prompt('Пожалуйста введите количество чисел');
    // if (userNumber <= 99) {
    //     for (let i = 0; i <= userNumber; i = i + 1) {
    //         console.log(i * i)
    //     }
    // }
    // else {
    //     alert('Пожалуйста введите количество чисел от 0 до 100');
    // }
 

    // 2вариант с функцией
// function showNumber(num) {
//     for (let i = 0; i <= num; i++) {
//         if (num > 100) {
//             console.log(i * i);
//         }
//     }
// }

// let number = +prompt('Number');
// showNumber(number);
    // Задание 5
    // хорошо, но FizzBuzz у вас не выводится, этот случай не предусмотрели.
    // 5) FizzBuzz у вас выводится на числах, кратных 2 - такого в задании нет.

    // Напишите программу, которая выводит в консоль числа от 1 до 100.
    // При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»


    // for (let i = 1; i < 100; i++) {
    //     if ( i % 5 && i % 3 === 0 ) {
    //         console.log ('FizzBuzz')  
    //     }
    //     else if( i % 5 === 0 ) {
    //         console.log ('Buzz')
    //         //  не могу понять в чем ошибка, убрала ;
    //     }
    //     else if( i % 3 === 0 ) {
    //         console.log('Fizz')
    //     }
    //     else{
    //         console.log(i)
    //     }
    // }


    // Задание 6

    // Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    // for (let i = 0; i < 3; i++) {
    // alert( `number ${i}!` );
    // // }
    // let i = 0;
    // while(i < 3){
    //     i += 1;
    //     alert( `number ${i}` );
    // }


    // Задание 7
    // Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы - min и max).

    function getMultiplication(min, max) {
        let result = 0
        for (let i = min; i <= max; i++) {
            result = i * i
        }
        return result;
    }

    console.log(getMultiplication(0, 100));

    // Задание 8
    // 8) по заданию должна получиться строка вида "rgb(10,55,250)" (так задается цвет в CSS). Оба решения такую строку не дают.

    // Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

    // Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
    // function getRandomInteger(min, max) {
    // return Math.floor(Math.random() * (max - min)) + min;
    // }
    // Подсказки: 

    // - Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 

    // - Одна функция может вызывать другую функцию

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomRGB() {
        let r = getRandomInteger(0, 255);
        let g = getRandomInteger(0, 255);
        let b = getRandomInteger(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
    console.log(getRandomRGB());

    // Задание 9

    // Написать функцию, которая принимает целое число n.   

    // Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.

    // Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.


    // Пример, при запуске функции с параметром 3:

    // "1 integer"
    // "1.5 decimal"
    // "2 integer"
    // "2.5 decimal"

    function getNumbers(n) {
        for (let i = 0; i < n; i = i + 0.5) {
            if (i % 1 == 0) {
                console.log(`${i} integer`)
            }
            else {
                console.log(`${i} decimal`)
            }
        }
    }

    // getNumbers (3)

    // Задание 10
    // было в первом уроке 


    // Задание 11

    // по заданию функция calcPrice должна принимать только один параметр - кол-во дней. Всё остальное происходит внутри функции.

    // Написать функцию calcPrice, которая рассчитывает и выводит в консоль стоимость аренды авто на кол-во дней, которое приходит в функцию как параметр.

    // День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20
    // 

    // const autoCost = 40 
    // let day= +prompt('Введите количестыо дней аренды авто');
    // let discount = 0;
    // if (day >= 7){
    //     discount = 50;
    // }
    // else if (day >= 3) {
    //     discount = 20;
    // }
    // else{
    //     discount = 0;
    // }
    //я просто скопировала задачу с 1 урока и опираясь на нее , добавила функцию

    console.log(day * autoCost - discount + '$');
    function calcPrice(num2) {
        let result = (autoCost * num2) - discount;
        {
            return result;
        }
    }
    console.log(`price без скидки: ${calcPrice(day)}$`);
