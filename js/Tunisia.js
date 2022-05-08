alert("Best Places in Tunisia");

const checkbox =
document.getElementById('checkbox');
checkbox.addEventListener ('change' ,() => {
    document.body.classList.toggle('dark');
});
let myName = "Tunisia";
let index=1;
function writeText() {
     document.querySelector("h1").textContent = myName.slice(0,index);

     index++
     if(index > myName.length) {
         index = 1;
     }
 }
setInterval(function(){
     writeText();
}, 100)

