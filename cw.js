
//### Exercise 1: COMMENT ONE TO RUN THE OTHER EXERCISE
// Create a page with a blank label and a text area. When someone types into the text area, change the label to show what the person has typed.

// let inputElement=document.querySelector("#element1");
// let labelid=document.querySelector("#mylabel");
//     inputElement.onkeydown = function(e) {
//     console.log(e.target.value);
//     labelid.innerText= e.target.value;
//
//     };


//### Exercise 2:
//Using the exercise above, replace the user's typing with the string below. Each time they press a key,
//a letter from the string below should display in the label instead. There's no need to have the text start over
// from the beginning.

let inputElement=document.querySelector("#element1");
let labelid=document.querySelector("#mylabel");
let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness."
    counter=0;
    inputElement.onkeydown = function(e) {
    console.log(e.target.value);
    labelid.innerText= codeCrewString[counter];
    counter ++;
};