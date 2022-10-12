window.onload = function(){
    let square = document.querySelectorAll("#board > div");
    const state =[];
    

    square.forEach(function(sq,index){
        sq.classList.add("square");
        
        sq.addEventListener('click',function(e){
            if(state.length==0)
            {
                sq.innerHTML= "X";
                e.target.classList.add('X');
                state.push("X");
            }
            
            else if(state[state.length-1]=='O')
            {
                sq.innerHTML= "X";
                e.target.classList.add('X');
                state.push("X");
            }

            else
            {
                sq.innerHTML= "O";
                e.target.classList.add('O');
                state.push("O");
            }


        });

    }); 



}