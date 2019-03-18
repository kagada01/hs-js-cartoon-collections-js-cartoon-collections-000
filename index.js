//Function 1 - Dwarf Roll Call - Solution 1 - COMMENTS COMPLETE
//Need to return "'1. Dopey', '2. Grumpy', '3. Bashful'"
//forloop()
/*
function dwarfRollCall(dwarves) {
// initializes function, accepts elements from dwarves[]

  let list = [];
  // list [] will store the value of the interpolated string dwarfList each go through the for loop
  
    for (var i = 0; (i < dwarves.length); i++) {
    //initializes loop based on the length of dwarves[], brought in as an argument of the function
        
        list.push(`${i+1}. ${dwarves[i]} `);
        // pushes interpolated string to list[] each time through the loop
        //(i+1) prevents off-by-one error, regardless of the value of dwarves.length
        
    } 
    return list.join('');
    //once the loop index is equal to dwarves.length, the loop ends, and the function returns the elements in list[] as a single string
}
*/
//Function 1 - Dwarf Roll Call - Solution 2 - COMMENTS COMPLETE
//whileloop()

function dwarfRollCall(dwarves) { 
// initializes function, accepts elements from dwarves[]

  let array = [];
  // array [] will store the value of the interpolated string each go through the loop

  let i = 0; 
  //sets loop counter variable to 0
    
    while (i < dwarves.length) {
    //initializes loop that will run as many times as there are elements in dwarves[]
     
          array.push(`${(i+1)}. ${dwarves[i]} `);
          //pushes interpolated string to array[]
            
            i++;
            //increments the counter variable at the end of each loop
            
      } return array.join('');
      //after loop is completed, joins elements pushed to array[] into a single string for the return value
}

//Function 2 - Summon Captain Planet - Solution 1  - COMMENTS COMPLETE
// need to return ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]
//forloop()

function summonCaptainPlanet(planeteerCalls) {
//initializes function, accepts planeteerCalls[] 

  let capCalls = [];
  //this will be the array that the strings are pushed into
  
    for (let i = 0; i < planeteerCalls.length; i++) {
    //enter loop by setting variable i to 0 and limited by the length of the array
    //the loop will increase i by 1 each time through the loop until (i = planeteerCalls.length)
       
      capCalls.push(`${planeteerCalls[i].toUpperCase()}!`);
      //pushes interpolated string to capCalls[]
          
    }   return capCalls;
        //returns capCalls[] once (i = planeteerCalls.length)
}

//Function 2  - Summon Captain Planet - Solution 2 
//whileloop()

function summonCaptainPlanet(planeteerCalls) {
//
  let array = [];
  //
  let i = 0;
  //
    while (i < planeteerCalls.length) {
    //
      array.push(`${planeteerCalls[i].toUpperCase()}!`);
      //
        i++;
        //
    } return array;
      //
  
}

//Function 3 - Long Planeteer Calls Solution 1
//if words[] contains an element > 4 characters, return true, otherwise return false
//forloop()

/*
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
*/

//Function 3 - Long Planeteer Calls Solution 2
//while loop()

function longPlaneteerCalls(words) {
  let i = 0;
    while ( i < words.length ) {
        if (words[i].length < 5) {
          return false;
        } else {
            return true;
          } 
    } 
} 

//Function 4 - Find the Cheese Solution 1 - NOTES COMPLETE
// nested forloop()

function findTheCheese (foods) {
//intializes function, takes in foods[]
  
  const cheeses = ["cheddar", "gouda", "camembert"];
  //list of cheese won't change, so set to variable
    for (let i = 0; i < foods.length; i++) {
    //initializes loop based on the length of foods[], brought in as an argument of the function
    
      for (let j = 0; j < cheeses.length; j++) {
      //initializes loop based on the length of the constant cheeses[] defined above  
        
        if (foods[i] == cheeses[j]) {
        //checks if the element (foods[i]) from foods[], matches the element from cheese[] 
          
          return foods[i];
          //if the elements from the respect arrays are equal, the element will be returned
          //exits the function
        }
        //condition ends 
      }  
      //forloop ends
    } return "no cheese!";
}     //if the none of the elements in foods[] match any of the elements in cheese[], "no cheese!" will return
      //exits the function


//Function 4 - Find the Cheese - Solution 2
//forloop(), if statement to test values against the 3 conditions 

/*
function findTheCheese (foods) {
//
    for (let i = 0; i < foods.length; i++) {
    //
        if (foods[i] ==  ("cheddar" || "gouda" || "camembert")) {
        //
          return foods[i];
          //
      } 
    } return "no cheese!";
      //
} 
*/

//Function 4 - Find the Cheese - Solution 3
//whileloop, if statement to test values against the 3 conditions
/*
  function findTheCheese(foods) {
  //
    let i = 0;
    //
      while (i < foods.length) {
      //
          if (foods[i] ==  ("cheddar" || "gouda" || "camembert")) {  
          //
              return foods[i];
              //
          } i++;
            //
      } return "no cheese!";
        //
  } 
*/
