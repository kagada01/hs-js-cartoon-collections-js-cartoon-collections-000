//Dwarf Roll Call - Solution 1
//Need to return "1. Dopey, 2. Grumpy, 3. Bashful"
//forloop()

function dwarfRollCall(dwarves) {
// initializes function, accepts elements from dwarves[]

  let list = [];
  // list [] will store the value of the interpolated string dwarfList each go through the for loop
  
    for (var i = 0; (i < (dwarves.length)/2); i++) {
    //initializes loop based on the length of dwarves[], brought in as an argument of the function
        
        list.push(`${i+1}. ${dwarves[i]} `);
        // pushes interpolated string to list[] each time through the loop
        //(i+1) prevents off-by-one error, regardless of the value of dwarves.length
        
    } 
    return list.join('');
    //once the loop index is equal to dwarves.length, the loop ends, and the function returns the elements in list[] as a single string
}

//Solution 2
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

//Solution 3
//forEach()

function dwarfRollCall(dwarves) {
  let array = [];
  let i = 0;
    dwarves.forEach(function(dwarf) {
      array.push(`${i+1}. ${dwarves[i]} `);
        i++;
    });
      return array.join('');
} 

//Summon Captain Planet - Solution 1
//need to return ["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]
//forloop()

function summonCaptainPlanet(planeteerCalls) {
//initializes function, accepts planeteerCalls[] as an argument

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

//Solution 2
//whileloop()

function summonCaptainPlanet(planeteerCalls) {
//initializes function, accepts planeteerCalls[] as an argument
  
  let array = [];
  //defines empty array to store string values in during loop, also final return value
  
  let i = 0;
  //sets loop counter variable to 0
    
    while (i < planeteerCalls.length) {
    //initializes while loop, will execute loop below as long as (i < planeteerCalls.length)
      
      array.push(`${planeteerCalls[i].toUpperCase()}!`);
      //pushes interpolated string value to array[]
        
        i++;
        //increments the loop counter before reinitializing the loop
  
    } return array;
      //once (i = planeteerCalls.length), returns array[] containing the interpolated strings as elements
}


//Solution 3 
//forEach()

function summonCaptainPlanet(planeteerCalls) {
  let i = 0;
  let array = [];
  
    planeteerCalls.forEach(function(call) {
      array.push(`${planeteerCalls[i].toUpperCase()}!`);
        i++;
    });
      return array;
}

//Long Planeteer Calls - Solution 1
//if words[] contains an element > 4 characters, return true, otherwise return false
//forloop()

function longPlaneteerCalls(words) {
//initializes function, accepts words[] as an argument
  
  for (let i = 0; i < words.length; i++) {
  //enters loop which sets a variable to 0 and sets the condition to not go beyond the length of words[]
    
    if (words[i].length > 4) {
    //checks if the length of the element pulled from words[] is greater than 4 characters
      
      return true;
      //if words[i] is longer than 4 characters, the function returns true and exits
      //if not, the loop counter variable will incremement, and reinitialize the loop to check the next element in words[]
    }
  }
  return false;
  //if none of the elements in words[] are > 4 charaters in length, the loop will end after all of the elements are checked, return false, and exit
}

//Solution 2
//while loop()

function longPlaneteerCalls(words) {
//intializes function, accepts words[]
  
  let i = 0;
  //sets counter variable to 0
    while ( i < words.length ) {
    //if (i < the number of elements in words[]), loop is initialized
        
        if (words[i].length > 4) {
        //checks element length to see if longer than 4 characters
           return true;
          //if words[i] is longer than 4 characters, the function will return true and exit
        } i++;
          //if words[i] is not longer than 4 characters, the counter variable will increment and evaluate the condition 
      } return false;
    }   //if none of the elements in words[i] are longer than 4 characters, loop will end, function will return false and exit


//Find the Cheese - Solution 1
//nested forloop()

function findTheCheese (foods) {
//intializes function, takes in foods[]
  
  const cheeses = ["cheddar", "gouda", "camembert", "swiss"];
  //list of cheese won't change in this problem, so set to constant array
    
    for (let i = 0; i < foods.length; i++) {
    //initializes loop based on the length of foods[], brought in as an argument of the function
    
      for (let j = 0; j < cheeses.length; j++) {
      //initializes loop based on the length of the constant cheeses[] defined above  
        
        if (foods[i] == cheeses[j]) {
        //checks if the element (foods[i]) matches the element from cheese[j] 
          
          return foods[i];
          //if the elements from the respective arrays match, the element will be returned and exit
        }
        //if the elements are not equal, both loop counter variables will increment and function will reevalute the loop conditions
      }  
      //forloop ends
    } return "no cheese!";
}     //if the none of the elements in foods[] match any of the elements in cheese[], "no cheese!" will return
      //exits the function

//Solution 2
//forloop() 

function findTheCheese (foods) {
//initializes function, takes in foods[]
    
    for (let i = 0; i < foods.length; i++) {
    //sets counter variable = 0, and will continue as long as there are elements remaining in foods[]
    //incrememnts counter at the end of loop
        
        if (foods[i] ==  ("cheddar" || "gouda" || "camembert" || "swiss")) {
        //creates condition to check element of foods[] against, must be equal to one of the 3 strings 
          
          return foods[i];
          //if foods[i] is equal to any of the 3 strings, the function will return the element foods[i] and exit
      } 
    } return "no cheese!";
      //if none of the elements in foods[] are equal to one of the 3 strings in the condition, the functio will outpput "no cheese!"
      //and exit
} 

//Solution 3
//whileloop

  function findTheCheese(foods) {
  //initializes function, takes in foods[]
    let i = 0;
    //sets loop counter variable to 0
      while (i < foods.length) {
      //checks condition, if it evaluates true, the loop begins
          if (foods[i] ==  ("cheddar" || "gouda" || "camembert")) {  
          //checks if the element from foods[] matches any of the values in the condition
              return foods[i];
              //if the element from foods[] matches one of the conditions, the element is returned and exits
          } i++;
            //if the condition evaluates false, the loop counter variable increments and goes up to reevaluate the while condition
  } return "no cheese!"; 
}   //returns this string and exits function if none of the elements from foods[] meet the condition

function startsWithB(array) {
  
let arrayOne = [];
  
  for (let i = 0; i < array.length; i++) {
        
        if (array[i].startsWith(“b”)); {
            arrayOne.push(array[i]);
        }
  }     
      return arrayOne;
}