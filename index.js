//Function 1 - Dwarf Roll Call
//Need to return "'1. Dopey', '2. Grumpy', '3. Bashful'"
//could have i+1 instead of assigning counter variable


function dwarfRollCall(dwarves) {
// initializes function, accepts elements from dwarves[]

  let list = [];
  // list [] will store the value of the interpolated string dwarfList, each go through the for loop
  // list[] will also be returned at the end of the function
  
  let counter = 1;  
  // counter sets the numbered list at 0 and increments each time through to prevent an off-by-one error
  
    for (var i = 0; (i < dwarves.length); i++) {
    // begins loop that will run as many times as there are elements in dwarves[] 
    
      let dwarfList = `${counter}. ${dwarves[i]} `;
      // sets variable equal to the interpolated string, pulling in the counter variable and an element from dwarves[] 
        
        list.push(dwarfList);
        // pushes interpolated string to list[] as an element each time through the loop
          
          counter++;
          //increments counter to prevent off-by-one error for interpolated string each time through loop
    } 
    return list.join('');
    // once the loop index is equal to dwarves.length, the loop ends, and the function returns list[] elements as a single string
}

//Function 2 - Summon Captain Planet 
// need to return ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]

function summonCaptainPlanet(planeteerCalls) {
//initializes function, accepts planeteerCalls[] 
//could replace element in push call with "planeteerCalls[i];"

  let capCalls = [];
  //this will be the array that the mutated elements are passed to 
  //will eventually be final return value
  
    for (let i = 0; i < planeteerCalls.length; i++) {
    //enter loop by setting variable i to 0 and limited by the length of the array, previously defined as a variable
    //the loop will increase i by 1 each time through the loop until (i = planeteerCalls.length)
     
     let element = planeteerCalls[i];
     //assigns variable to the return value of first element from planeteerCalls[]
       
      capCalls.push(`${element.toUpperCase()}!`);
      //pushes loudElement string to capCalls[], which begins as empty before entering the loop the first time
      //mutates element from planeteerCalls to be all uppercase with an exclamation point, and assigns the new string to a variable
          
    }   return capCalls;
        //returns mutated capCalls[] after loop's condition evaluates to false
}

//Function 3 - Long Planeteer Calls 
//if words[] contains an element > 4 characters, return true, otherwise return false
//do a while loop

function longPlaneteerCalls(words) {
//initializes function that brings in words[]
  for (let i = 0; i < words.length; i++) {
  //enters loop which sets a variable to 0 and sets the condition to not go beyond the length of words[]
  //at the end of the loop increases the variable i so the next element from words[] is ran through the loop's conditions
    
    if (words[i].length > 4) {
      
      return true;
    }
  }
  return false;
}

//Function 4 - Find the Cheese
//accept an array of strings
//return first string that is a type of cheese & ignore others
//SHOULD return foods[i]
//nested forloops()
//as opposed to ORs test

  //return "no cheese!"
    //else return foods[i]

function findTheCheese (foods) {
  const cheeses = ["cheddar", "gouda", "camembert"];
    for (let i = 0; i < foods.length; i++) {
      for (let j = 0; j < cheeses.length; j++) {
        
        if (foods[i] == cheeses[j]) {
          return cheeses[j];
        } 
      }   
    } return "no cheese!";
}

