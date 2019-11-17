// define a class
class Observable {
    constructor() {
      this.observers = [];
    }
    subscribe(f) {
      this.observers.push(f);
    }
    unsubscribe(f) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }


const observer = new Observable();

const observerA = new Observable();


const logA = x => console.log('x', x);

const logB = y => console.log('y', y);


const retA = (val) => {
    // console.log(val)
    logA(val);
}

const retB = (val) => {
    logB(val);
}


// observer.subscribe(retA);

observer.subscribe(retB);
observerA.subscribe(retA);


setTimeout(() => {
    observer.notify('yeeeooo');
}, 1000);

setTimeout(() => {
    observer.notify('2');
}, 2000);

setTimeout(() => {
    observerA.notify('yoh');
}, 1300);

setTimeout(() => {
    observerA.notify('9000');
}, 2600);


const SUCCESS = "SUCCESS";
const FAILED = "FAILED";

const fetch = require('node-fetch');
// fetch('http://localhost:3000/api').then((res) => {
//         res.json().then((data) => {
//             console.log(data);
//         });
//     }).catch((err) => {
//         console.log(err);
//     })

// const prom = new Promise((resolve, reject) => {

//     const resolver = (victoryCondition, data) => {
//         if (victoryCondition === FAILED) {
//             return Promise.reject(FAILED);
//         } else {
//             return Promise.resolve(data);
//         }
//     }

//     fetch('http://localhost:3000/api').then((res) => {

//     console.log(res.status);
//         if (res.status !== 200) {
//             // resolver(FAILED, null);
//             return reject(FAILED);
//         } else {
//             let data;

//             res.json().then((r) => 
//             { 
//                 // console.log(r);
//                 data = r;
//                 return resolve(r);
//             }).catch(err => console.log(err));

//             // console.log(data)
//             // return Promise.resolve(data);
//             // resolver(SUCCESS, 
//             // res.json().then(r => {
//             //     return Promise.resolve(r)
//             //     }).catch(err => console.log(err));

//         }

//         // console.log(JSON.parse(res));
//     }).catch((err) => {
//         console.log(err);
//     })

// })

// prom.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

