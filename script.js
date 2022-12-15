console.log("test")
let day=5
let arr=['car',5,'bus']
//
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