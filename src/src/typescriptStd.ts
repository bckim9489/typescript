import { timeStamp } from "console";
import { type } from "os";
import { HeapInfo } from "v8";

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

//const ln = (args: string):void => {console.log(`---------${args}-----------`)};
function ln(args:string = "-"):void {
    console.log(`----------${args}----------`);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//함수 선언 시
function add(a: number, b: number) {
    return a + b;
}
const sum: number = add(1, 2);
console.log(sum);

//배열 선언 시
let fruits: string[] = ['apple', 'banana', 'mango'];
let fruits2: Array<string> = ["apple", "banana", "mango"];
//다중 타입 선언
let array: (string | number)[] = ["apple", 1, "banana", 22, "mango", 12, 4122];
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
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7, 6];
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
//type
type Result = {
    success: true,
    value: unknown
} | {
    success: false,
    error: Error
}
//type Annotation 타입표기
/* 
 *  식별자 or 값 뒤에 콜론(:)을 붙여 value : type 형태로 표기
 */
//Boolean
const abc: boolean = true;
//Number
const score : number = 100;
const ieee754Standard: number = 0.1+0.2; //0.300000000000004
console.log(ieee754Standard);
function testType(){
    return {
       function () {
           console.log("ddd");
       }
    };
}
testType();
ln();
//함수 오버로딩
function doubleString(str: string): string {
    return `${str}${str}`;
}
function doubleNumber(num: number): number {
    return (num*2);
}
function doubleBooleanArray(arr: boolean[]): boolean[] {
    return arr.concat(arr);
}
//==============타입 시그니쳐 정의 시======================
function doubleFn(str: string): string;
function doubleFn(num: number): number;
function doubleFn(arr: boolean[]): boolean[];

function doubleFn(arg:any):any {
    if(typeof arg === 'string'){
        return `${arg}${arg}`;
    } else if(typeof arg === 'number') {
        return arg * 2;
    } else if(Array.isArray(arg)){
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
//This type - 시그니처에서 선언시 맨 앞에 해야 됨
interface HTMLElement {
    tagName: string;
    tagCount: number;
    /* ... */
}
interface noThis {
    (this: void): void;
}
interface Handler {
    (this: HTMLElement, event: any, callback: () => void): void;
    //ERROR: (event: any, this: HTMLElement, callback: () => void): void;
}
let cb: any;
const onClick: Handler = function(event, cb){
    console.log(this.tagName);
    cb();
}
/* this 접근 막음
const noThis: noThis = function() {
    console.log(this.a);
}
 */
ln("Generic");
/* 
 *  Generic - 여러 타입에 대해 동작하는 함수를 정의하되, 
 *  해당 함수를 정의할 때는 알 수 없고 사용할 때에만 
 *  알 수 있는 타입 정보를 사용 하도록 함
 */
//타입변수 - PascalCase로 명명
//제너릭 타입 별칭
type MyArray<T> = T[];
type MyNumberArray = MyArray<number>;
const drinks: MyArray<string> = ['Coffee', 'Milk', 'Beer'];
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
function square(value: number, resultString: boolean = false): number | string{
    const squared = value*value;
    if(resultString) {
        return squared.toString();
    }
    return squared;
}
//타입이 자주 쓰이는 경우(긴 문장의 경우, 정렬을 맞춤)
type SquaredType = string 
                 | number 
                 | boolean;
//맨 앞에 파이프 라인 넣어서 해도 됨
type SquaredType2 = 
                 | string 
                 | number 
                 | boolean;


