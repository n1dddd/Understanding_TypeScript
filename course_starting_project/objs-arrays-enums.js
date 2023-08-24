"use strict";
// const person: {
//   name: string; //while name, age, and hobbies can be inferred, and defining them may be bad practise
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //it makes sense to explicity assign types in a tuple and explicity define
// } = {
//   //{} TypeScript notation for object type
//   //hover over person and see that the object key value pairs have ';' at the end
//   name: "Maximilian", //instead of key values pairs, object types describing key-type pairs (describe the type of object being used somewhere)
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], //TypeScript understands that this array may hold a number of string type
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "ADMIN";
    Role[Role["AUTHOR"] = void 0] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
}; // person.role[1] = 10;
let favouriteActivities; //tells TypeScript to store and array of strings
favouriteActivities = ["Sports", 1]; //would not work with declaration of string[]
//using Type any -- lets any value go into an array, but you lose out on the benefits of TypeScript
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //get auto-completion of toUpperCase as TypeScript recognized that 'hobby' will be a string because of the way its type was declared above
}
if (person.role === Role.ADMIN) {
    console.log("is ADMIN");
}
//avoid using 'any' as a type for TypeScript -- negates the use of static typing
