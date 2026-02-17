import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let numeros = 0
  function numero(wh){
    numeros = Math.floor(Math.random() * wh.length);
    return numeros   
  }

  let a = who[numero(who)];
  let b = action[numero(action)];
  let c = what[numero(what)];
  let d = when[numero(when)];

  let excusa = a + " " + b + " " + c + "  "+ d;
  
  
  document.getElementById("excuse").textContent = excusa;

}
