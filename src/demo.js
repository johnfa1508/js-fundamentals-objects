const person = {
  name: 'Carlo',
  profession: 'teacher',
  cohortsTaught: [
    {
      name: 'c13',
      studentCount: 10
    },
    {
      name: 'c5',
      studentCount: 15
    }
  ]
}

// READ a value from a JS object
const name = person.name
console.log('Name is:', name)

const nums = [4, 7, 8, 10]
// READ a value from a JS Array
// get the 2nd value
const secondNum = nums[1]
console.log('Second num:', secondNum)

const carloSecondCohort = person.cohortsTaught[1].name
const pers = person
console.log(pers)
const cohortsTaught = person.cohortsTaught
console.log(cohortsTaught)
const secondCohort = person.cohortsTaught[1]
console.log(secondCohort)
const secondCohortName = person.cohortsTaught[1].name
console.log(secondCohortName)
console.log('Carlos second cohort', carloSecondCohort)
