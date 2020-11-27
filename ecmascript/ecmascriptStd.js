/*
 * 
 */
const ln = args => { if (!args) { console.log(`-------------------------`) } else { console.log(`------------${args}-------------`) } };

//[ECMAScript] 나머지 연산자 Rest Operator
const [a, ...restArr] = [1, 2, 3, 4, 5, 6, 7];
ln();
//[ECMAScript] 전개연산자
function logThing(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const arr = [1, 2, 3];
logThing(...arr);
logThing(...[1, 2, 3]);

const { x, y, ...z } = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
};
x; // 1
y; // 2
z; // {a:3, b:4};
const n = { x, y, ...z };
n; // { x:1, y:2, {a:3, b:4}}
ln();
//[ECMAScript2015] Trailing Comma - 객체리터럴
var obj = {
    foo: "bar",
    baz: "qwerty",
    age: 42,
};
//[ECMAScript2017] Trailing Comma - 매개변수 목록
function poo(p,) { };
//Lambda도 가능
(p,) => { };
//class 가능
class C {
    one(a,) { }//,
    two(a, b,) { }//,
}
//Rest 에는 불가능
//function f(...p,){}
//구조 분해 할당에도 가능
//[n, m,]=[1,2];
/*JSON에서는 불가(ES5이전 문법을 기초)
 *WebView - 함수 안에서 Trailing Comma 불가
 *IE9 - 함수 안에서 Trailing Comma 불가
*/
ln();
//[ES6]단축메소드명
//old
const objWithFunction = {
    f: function () {
        console.log(1);
    },
    f: function () {

    }
}
//new (ES6~)
const objWithFunction2 = {
    f() {
        console.log(1);
    }
}
ln();
//[ES6]계산된 속성이름
const name = 'Bernard';
const obj1 = { [name]: 'Werber' };
console.log(obj); //{Bernard: 'Werber'}
const obj3 = { ['ab' + 'c']: 3 };
console.log(obj3) //{abc: 3}
ln();
//[ES6]기본 매개변수 지원
function userDefault(a = 1, b = 1, c = 1) {
    console.log([a, b, c]);
}
userDefault(0, 0);
ln();
//[ES6]화살표 함수
console.log("----------------");
const obj2 = {
    a: 1,
    normalFunc: function () { console.log(this); },
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
const vx = args => { console.log(args) };
console.log(vx);
//한줄 표현식이면 대괄호 생략 가능
const isOdd = n => (n % 2 === 1);
console.log(isOdd(3));
ln();
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

ln();
//[ES5] 원소순회 forEach - 제어 불가능
const langs = ['TypeScript', 'JavaScript', 'Python'];
langs.forEach(lang => {
    console.log(lang);
});
//[ES6] 원소순회 for-of
/* 순회 순서가 항상 같음
 * 원소의 키에 해당하는 문자열이 바인딩
 * 원소 실제 값
 * break나 continue 등으로 흐름제어 가능
 * 이터러블(iterable) 프토로콜을 구현한(순회가능한) 객체에서만 됨
 */
const languagues = ['javaScript', 'TypeScript', 'rust'];
for (const elem of languagues) {
    if (!elem.includes('Script')) {
        break;
    }
    console.log(elem);
}
ln();
/* [Check] Iterator - 반복자
 * 객체가 특정 조건을 만족하는 next() 메소드를 가질 때, 
 * 이러한 객체를 이터레이터(반복자, Iterator)라 부른다.
 * 이 때, next() 메소드는 해당 객체의 요소들을 어떤 방식과 어떤 순서로 순회할지를 정의하며,
 * 호출 될 때마다 아래 두 가지 값을 담은 객체를 반환해야 한다.
 */
//이터레이터 예
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: () => {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
        }
    };
}
const iter = makeIterator([1, 2, 3]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
ln();
//iterable protocol
/*
 * 어떤 객체가 Symbol.iterator의 키의 값으로 메소드를 갖고, 
 * 해당 메소드를 실행했을 때 이터레이터 인스턴스가 반환될 때
 * 그 객체가 이터러블 프로토콜을 구현한다, 또는 순회 가능하다고 한다. 
 */
function makeIterator2(array) {
    var nextIndex = 0;
    return {
        next: () => {
            return nextIndex < array.length
                ? { value: array[nextIndex++], done: false }
                : { done: true };
        }
    };
}
const iterableObj = {
    [Symbol.iterator]() {
        return makeIterator2([1, 2, 3]);
    }
};
for (const elem of iterableObj) {
    console.log(elem);
}
console.log(...iterableObj);
ln();
//Promise - 비동기 처리
function getRandomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const destiny = Math.random();
            if (destiny > 0.5) {
                resolve();
            } else {
                reject();
            }
        })
    });
}
// than() - 비동기 작업 완료 resolve()가 호출 된 경우
// catch() - 비동기 작업 거부 reject()가 호출 된 경우
ln();
//[ES2017] Async / Await
// Async(비동기)을 지원하는 환경에서 함수 선언시 일시적으로 Promise로 감싸짐
async function returnTheAnswer() {
    return 42;
}
const implicitlyReturnedPromise = returnTheAnswer();
console.log(implicitlyReturnedPromise instanceof Promise);  //true
implicitlyReturnedPromise.then(answer => console.log(answer));  //42

async function asyncExample() {
    const a = setTimeout(() => { 42 }, 3000);
    //const a = await new Promise(resolve => {setTimeout(()=>resolve(42), 3000)});
    const b = await 42;
    let c;
    try {
        c = await new Promise((_, reject) => { reject("Error on await") });
    } catch (e) {
        console.log(e);
    }
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
asyncExample();

ln('끝');