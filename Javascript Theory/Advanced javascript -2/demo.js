// topic - callback function has diadvantages so we use promises
// const mydisplayer  = (sum) =>{
//     document.getElementById("demo").innerHTML = sum;
// };

// const myCalculator = (sum1 , sum2 , mycallback) => {
//     let sum = sum1 + sum2;
//     mycallback(sum);
// };
// myCalculator (55 , 10 , mydisplayer);



// topic - promises  
// const promised = new Promise((resolve , reject) => {
//     if(true){
//         resolve("it worked");
//     } else {
//         reject("it didn't worked");
//     }
// });

// promised
// .then ((result) => { result + "?"} 
// ,console.log("not done"))
// .then ((result2) => {
//     console.log(result2);
// }
// , console.log("fucked"));

// we also use .catch for catching the rejected one and the .finally when we want something to execute regardless



// topic - async await
// async function move() {
//     //return a promise
//     await runDirection(100,"top");//wait for the promise
//     await runDirection(200,"bottom");
//     await runDirection(300,"left");
// }

// async function print(){
//     return 1;
// }
// print();