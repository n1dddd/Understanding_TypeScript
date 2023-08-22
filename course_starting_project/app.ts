const person = {
  //{} TypeScript notation for object type
  //hover over person and see that the object key value pairs have ';' at the end
  name: "Maximilian", //instead of key values pairs, object types describing key-type pairs (describe the type of object being used somewhere)
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: any[]; //tells TypeScript to store and array of strings

favouriteActivities = ["Sports", 1]; //would not work with declaration of string[]

//using Type any -- lets any value go into an array, but you lose out on the benefits of TypeScript
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase); //get auto-completion of toUpperCase as TypeScript recognized that 'hobby' will be a string because of the way its type was declared above
}
