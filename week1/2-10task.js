'use strict'
if('0'){
    alert('hello');
}
let result = prompt("What is the “official” name of JavaScript?",'?');
if(result == 'ECMAScript'){
    alert('Right');
}else{
    alert("You don't know? “ECMAScript”!");
}
//2.
let num = prompt('number plz','3');
if (num > 0)
{
    alert(1);
}else if(num < 0){
    alert(-1);
}else{
    alert(0);
};
//3
let result1 = (a + b < 4 ) ? "Below" : "Over";

let message = (login == 'Emp') ? 'Hello' : 
(login == 'Dir') ? "Greetings" : 
(login == '') ? "No login" : 
"";
