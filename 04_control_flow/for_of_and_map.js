// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const item of greetings) {
    // console.log(`Each char is ${item}`);
}

// Maps for unik values

const map = new Map()
map.set('IN','India')
map.set('USA','United states of America')
map.set('FR','France')

// console.log(map);

for (const [key, values] of map) {
    //  console.log(key ,':-',values);
}


// for of loop is not work in Objects 

// const myObject = {
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for (const [key, values] of myObject) {
//       console.log(key,values);
// }