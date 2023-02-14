// VIDEO: EXERCISES: FUNCTIONS - JAVASCRIPT IN DEPTH
// BY TECH WITH NADER
 
/*

    Write a function called "chill" that does the following:
    1.) Prints out at the start: "Doing some chilling:"
    2.) Then, prints out:
        "Chill... 1"
        "Chill... 2"
        "Chill... 3"
        ...
        "Chill... 10"
    3.) Then finally prints out: "That was ice cold!"

    When you're done, call the function once.

*/

//in this code snipped below, we defined the function
const chill = () => {
    console.log("Doing some chilling:");

    for (let i = 1; i <= 10; i++) {
        console.log(`Chill... ${i}`);
    }
    console.log("That was ice cold!");    
    };

    //here, we are calling the function
    chill();

/* This returns the following:
Doing some chilling:
Chill... 1        
Chill... 2        
Chill... 3        
Chill... 4        
Chill... 5        
Chill... 6        
Chill... 7        
Chill... 8        
Chill... 9        
Chill... 10       
That was ice cold!
*/
