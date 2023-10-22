// Написать программу, которая через promt считывает число и выводит в консоль число равное 10% от введенного числа

// const numder = +prompt("Enter the number")

// const resalt = (numder * 10)/100

// console.log(resalt)


// Написать программу, которая получает два числа и выводит наименьшее.

// const num1 = +prompt("Enter the number")

// const num2 = +prompt("Enter the number  again")

// if(num1<num2){
//     console.log(num1)
// } else if(num1>num2) {
// console.log(num2)
// }

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// const num = +prompt("Enter the number")

// if(num < 100){
//     console.log("Введеное число меньше 100")
// }else if(num > 100){
//     console.log("Введенное число больше 100")
// }else{
//     console.log("Введенное число равно 100")
// }150

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

const firsName = prompt("Enter your name")
const age = +prompt("Enter your age")

if(age > 18){
    console.log("Hello" + " " + firsName)
}else{
    console.log("Hi," + " " + firsName)
}
