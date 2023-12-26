// Object 1

// const person = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// console.log("firstName:", person.firstName);
// console.log("lastName:", person.lastName);
// console.log("age:", person.age);
// console.log("languages:", person.languages.join(","));
// console.log("friends:", person.friends.join("+"));

// Object 2

// const n = 10;
// const key = {};

// for (let i = 1; i <= n; i++) {
//   key[i] = i ** 2;
// }

// console.log(key);

// Object 3

// let sumKeys = 0;
// let sumValues = 0;

// for (let i = 0; i < n; i++) {
//   sumKeys += +Object.keys(res)[i];
//   sumValues += Object.values(res)[i];
// }

// console.log(sumKeys, sumValues);

// Object 4

// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// let objLenght = {};

// for (let i = 0; i < arr.length; i++) {
//   let objString = arr[i];
//   objLenght[objString] = objString.length;
// }

// console.log(objLenght);

// Object 5

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
// let sum = 0;

// for (let i = 0; i < Object.values(obj).length; i++) {
//   sum += Object.values(obj)[i];
// }

// console.log(sum);

// Object 6

// let obj = { abc: 1, 266: 2, d: 5 };
// let res = false;

// const defineObject = (obj) => {
//   for (let i = 0; i < Object.keys(obj).length; i++) {
//     if (Object.keys(obj)[i] == +Object.keys(obj)[i]) {
//       res = false;
//       break;
//     } else {
//       res = true;
//     }
//   }
//   console.log(res);
// };
// defineObject(obj);

// Object 7

// let obj = { a: false, b: 12, c: true, d: 0 };
// let res = {};

// for (const key in obj) {
//   if (!obj[key]) {
//     delete obj[key];
//   }
// }
// console.log(obj);

// Object 8

// let arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// let obj = {};

// for (const el of arr) {
//   obj[el] = 0;
//   for (const ej of arr) {
//     if (el == ej) {
//       obj[el]++;
//     }
//   }
// }
// console.log(obj);

// Object 9

// let arr = "8945476524985629";
// let obj = {};
// let temp = arr.length % 3;

// for (let i = 1; i <= arr.length / 3 + 1; i++) {
//   let start;
//   if (arr.length >= 3 * i) {
//     start = arr.length - 3 * i;
//   } else {
//     start = 0;
//   }
//   let end = arr.length - 3 * (i - 1);
//   if (i == 1) {
//     obj.birlar = arr.slice(start, end);
//   } else if (i == 2) {
//     obj.minglar = arr.slice(start, end);
//   } else if (i == 3) {
//     obj.millionlar = arr.slice(start, end);
//   } else if (i == 4) {
//     obj.milliardlar = arr.slice(start, end);
//   } else if (i == 5) {
//     obj.trillionlar = arr.slice(start, end);
//   } else if (i == 6) {
//     obj.trilliardlar = arr.slice(start, end);
//   }
// }
// console.log(obj);

// Object 10

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   console.log(
//     `${i + 1}. ${books[i].author}ning "${books[i].title}" kitobi ${
//       books[i].alreadyRead ? "o'qilgan" : "o'qilmagan"
//     };`
//   );
// }

// Object 11

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let sum = 0;

// for (let i = 0; i < products.length; i++) {
//   sum +=
//     (products[i].price - (products[i].price * products[i].discount) / 100) *
//     products[i].quantity;
// }
// console.log(sum);

// Object 12

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// let res = [];

// for (const i in obj) {
//   res.push(i);
//   res.push(obj[i]);
// }

// console.log(res);

// Object 13

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let surat = 0;
// let mahraj = 0;
// let res;

// for (let i = 0; i < grades.length; i++) {
//   surat += grades[i].grade * grades[i].kredit;
//   mahraj += grades[i].kredit;
// }

// res = surat / mahraj;

// console.log(res);

// Object 14

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let res = 0;

// for (let i = 0; i < Object.keys(rightAnswers).length; i++) {
//   if (Object.values(rightAnswers)[i] == Object.values(myAnswers)[i]) {
//     res++;
//   }
// }

// console.log(res);

// Object 15

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   obj[Object.keys(obj)[i]] = Object.values(obj)[i] * n;
// }

// console.log(obj);

// Object 16

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// let {
//   name: name,
//   company: {
//     name: companyName,
//     price: companyPrice,
//     founder: {
//       firstName: founderFirstName,
//       lastName: founderLastName,
//       birthDate: founderBirthDate,
//     },
//   },
// } = product;

// console.log(founderBirthDate);

// Object 17

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let procentSum = 0;
// let res;

// for (let i = 0; i < pupils.length; i++) {
//   pupils[i].grade = undefined;
//   pupils[i].isPassed = undefined;
//   procentSum += pupils[i].protcent;
// }

// res = procentSum / pupils.length;

// console.log(res);

// Object 18

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// for (let i = 0; i < pupils.length; i++) {
//   if (pupils[i].protcent >= 90) {
//     pupils[i].grade = 5;
//   } else if (pupils[i].protcent >= 80) {
//     pupils[i].grade = 4;
//   } else if (pupils[i].protcent >= 70) {
//     pupils[i].grade = 3;
//   } else {
//     pupils[i].grade = 2;
//   }
// }

// console.log(pupils);

// object 19

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// for (let i = 0; i < pupils.length; i++) {
//   if (pupils[i].protcent >= 70) {
//     pupils[i].isPassed = true;
//   } else {
//     pupils[i].isPassed = false
//   }
// }

// console.log(pupils);

// object 20

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let count = 0;
// let disCount = 0;

// for (let i = 0; i < pupils.length; i++) {
//   if (pupils[i].protcent >= 70) {
//     count++;
//   } else {
//     disCount++;
//   }
// }

// console.log(`Imtihondan ${count} kishi o'tdi va ${disCount} kishi o'ta olmadi!`);
