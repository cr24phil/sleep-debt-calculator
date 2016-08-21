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

function sleepDebtCalculator(){
  var idealSleep = prompt('How many hours of sleep is ideal for you in a night?');
  var idealHoursPerWeek = idealSleep * 7;
  var actualHoursPerWeek = monday() + tuesday() + wednesday() + thursday() + friday() + saturday() + sunday();
  
  if (idealHoursPerWeek === actualHoursPerWeek) {
    console.log('You got the ideal amount of sleep!');
  } else if (idealHoursPerWeek < actualHoursPerWeek) {
    console.log('You got ' + (actualHoursPerWeek - idealHoursPerWeek) +' hours more sleep than is ideal.');
  } else {
    console.log('You need to get ' + (idealHoursPerWeek - actualHoursPerWeek) + ' more hours of sleep!');
    console.log('Make sure to get some rest to be your best!');
  }
}

sleepDebtCalculator();
