// chartAt() : returns the charecter at the specified index
const str = "Hello Meghana";
console.log(str.charAt(0));

//concat() : joins two or more strings
const str1 = "Hello";
const str2 = "Meghana";
console.log(str1.concat(" ",str2));

//includes() : checks if a string contains the specified substring
const sentence = "Hi, my name is Mani Meghana";
console.log(sentence.includes("Mani"));

//indexOf() : returns the index within the calling string object of the first occurence of the specified value 
console.log(sentence.indexOf("Meghana"));

//slice() : extracts the section of a string and returns it as anew string
console.log(sentence.slice(2,6));

//split() : splits a string into an array of substrings
console.log(sentence.split(" "));

//toUpperCase() : converts a strint to uppercase 
console.log(sentence.toUpperCase());

//trim() : removes whitespaces fron both ends of a string 
const str3 = "   Hello, Meghana!   "
console.log(str3.trim());