// libary && frenvok  // React(library) Vue/Andular(frenvok)
// frenvok => bu libary lardan tashkil topkan
// klent site rendrin=> React, Vue lar klent site rendrin da ishleydi 
// server site rendrin=> bu ancha dastur tez ishleydi chunki malumatlar serverdan tahlanib keladi
// npm => node package menijment
2
// // class component da  o'zgaruvchilar state orqali yaratiladi (state ni ozgartirish uchun setState foydalaniladi, setState bu
//  qayta chizish) (this bilan ishleydi)
3
// vepek ni asosi vazifasi build file qiberish (build bu Reactni siqib beradi)
5
// setInterval(()=> {}, 1000) => bu har nechidur sekunda birga oshadi
// clearInterval() => setInterval ni toxtatish uchun
6 // props
// props => componentlar ortasida malumot almashish uchun props kerak
// { users?.map(item => {}) } => ?-bu option changed  
// 
7
// const url = window.location.href =>  
8
// setState => o'zida malumot saqleydi
// const [count, setCount] = useState(0)
9
// // useNative() => react-router-dom dam import boladi / page dan page ga otish uchun ishlatiladi / haqat bu function ni ichiga 
// yoziladi function ishlasa ishleydi / button bosilganda shart bajarilgandan kigin ishlash kerak bolsa useNative() ni ishlatadi
// // Context bitta malumot context olinadi va hohlagan joiga malumot uzatsa boladi
// // useEffect() => har yangilaganda ishlab turadi (useEffect()=> layv salkil hook diyiladi)

11
// // Modal (ModalHeader, ModalBody, ModalFooter,) => Modal ni ikki atribut bor (isOpen=> qachan ochilish kerek true/false
//  beriladi, toggle=>bu modal dan tashqari tomonga bosaham yopiladi )


// immutable/o'zgarmas =>
// mutable/o'zgaruvchan =>


// let id1 = Symbol.for("id");
// let id2 = Symbol.for("id");

// console.log(id1 == id2);

// 1
// let obj = {
//     name: "Sudheer",
//     age: "12"
// }

// 2
// let object = new Object();

// 3
// let object = Object.create(null);

// 4  konstruktor funksiyasi bilan rayatish
// function Person(name) {
//     this.name = name;
//     this.age = 21;
// }
// let object = new Person("Sudheer");

// 5
// function Person() {}
// Person.prototype.name = "Sudheer";
// let object = new Person();

// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(1, 3)
// console.log(a);
// console.log(arr);
// let obj = {
//     name: "aefeav",
//     tokens: {
//         a: "aefevs",
//         b: "eacaecce"
//     }
// }

// let a = obj.tokens.a;
// console.log(a);
// async function sleep(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis))
// }

// 23
// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURIComponent(uri);
// console.log(encoded_uri);

// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log(decoded_uri);


// 24
// const memoizAddition = () => {
//     let cache = {};
//     return (value) => {
//       if (value in cache) {
//         console.log("Fetching from cache");
//         return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//       } else {
//         console.log("Calculating result");
//         let result = value + 20;
//         cache[value] = result;
//         return result;
//       }
//     };
//   };
//   // returned function from memoizAddition
//   const addition = memoizAddition();
//   console.log(addition(20)); //output: 40 calculated
//   console.log(addition(20)); //output: 40 cached
function outerFunction() {
  const outerVariable = 12;

  function innerFunction() {
    console.log(outerVariable); // outerVariable ni chaqiramiz
  }

  // innerFunction ni qaytaradi
  return innerFunction;
}

// // outerFunction ni chaqiradi
// const innerFunc = outerFunction();

// // innerFunction ni chaqiradi
// innerFunc(); // Chiqishi: I am from the outer function
outerFunction()()

