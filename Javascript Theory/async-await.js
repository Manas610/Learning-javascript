// async function f(){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done"),1000);
//         //setTimeout(() => reject("oops"), 5000);
//     });
//     try{
//         let result = await promise;
//         console.log(`Successfully ${result}`);
//     }
//     catch (error){
//         console.log(error);
//     }
// }
// f();




//for the study of the order of executions 

// let getClock =() => {
//     return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
// }

// let getSynchronous = () => {
//     return "Hello";
// }

// let getPromise = () => {
//     return Promise.resolve("Hello Promise");
// }

// let getPromiseDelay = () =>{
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve("Hello Promise Delay"),4000);
//     });
//     return promise;
// }

// async function caller(){

//     const promise = await getPromise();
//     console.log(promise);

//     const promiseDelay = await getPromiseDelay();
//     console.log(promiseDelay);

//     const synchronous = getSynchronous();
//     console.log(synchronous);


// }

// caller();




//Symbol datatype

// let h = Symbol("foo");
// let w =typeof h;
// console.log(h,w);

//Note - if inside the symbol the data is same then also they are not equal


