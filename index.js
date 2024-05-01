const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    sayBye: function(){console.log("Goodbye!")}
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Hey I'm Patrick...")},
    sayBye: function(){console.log("Bye...")}
};

const person3 = {
    firstName: "Squidward",
    lastName: "Tentacles",
    age: 35,
    isEmployed: true,
    sayHello: function(){console.log("I'm Squidward...")},
    sayBye: function(){console.log("See you never...")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();

console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.age);
console.log(person3.isEmployed);
person3.sayHello();
person3.sayBye();



