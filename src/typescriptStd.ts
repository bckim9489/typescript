function printLabel(labeledObj: { label:string}){
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//함수 선언 시
function add(a: number, b: number){
    return a+b;
}
const sum: number = add(1, 2);
console.log(sum);

//배열 선언 시
let fruits: string[] = ['apple', 'banana', 'mango'];
let fruits2: Array<string> = ["apple", "banana", "mango"];
//다중 타입 선언
let array:(string | number)[] = ["apple", 1, "banana", 22, "mango", 12, 4122];
let array2: Array<string | number> = ["apple", 1, "banana", 22, "mango", 12, 4122];
//인터페이스 타입, 커스텀 타입
interface IUser {
    name: string,
    age: number,
    isValid: boolean
}
let userArr: IUser[] = [
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
let arrA: readonly number[] = [1,2,3,4];
let arrB: ReadonlyArray<number> = [0,9,8,7,6];
console.log(arrA[3]);

// Tuple 타입
let userTuple: [number, string, boolean] = [1234, 'Heropy', true];

//열거형 Enum
enum Week {
    zero, //0
    one, //1
    two, //2
    three = 4, //4 
    four, //5
    five,  //6
    six //7
}
//Enum Reverse Mapping(only key : number)
console.log(Week[7]); // six
console.log(Week[2]); // one

