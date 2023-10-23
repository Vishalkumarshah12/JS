const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
    
    // console.log(`${key} shortcut for ${[key]}`);
}

const programming = ['js','cpp','py','java','rb']

for (const key in programming) {
    //  console.log(programming[key]);
}

// for in loop not iterable or not work in map

// const map = new Map()
// map.set('IN','India')
// map.set('USA','United states of America')
// map.set('FR','France')

// for (const key in map) {
//      console.log(key);
// }