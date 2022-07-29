function Person() {
    this.name = "Nino";
    if (this.constructor === Person) {
     throw new Error("Some error Message...")
    }
}

Person.prototype.info = function () {
  return `Person name is: ${this.name}`
}

function Teacher(name) {
    this.name = name
}

Teacher.prototype = Object.create(Person.prototype)

const teacherName = new Teacher("Avril Lavigne")
teacherName.info()