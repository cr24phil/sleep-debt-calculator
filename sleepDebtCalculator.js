// Sleep Debt Calculator Project

// Seven functions - one for each day of the week.
// The purpose of each of the functions is to ask the user how many hours
// of sleep they got on a given night.
// Inside each function, the variable named result is set equal to a prompt
// that asks the user how many hours of sleep they got on a particular night.
// Inside each function, return the result of the prompt we asked the user.
// Uses return +result since result holds a prompt and by default, prompt
// returns a String, and when we want to add up these hours later we need the
// result as a Number. Adding a + to result will change the String into a Number.

function monday(){
  var result = prompt('How many hours did you sleep on Monday night?');
  return +result;
}

function tuesday(){
  var result = prompt('How many hours did you sleep on Tuesday night?');
  return +result;
}

function wednesday(){
  var result = prompt('How many hours did you sleep on Wednesday night?');
  return +result;
}

function thursday(){
  var result = prompt('How many hours did you sleep on Thursday night?');
  return +result;
}

function friday(){
  var result = prompt('How many hours did you sleep on Friday night?');
  return +result;
}

function saturday(){
  var result = prompt('How many hours did you sleep on Saturday night?');
  return +result;
}

function sunday(){
  var result = prompt('How many hours did you sleep on Sunday night?');
  return +result;
}

// Create a calculator function named sleepDebtCalculator.

function sleepDebtCalculator(){
  
  // Create a variable named idealSleep, and set it equal to a prompt
  // that asks the user: 'How many hours of sleep is ideal for you in a night?'
  
  var idealSleep = prompt('How many hours of sleep is ideal for you in a night?');
  
  // Multiply the answer by 7 to figure out ideal sleep per week.
  
  var idealHoursPerWeek = idealSleep * 7;
  
  // Create another variable named actualHoursPerWeek, and set it equal to all of
  // our day-named functions. Each of the functions return a number, call each one,
  // and add them together like they are numbers.
  
  var actualHoursPerWeek = monday() + tuesday() + wednesday() + thursday() + friday() + saturday() + sunday();

  // Write an if/else statement that compares ideal hours per week, and the actual hours.
  // Tell the user how much over or under they are on their sleep goal.

  if (idealHoursPerWeek === actualHoursPerWeek) {
    console.log('You got the ideal amount of sleep!');
  } else if (idealHoursPerWeek < actualHoursPerWeek) {
    console.log('You got ' + (actualHoursPerWeek - idealHoursPerWeek) +' hours more sleep than is ideal.');
  } else {
    console.log('You need to get ' + (idealHoursPerWeek - actualHoursPerWeek) + ' more hours of sleep!');
    console.log('Make sure to get some rest to be your best!');
  }
}

// Call the sleepDebtCalculator function.

sleepDebtCalculator();
