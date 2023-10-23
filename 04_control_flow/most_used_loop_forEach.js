const coding = ['js', 'cpp', "java", "ruby", "python"]

// coding.forEach((item)=>{
//    console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//    console.log(item,index,arr);
// })

const myCoding = [
    {
       langaugeName:'Javascript',
       langaugeFileName: 'js'
    },
    {
       langaugeName:'Java',
       langaugeFileName: 'java'
    },
    {
       langaugeName:'python',
       langaugeFileName: 'py'
    },
    
]

myCoding.forEach((item)=>{
    console.log(item.langaugeName);
})