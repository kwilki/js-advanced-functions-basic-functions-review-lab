function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) {
       return a + b 
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
    
}

function actionApplyer(a, arrayOfTransforms) {
    for (let i = 0; i < arrayOfTransforms.length; i++ ){
      a = arrayOfTransforms[i](a)
    }
  
    return a
}