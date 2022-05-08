
const nam =document.getElementById('nam')
const email =document.getElementById('email')
const phone =document.getElementById('phone')
const form =document.getElementById('form')
    function mos(){
    if (nam.value ===""  || email.value==="" || phone.value==="" )
        return false;
        
        else{
             alert("SUCCESS")
        }
    }