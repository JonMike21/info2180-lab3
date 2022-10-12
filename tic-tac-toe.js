window.onload = function(){

    var square = document.querySelectorAll("#board > div");

    square.forEach((element) =>{
        element.classList.add("square");
    });

}