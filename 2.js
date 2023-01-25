const prop = 'name'

const student = {
  name: 'Ivan',
  age: 20
};

function checkProp(prop, student){
  return console.log(prop in student);
}

checkProp (prop, student)