// function userInput(arr) {
//   if (arr.length > 3) return arr.trim(0, 3);
//   return arr;
// }
// userInput([11,22,11,22])




// do map method without using map function 
//using for of loop
const names = ["rifat", "jahangir", "rakib", "hira", "hero alam"]
const fullName = []

for (const name of names) {
    addPrefix = "md" + " " + name;
    fullName.push(addPrefix)
}
console.log(fullName)