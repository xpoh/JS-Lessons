//1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - т.к. сначала а инкрементируется на 1, потом присваивание
d = b++; alert(d);           // 1 - т.к. сначала присваивание, потом инкрементация b
c = (2+ ++a); alert(c);      // 5 - т.к. сначала а инкрементируется, становится 3, потом сумма +2 
d = (2+ b++); alert(d);      // 4 - т.к. сначала d = b+2; потом b++ =  
alert(a);                    // 3 - т.к. инкрементировалась 2 раза
alert(b);                    // 3 - т.к. инкрементировалась 2 раза
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // равно 5 т.к. сначала а=a*2 = 4; потом +1 = 5 

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
*/
var a = 5;
var b = 7;
if ((a>0)&&(b>0))
{
    alert(a-b);
}
if ((a<0)&&(b<0))
{
    alert(a*b);
}
if (((a<0)&&(b>=0))||((a>=0)&&(b<0)))
{
    alert(a+b);
}

// ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
var a=7
switch (a) {
    case 0: alert(0);
    case 1: alert(1);
    case 2: alert(2);
    case 3: alert(3);
    case 4: alert(4);
    case 5: alert(5);
    case 6: alert(6);
    case 7: alert(7);
    case 8: alert(8);
    case 9: alert(9);
    case 10: alert(10);
    case 11: alert(11);
    case 12: alert(12);
    case 13: alert(13);
    case 14: alert(14);
    case 15: alert(15);    
}

// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
function sum(a, b) {
    return a+b;
}
function dif(a, b) {
    return a-b;
}
function div(a, b) {
    return a/b;
}
function mux(a, b) {
    return a*b;
}
alert(mux(2,3));

// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
function mathOperation(arg1, arg2, operation)
{
    var ans;
    switch (operation) {
        case '+': ans = sum(arg1, arg2); break;
        case '-': ans = dif(arg1, arg2); break;
        case '*': ans = mux(arg1, arg2); break;
        case '/': ans = div(arg1, arg2); break;        
    }
    return ans;    
}
alert(mathOperation(3,6,'+'));

// ### 7. *Сравнить null и 0. Попробуйте объяснить результат. 
 alert(null==0); // ответ false т.к. это разные сущности ноль - это нормальное числовое значение, а null это отсутвствие значения

// ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow){
    if (pow == 0) return 1;
    else
        if (pow == 1) return val;
        else
            return val * power(val, pow - 1);
}
alert(power(2, 8));
