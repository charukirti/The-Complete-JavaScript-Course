// any function attached to an object is called as "Object Methods".

const userData = {
    userName : 'Charukirti',
    birthYear : 2002,
    // userAge : function () {
    //     this.age = 2023 - this.birthYear
    //     return this.age;
    // },
    userAge : function() {
         this.age = 2023 - this.birthYear
         return this.age;
    },
    role : 'front-end developer',
    hasExperience : false,
    languages : ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "TypeScript"],
    getSummary : function() {
        return `${this.userName} is a ${this.userAge()} old ${this.role} with ${this.hasExperience} and experties in ${this.languages}`
    }
};

// console.log(userData.age(2002)); //21
console.log(userData.age); 
console.log(userData.age); 
console.log(userData.age); 

// console.log(userData['age'](2002))


console.log(userData.getSummary())






