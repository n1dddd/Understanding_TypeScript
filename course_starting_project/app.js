var person = {
    //{} TypeScript notation for object type
    //hover over person and see that the object key value pairs have ';' at the end
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
var favouriteActivities; //tells TypeScript to store and array of strings
favouriteActivities = ["Sports", 1]; //would not work with declaration of string[]
//using Type any -- lets any value go into an array, but you lose out on the benefits of TypeScript
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
