class Person {
  constructor(){
    if(this.constructor === Person){
      throw new Error("Some error Message...")
    }
  }

  info(){
    throw new Error("Added abstract method has no implementation");
  }
}

class Teacher extends Person {
  info(){
    console.log("Hello, I'm a teacher")
  }
}

const teacher = new Teacher()
teacher.info()
