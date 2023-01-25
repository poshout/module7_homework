const student = {
  Name: "Ivan",
  Age: 20
};

function showKeysAndValues (student){
  for (let key in student) {
    if (student.hasOwnProperty(key)){
      console.log(`${key}: ${student[key]}`);
    }
  }  
}

showKeysAndValues(student)