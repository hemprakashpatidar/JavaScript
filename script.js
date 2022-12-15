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