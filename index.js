// Code your solution here
const findMatching = (arr,input) => {
    return arr.filter(match => match.toLowerCase() === input.toLowerCase())
}

['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const fuzzyMatch = (arr,input) => {
    return arr.filter((elem) => {
        if(elem.slice(0,1) === input.slice(0,1)){
            return true
        }
    })
}

const matchName = (arr,input) => {
    return arr.filter(elem => elem.name === input)
}