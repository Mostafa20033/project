alert("It's about Turkey");


let span = document.querySelector(".up");
window.onscroll = function () {
   // console.log(this.scrollY);
    if(this.scrollY >= 1000){
        span.classList.add("show");
    } else{
        span.classList.remove("show");
    }
};
span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth" ,
    });
};