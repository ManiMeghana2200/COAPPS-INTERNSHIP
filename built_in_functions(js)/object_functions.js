//Object.keys() : returns an array of given objects own property names 
const obj = {a:1,b:2,c:3};
console.log(Object.keys(obj));

//Object.values() : returns an array of given objects own property values 
console.log(Object.values(obj));

//Object.assign() : copies the own properties from one to more 
const obj1 = {a:1};
const obj2 = {b:2};
Object.assign(obj1,obj2);
console.log(obj1);

//Object.freeze() : freezes an object , can't delete or change any properties 
const obj3 = Object.freeze(obj);

//Object.seal() : seals an object , can't delete the properties
const obj4 = Object.seal(obj);