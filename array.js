function Calculation(arr1) {
    var size = arr1.length
    console.log(`Array is:- [${arr}]`)
    var Sum = 0
    for (let i = 0; i < size; i++) {
        Sum = Sum + arr1[i]
    }
    var avg = Sum / size
    console.log(`Sum of Elements:- ${Sum}`)
    console.log(`Avg of Elements:- ${avg}`)
}

function EvenOdd() {
    var arr = [1, 2, 3, 4, 5, 6]
    let arr1 = [11, 22, 33, 44, 55, 66]
    let size1 = arr1.length
    console.log(`Array is:- [${arr}]`)
    var size = arr.length
    let Even = [], odd = [], EvenIndex = [], oddIndex = [];
    for (let i = 0; i < size; i++) {
        if (arr[i] % 2 == 0) {
            Even.push(arr[i])
        }
        else {
            odd.push(arr[i])
        }
        if (i % 2 == 0) {
            EvenIndex.push(arr1[i])
        }
        else {
            oddIndex.push(arr1[i])
        }
    }
    console.log(`Even Number on index:-[${EvenIndex}]`)
    console.log(`Odd Number on index:-[${oddIndex}]`)
    console.log(`Even Numbers are [${Even}]`)
    console.log(`Odd Numbers are [${odd}]`)
}

function SearchElements(targetValue) {
    let arr = [5, 8, 2, 7, 9];
    console.log(`Array is:- [${arr}]`)
    const elementIndex = arr.findIndex(element => element === targetValue);

    if (elementIndex != -1) {
        console.log(`Element Index is:- ${elementIndex}`);
    } else {
        console.log(`Not in array`);
    }
}
function ReverseAnArray() {
    let arr = [1, 2, 3, 4]
    let ReverseArray = [...arr].reverse()
    console.log(`OriGinal Array [${arr}]`)
    console.log(`Reverse Array [${ReverseArray}]`)
}

function PositiveNegative() {
    let arr = [-3, 5, -2, 8, -1, 6]
    let arr1 = [1, 0, 5, 0, 7, 0]
    let zeroCoount = 0
    console.log(`Array is:- [${arr}]`)
    let size = arr.length
    let Posative = [], Negative = []
    for (let i = 0; i < size; i++) {
        if (arr[i] > 0) Posative.push(arr[i])
        else if (arr[i] < 0) Negative.push(arr[i])
        if (arr1[i] === 0) zeroCoount++

    }
    console.log(`Posative Numbers:- [${Posative}]`)
    console.log(`Totel zero in array is:- ${zeroCoount}`)
    console.log(`Negative Numbers:- [${Negative}]`)
}

function CoppyArray() {
    let arr0 = [10, 20, 30, 40]
    let arr1 = []
    let size = arr0.length
    for (let i = 0; i < size; i++) {
        arr1.push(arr0[i])
    }
    console.log(`Coppy Array is [${arr1}]`)
    console.log(`Totel Elements :- ${size}`)
    console.log(`First Element in array is :- ${arr1[0]}`)
    console.log(`Last Element :- ${arr1[size - 1]}`)
}

function swap(arr) {
    let size = arr.length
    console.log(`Array Before swaping:-[${arr}]`)
    let firstEle = arr[0]
    let lastEle = arr[size - 1]

    firstEle = firstEle + lastEle
    lastEle = firstEle - lastEle
    firstEle = firstEle - lastEle

    arr[0] = firstEle
    arr[size - 1] = lastEle
    console.log(`After Swaping:- [${arr}]`)
}

var arr = [12, 45, 2, 67, 34]
console.log(`Array is:- [${arr}]`)
var size = arr.length
let secondLarge,secondMin
let max = arr[0] ,min = arr[0]
for (let i = 0; i < size; i++) {
    if (max < arr[i]) {
        max = arr[i]
        secondLarge = arr[i]
    } 
    else if(arr[i] <secondLarge<max){
        secondLarge = arr[i]
    }

}
for (let i = 0; i < size; i++) {
    if (min > arr[i]) {
        min = arr[i]
        secondMin = arr[i]
    }
    if((arr[i] > secondMin) > min){
        secondMin = arr[i]
    }
}
console.log(`Second Largest Number is:- ${secondLarge}`)
console.log(`Second Minimum number is:- ${secondMin}`)
console.log(`Max Array Number is :- ${max}`)
console.log(`Min Array Number is :- ${min}`)
let arr1 = [10, 20, 30, 40]
Calculation(arr1);
ReverseAnArray();
EvenOdd();
SearchElements(5);
CoppyArray();
PositiveNegative();
swap(arr);
