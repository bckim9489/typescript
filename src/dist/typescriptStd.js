"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//함수 선언 시
function add(a, b) {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);
//배열 선언 시
let fruits = ['apple', 'banana', 'mango'];
let fruits2 = ["apple", "banana", "mango"];
//다중 타입 선언
let array = ["apple", 1, "banana", 22, "mango", 12, 4122];
let array2 = ["apple", 1, "banana", 22, "mango", 12, 4122];
let userArr = [
    {
        name: 'Neo',
        age: 1001,
        isValid: true
    },
    {
        name: 'Lewis',
        age: 5,
        isValid: true
    },
    {
        name: 'elsa',
        age: 23,
        isValid: false
    }
];
//[new] 읽기전용 배열로 생성
let arrA = [1, 2, 3, 4];
let arrB = [0, 9, 8, 7, 6];
console.log(arrA[3]);
// Tuple 타입
let userTuple = [1234, 'Heropy', true];
//열거형 Enum
var Week;
(function (Week) {
    Week[Week["zero"] = 0] = "zero";
    Week[Week["one"] = 1] = "one";
    Week[Week["two"] = 2] = "two";
    Week[Week["three"] = 4] = "three";
    Week[Week["four"] = 5] = "four";
    Week[Week["five"] = 6] = "five";
    Week[Week["six"] = 7] = "six"; //7
})(Week || (Week = {}));
//Enum Reverse Mapping(only key : number)
console.log(Week[7]); // six
console.log(Week[2]); // one
//type Annotation 타입표기
/*
 *  식별자 or 값 뒤에 콜론(:)을 붙여 value : type 형태로 표기
 */
//Boolean
const abc = true;
//Number
const score = 100;
const ieee754Standard = 0.1 + 0.2; //0.300000000000004
console.log(ieee754Standard);
//ssoifjaosifhdaosf
function testType() {
    return {
        function() {
            console.log("ddd");
        }
    };
}
testType();
testType();
//# sourceMappingURL=typescriptStd.js.map