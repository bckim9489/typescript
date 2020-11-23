function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//함수 선언 시
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
//배열 선언 시
var fruits = ['apple', 'banana', 'mango'];
var fruits2 = ["apple", "banana", "mango"];
//다중 타입 선언
var array = ["apple", 1, "banana", 22, "mango", 12, 4122];
var array2 = ["apple", 1, "banana", 22, "mango", 12, 4122];
var userArr = [
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
var arrA = [1, 2, 3, 4];
var arrB = [0, 9, 8, 7, 6];
console.log(arrA[3]);
// Tuple 타입
var userTuple = [1234, 'Heropy', true];
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
//# sourceMappingURL=typescriptStd.js.map