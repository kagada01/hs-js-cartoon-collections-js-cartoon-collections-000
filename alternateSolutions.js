//Function 4 - Find the Cheese - Solution 2
//accept an array of strings
//return first string that is a type of cheese & ignore others
//nested forloops()
//as opposed to ORs test & find method

function findTheCheese (foods) {
  const cheeses = ["cheddar", "gouda", "camembert"];
  let i = 0;
    while (foods[i] == "cheddar" || "gouda" || "camembert") {

      foods[i];
        i++;
          
    } 
} return "no cheese!";


//Function 1 - Dwarf Roll Call - Solution 2************************
//Need to return "'1. Dopey', '2. Grumpy', '3. Bashful'"

function dwarfRollCall(dwarves) {
  builder = '';
  array = [];
  let i = 0; 
    while (i < dwarves.length) { 
      let dwarf = `${(i+1)}. ${dwarves[i]}`;
        builder + dwarf;
          i++;
      }
}
