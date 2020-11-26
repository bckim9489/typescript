//[ECMAScript] 나머지 연산자 Rest Operator
const [a, ...restArr] = [1,2,3,4,5,6,7];
//[ECMAScript] 전개연산자
function logThing(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const arr = [1,2,3];
logThing(...arr);
logThing(...[1,2,3]);

const {x, y,...z}= {
    x:1,
    y:2,
    a:3,
    b:4
};
x; // 1
y; // 2
z; // {a:3, b:4};
const n = { x, y, ...z};
n; // { x:1, y:2, {a:3, b:4}}
//[ECMAScript2015] Trailing Comma - 객체리터럴
var obj = {
    foo: "bar",
    baz: "qwerty",
    age: 42,
};
//[ECMAScript2017] Trailing Comma - 매개변수 목록
function poo(p,){};
//Lambda도 가능
(p,) => {};
//class 가능
class C {
    one(a,){}//,
    two(a,b, ){}//,
}
//Rest 에는 불가능
//function f(...p,){}
//구조 분해 할당에도 가능
//[n, m,]=[1,2];
/*JSON에서는 불가(ES5이전 문법을 기초)
 *WebView - 함수 안에서 Trailing Comma 불가
 *IE9 - 함수 안에서 Trailing Comma 불가
*/

//[ES6]단축메소드명
//old
const objWithFunction = {
    f: function () {
        console.log(1);
    },
    f: function() {

    }
}
//new (ES6~)
const objWithFunction2 = {
    f(){
        console.log(1);
    }
}

//[ES6]계산된 속성이름
const name = 'Bernard';
const obj1 = {[name]: 'Werber'};
console.log(obj); //{Bernard: 'Werber'}
const obj3 = {['ab'+'c']:3};
console.log(obj3) //{abc: 3}

//[ES6]기본 매개변수 지원
function userDefault(a=1,b=1,c=1){
    console.log([a,b,c]);
}
userDefault(0,0);
//[ES6]화살표 함수
console.log("----------------");
const obj2 = {
    a: 1,
    normalFunc: function() { console.log(this); },
    arrowFunc: () => { console.log(this); },
};
const { normalFunc, arrowFunc } = obj2;
obj2.normalFunc(); 
/* 
{ 
   a: 1,
   normalFunc: [Function: normalFunc],
   arrowFunc: [Function: arrowFunc] 
}
*/
normalFunc(); 
// undefined

obj2.arrowFunc(); // (global object)
arrowFunc(); // (global object)

//인자가 한개이면 괄호 생략가능
const vx = args => {console.log(args)};
console.log(vx);
//한줄 표현식이면 대괄호 생략 가능
const isOdd = n => (n%2===1);
console.log(isOdd(3));

//템플릿 리터럴
const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;
console.log(template);
//멀티라인 문자열
const template2 = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;
console.log(template2);
//문자열 치환
const first = 'Ung-mo';
const last = 'Lee';
console.log(`My name is ${first} ${last}.`);
console.log(`1 + 1 = ${1 + 1}`);


