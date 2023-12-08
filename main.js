//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names) {
    const lowerStr = string.toLowerCase();
    let matchFound = false;

    for (let i = 0; i < names.length; i++) {
        
        const lowerName = names[i].toLowerCase();
        if (lowerName == 'max' || lowerName == 'dog') {
            console.log(`Matched ${names[i]}`);
            matchFound = true;
        }
    }

    if (!matchFound) {
        console.log("No Matches");
    }
}

//Call method here with parameters
findWords(dog_string,dog_names)







//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

var Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2){
        arr.splice(i,1,"even index");
    }

}
replaceEvens(Given_arr)
console.log(Given_arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Below are CodeWars questions 


//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//Division by zero should return NaN.

//Examples:
//n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
function Remainder(n,m){
    if (m== 0){
        console.log("Division by zero");
        return Nan;
    }

    let BiggerNumber = n;
    let SmallerNumber = m;
    if(n<m){
        BiggerNumber = m;
        SmallerNumber =n;
    }
    let result = BiggerNumber%SmallerNumber;
    console.log(`Result = ${result} (remainder of ${BiggerNumber}/${SmallerNumber})`)
}
Remainder(18,2)
Remainder(88,5)


//Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
//The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    string = string.toLowerCase().split(' ')

    for(let i = 0; i<string.length; i++){
        string[i] = string[i].split('')
        for(let t = 0; t<string[i].length; t++){
            if(t%2==0){
            string[i][t] = string[i][t].toUpperCase()
            }
        }
        string[i]= string[i].join('')
    }
    return string.join(' ')
}
let statement= 'This is really hard'

console.log(toWeirdCase(statement))