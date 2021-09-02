let a=()=>
{
const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
document.write('Date: ' + n);
document.write('Time: ' + time);
}
a();
document.write("<br>");


let b=(year)=>
{

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year');
    } else {
        document.write(year + ' is not a leap year');
    }
}

b(2001);
document.write("<br>");

let c=()=>
{
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}

const formattedDate1 = month + '/' + day + '/' + year;
document.write( 'formate of month:'+formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
document.write(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
document.write(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
document.write(formattedDate4);
}
c();
document.write("<br>");

let d=()=>
{
const date = new Date();

const n = date.toDateString();

const time = date.toLocaleTimeString();

document.write('Date: ' + n);

document.write('Time: ' + time);
}
d();
document.write("<br>");
let e=()=>
{
const d1 = new Date();
const d2 = new Date();
const compare1 = d1 < d2;
document.write(compare1);

const compare2 = d1 > d2;
document.write(compare2);

const compare3 = d1 <= d2;
document.write(compare3);

const compare4 = d1 >= d2;
document.write(compare4);

const compare5 = d1.getTime() === d2.getTime();
document.write(compare5);

const compare6 = d1.getTime() !== d2.getTime();
document.write(compare6);
}

e(2/9/2021,3/9/2021);
document.write("<br>");

// let f=()=>
// {
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
// let x = setInterval(function() {
//     let now = new Date().getTime();
//     let timeLeft = countDownDate - now;
//     const days = Math.floor( timeLeft/(1000*60*60*24) );
//     const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
//     const minutes = Math.floor( (timeLeft/1000/60) % 60 );
//     const seconds = Math.floor( (timeLeft/1000) % 60 );
//     document.write(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//     if (timeLeft < 0) {
//         clearInterval(x);
//         document.write('CountDown Finished');
//     }
//     }, 2000);
// }
// f(2000);
// let g=()=>
// {
// const message = 'hello world';

// const number = 10;

// function multiplyNumbers(a, b) {
//     return a * b;
// }
// export { message, number, multiplyNumbers };
// import { message, number, multiplyNumbers } from './modules.js';

// document.write(message); // hello world

// document.write(number); // 10

// document.write(multiplyNumbers(3, 4)); // 12
// document.write(multiplyNumbers(5, 8)); // 40
// }
// g();
document.write("<br>");

let h=()=>
{
    
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));


const a = Math.floor(Math.random() * (max - min + 1)) + min;

document.write(`Random value between ${min} and ${max} is ${a}`);
}
h(1,30);
document.write("<br>");

let i=()=>
{
const url1 = window.location.href;
const url2 = document.URL;
document.write(url1);
document.write(url2);
}
i();
document.write("<br>");

let validateEmail=(email_id)=>
{
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        document.write('The email address is valid');
    }
    else {
        document.write('The email address is not valid');
    }
}
validateEmail("khadeejamp000@gmail.com");
document.write("<br>");
let k=()=>
{
class Stack {
    constructor() {
        this.items = [];
    }
    
    add(element) {
        return this.items.push(element);
    }
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
document.write(stack.items);document.write("<br>");


document.write(stack.peek());document.write("<br>");


document.write(stack.isEmpty());document.write("<br>");


document.write(stack.size());document.write("<br>");


stack.clear();
document.write(stack.items);document.write("<br>");

}
k();
document.write("<br>");

let l=()=>
{
    // program to implement queue data structure

class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
document.write(queue.items);document.write("<br>");


document.write(queue.peek());document.write("<br>");


document.write(queue.isEmpty());document.write("<br>");


document.write(queue.size());document.write("<br>");


queue.clear();
document.write(queue.items);document.write("<br>");

}
l();
document.write("<br>");

let m=(x)=>
{


    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            document.write(` is integer.`);
        }
        else {
            document.write(`is a float value.`);
        }
    
    } else {
            document.write(` is not a number`);
    }
}

m(4.5);
document.write("<br>");
let n=()=>
{

const img = new Image();

// img .src="public/images/download.jpg";


img.onload = function() {
  document.write('width ' + this.width)
  document.write('height '+ this.height);
}
}
n();
let o=()=>
{
const d1 = new Date();
document.write(d1);

const result = d1.getTime();
document.write(result);
}
o();
