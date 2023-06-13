"use strict";

const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Charukirti");
greetHey("Ssss");

greet("Hello")("Charukirti");

const greeting = (greet) => (name) => console.log(`${greet} ${name}`);

greeting("Hi")("charu");
greeting("Hi")("charu");

const sayName = (name) => (text) => console.log(`Hello 👋, ${name} ${text}`);
sayName("Charukirti")("Your name");
