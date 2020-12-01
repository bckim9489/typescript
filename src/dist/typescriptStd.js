"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
//const ln = (args: string):void => {console.log(`---------${args}-----------`)};
function ln(args = "-") {
    console.log(`----------${args}----------`);
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
function testType() {
    return {
        function() {
            console.log("ddd");
        }
    };
}
testType();
ln();
//함수 오버로딩
function doubleString(str) {
    return `${str}${str}`;
}
function doubleNumber(num) {
    return (num * 2);
}
function doubleBooleanArray(arr) {
    return arr.concat(arr);
}
function doubleFn(arg) {
    if (typeof arg === 'string') {
        return `${arg}${arg}`;
    }
    else if (typeof arg === 'number') {
        return arg * 2;
    }
    else if (Array.isArray(arg)) {
        return arg.concat(arg);
    }
}
const num = doubleFn(3);
const str = doubleFn('ab');
const arr = doubleFn([true, false]);
//ERROR: const err = doubleFn([1, 2, 3]);
console.log(num);
console.log(str);
console.log(arr);
ln('This 타입');
let cb;
const onClick = function (event, cb) {
    console.log(this.tagName);
    cb();
};
/* this 접근 막음
const noThis: noThis = function() {
    console.log(this.a);
}
 */
ln("Generic");
const drinks = ['Coffee', 'Milk', 'Beer'];
//제너릭 함수
/*
function 함수명<타입 변수>(인자 타입): 반환타입{
//  함수본문
}
function getFirstElem<T> (arr: T[]): T {
//  함수본문
}
const languages: string[] = ['TypeScript', 'JavaScript'];
const language = getFirstElem<string>(languages); //이때 language의 타입은 문자열
*/
//Result: 여러 타입에 대해 동작하는 요소를 정의하되, 
//        해당 요소를 사용할 때가 되어야 알 수 있는 타입 정보를 정의에 사용하는 것
ln("유니온타입");
//Union Type
function square(value, resultString = false) {
    const squared = value * value;
    if (resultString) {
        return squared.toString();
    }
    return squared;
}
ln("인터섹션");
/* OR
type SportsMan =
               & Human
               & Soccer
               & Basketball;
*/
const hancock = {
    breath: false,
    jumpPower: 100,
    kickPower: 120
};
const doa = (name) => { console.log(name.breath ? "Live" : "Dead"); };
doa(hancock);
ln('interface');
const author = { name: '이름', height: 210 };
const getUserName = function (u) {
    return u.name;
};
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//const user: MyResponse<User> = await getUserApiCall(useerId);
ln("동적속성타입- 색인 가능 타입");
const users = [
    { name: 'abc', height: 176, age: 28 },
    { name: 'ddbc', height: 11 }
];
;
const nameHeightMap = {};
users.map(user => {
    //색인 가능 타입 필요
    //nameHeightMap[user.name] = user.height;
});
const h = nameHeightMap['dodo']; //이 시점에서 h의 타입은 number | undefined
if (h !== undefined) {
    //이 시점에서 h의 타입은 number
    console.log(h.toString());
}
ln("인터페이스 확장");
//인터페이스 확장
//# sourceMappingURL=typescriptStd.js.map