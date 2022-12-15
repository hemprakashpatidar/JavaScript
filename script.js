console.log("test")
let day=5
let arr=['car',5,'bus']
/*
//for   
console.log("for")
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//forof
console.log("for of")
for (const ele of arr) {
    console.log(ele)    
}
//forin
console.log("forin")
for (const ele in arr) {
    console.log(arr[ele])
}
console.log("forEAach")
//forEach
arr.forEach(element => {
        console.log(element)
});

*/
/////////Switch
function oddEven(x)
{   
    rem=x%2
    switch (rem){
        case 1:
            console.log(`${x} is odd`)
            break;
        case 0:
            console.log(`${x} is even`)
            break;
    }
}

let my =[12,34,45,2,64,753,35,56,47]

for (let num of my){
    oddEven(num)
}


//This

const person={
    firstname: 'hemprakash',
    lastname: 'patidar',
    age: 24,
    getage :  function()
    {
        return this.age;
    }
};

console.log(person.getage())
//map
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10

// 
let addNine =(num) =>{
    return num+9
}
console.log(addNine(5))

//callback function
let addFiveNine=(add,n)=>{
    return add(n) + 5
}
console.log(addFiveNine(addNine,8))

let originalFunc =(num) =>{
    return num+2
}

let newFunc=originalFunc //assign originalFinc to new variable
newFunc.name // name of function property
newFunc.toString() //to give the body of the message
newFunc.isMath=56 //setting a new property

let funLength = (fun) =>{return fun.name.length} //function as argument
//console.log(funLength(newFunc))

let returnFun=()=>{return newFunc} //returns a function
//console.log(returnFun()(4))
//filter, it retur an array of those element who returns true to inside function
const filterarr=my.filter( n => {
    return n > 40
})
//console.log(filterarr)

const stats=my.map(num => {
    return num + ' is a number'
})
console.log(stats)