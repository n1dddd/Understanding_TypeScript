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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
}; // person.role[1] = 10;
var favouriteActivities; //tells TypeScript to store and array of strings
favouriteActivities = ["Sports", 1]; //would not work with declaration of string[]
//using Type any -- lets any value go into an array, but you lose out on the benefits of TypeScript
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); //get auto-completion of toUpperCase as TypeScript recognized that 'hobby' will be a string because of the way its type was declared above
}
if (person.role === Role.ADMIN) {
    console.log("is ADMIN");
}
