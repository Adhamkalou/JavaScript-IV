// CODE here for your Lambda Classes

class human {
    constructor(humanOptions) {
      this.name = humanOptions.name;
      this.age = humanOptions.age;
      this.location = humanOptions.location;
      this.gender = humanOptions.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  }


  class TLs extends human {
    constructor(TLsOptions) {
      super(TLsOptions);
      this.specialty = TLsOptions.specialty;
      this.favLanguage = TLsOptions.favLanguage;
      this.catchPhrase = TLsOptions.catchPhrase;
    }

    demo (lesson){
      return `Today we are learning about ${lesson}.`;
    }
    grade (student, lesson){
      return `${student.name} receives a perfect score on ${lesson}`;
    }
    teach(student){
      if (student.grade >= 70){
        return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
      }
      else {
        while (student.grade < 70){
          student.grade = Math.floor(Math.random() * 100) + 1;
          if (student.grade >= 70){
            return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
          }
          console.log(`${student.name}'s new grade is ${student.grade}`)
        }
      }
    }
  }



  class Student extends human {
    constructor(studentOptions) {
      super(studentOptions);
      this.previousBackground = studentOptions.previousBackground;
      this.className = studentOptions.className;
      this.favLessons = studentOptions.favLessons;
      this.grade = Math.floor(Math.random() * 100) + 1;
    }
    listsLessons(){
      for (var i = 1; i < 4; i++){
      //return(this.favLessons[`lesson${i}`]);
      }
    }
    PRAssignment(lesson){
      return `${this.name} has submitted the answer of life for ${lesson}`;
    }
    sprintChallenge(lesson){
      return `${this.name} has began sprint challenge on ${lesson}`;
    }
  }
  class ProjectManager extends TLs {
    constructor(projectManagerOptions) {
      super(projectManagerOptions);
      this.gradClassName = projectManagerOptions.gradClassName;
      this.favTLs = projectManagerOptions.favTLs;
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, @${channel} standUP times!`;
    }
    debugsCode(student, lesson){
      return `${this.name} debugs ${student.name}'s code on ${lesson}'`;
    }
  }

  
  var humanN = new human ({
    name: "kid A",
    age: "21",
    location: "Hill Town",
    gender: "Male"
  });


  var TL = new TLs({
    name: "DR who",
    age: "UKNOWN",
    location: "Spave",
    gender: "Male",
    specialty: "Front-end",
    favLanguage: "C++",
    catchPhrase: "just do it"
  });



  var StudentL = new Student ({
    name: "DR whoSON",
    age: "UKNOWN 'should be younger than DR WHO'",
    location: "MARS",
    gender: "male",
    previousBackground: "College graduate with doctarate",
    className: "space development",
    favlessons: {
        lesson1: "HTMLS",
        lesson2: "CSSS",
        lesson3: "JavaScriptS"
    }
  });


  var projectManagerTest = new ProjectManager({
    name: "MOE",
    age: "602",
    location: "America",
    gender: "Male",
    specialty: "JavaScript",
    favLanguage: "C++",
    catchPhrase: "sleeeeeeeeepyyyyyyyyyyyyyyyyyyy!",
    gradClassName: "!!!",
    favTLs: "DR who"
  });


  //function tests
  console.log(humanN.speak());
  console.log(TL.demo("JavaScript classes"));
  console.log(TL.grade(StudentL,"Javascript."));
  console.log(StudentL.listsLessons());
  console.log(StudentL.PRAssignment("Shrak"));
  console.log(StudentL.sprintChallenge("Classes"));
  console.log(projectManagerTest.standUp("space development"));
  console.log(projectManagerTest.debugsCode(StudentL, "CSS")); 