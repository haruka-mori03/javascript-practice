//⚪︎const,let等の変数宣言⚪︎
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// //letは再宣言が不可能
// let val2 = "let変数を再宣言"

// const val3 ="const変数";
// console.log(val3);

//conat変数は上書きが不可能
// val3 = "const変数を上書き";

// const val3

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name:"はるか",
//     age:"21",
// };
// val4.name = "haruka";
// val4.adress = "hyogo"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 =["dog", "cat"];
// val5[0] = "baird";
// val5.push("monkey");
// console.log(val5);

//⚪︎テンプレート文字列⚪︎
// const name = "森はるか";
// const age = "21";
// //私の名前ははるかです。年齢は２１歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳ですよ。`;
// console.log(message2);

//⚪︎アロー関数⚪︎
//従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = str => {
//     return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,20));

//⚪︎分割代入⚪︎
// const myProfile = {
//     name:"森はるか",
//     age:21,
// }

// const message1 =`名前は${myProfile.name}です。年齢${myProfile.age}は歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 =`名前は${name}です。年齢${age}は歳です。`;
// console.log(message2);

// const myProfile =["森",21];
// const message3 = `名前は${myProfile[0]}で、年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//⚪︎デフォルト値、引数など⚪︎
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("はるか");

//⚪︎スプレッド構文...⚪︎
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
//     sumFunc(arr1[0],arr1[1]);
//     sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

//⚪︎mapやfilterを使った配列の処理⚪︎
// const nameArr = ["田中", "山田", "森"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameAree = nameArr.map((name) => {
//     if (name === "森"){
//         return name;
//     } else {
//         return (`${name}さん`)
//     }
// });
// console.log(newNameAree);

//⚪︎三項演算⚪︎
//ある条件　？条件がtureのとき　:条件がfalseのとき
// const val1 = 1 < 0 ? "ture" : "false";
// console.log(val1);

// const num = 120000;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ?"１００を超えています" :"正常";
// };
// console.log(checkSum(50,20));

//論理演算子の本当の意味の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//     console.log("どちらかはtureになります。")
// }
// if (flag1 && flag2) {
//     console.log("どちらもtureになります。")
// }

//||は左側がfalseなら右を返す　左側がtrueなら左側を返す
// const num = null
// const fre = num || "金額未設定です";
// console.log(fre);

//&&は左側がtrueなら右側を返す　左側がfalseなら左側を返す
const num2 = 100
const fre2 = num2 && "何か設定されました";
console.log(fre2);