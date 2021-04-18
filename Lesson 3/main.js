// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0
while (i<=100) console.log(i++);

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать 
// функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
var tovar1 = {name:'tovar1', price:123 };
var tovar2 = {name:'tovar2', price:321 };
var tovar3 = {name:'tovar3', price:321 };
let bus = [tovar1, tovar2, tovar3];
let sum = 0;
for (var i in bus)
{
	sum += bus[i].price;
}
alert(sum);

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var tovar1 = { name: 'tovar1', price: 123 };
var tovar2 = { name: 'tovar2', price: 321 };
var tovar3 = { name: 'tovar3', price: 321 };
let bus = [tovar1, tovar2, tovar3];

function countBasketPrice(bus) {
    let sum = 0;
    for (var i in bus) {
        sum += bus[i].price;
    }
    return sum;
} 

alert(countBasketPrice(bus));


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(let i=0; i<10; alert(i++)) {};// здесь пусто}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
for (let i = 0; i < 20; i++) {
    str = '';
    for (let j = 0; j <= i; j++)
        str = str + 'x';

    console.log(str);
}
