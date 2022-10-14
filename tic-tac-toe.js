window.onload = function(){
    let square = document.querySelectorAll("#board > div");
    let stat = document.getElementById("status");
    const state =[];
    const winn=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


    square.forEach(function(sq,index){
        
        
        sq.classList.add("square");

        sq.addEventListener('mouseover', function(e)
        {
            e.target.classList.add('hover');
        }); 

        sq.addEventListener('mouseout', function(e)
        {
            e.target.classList.remove('hover');
        }); 
        

        sq.addEventListener('click',function(e){
            
            //if (sq.innerHTML==""){  //Exercise 6 
                if(state.length==0)
                {
                    sq.innerHTML= "X";
                    e.target.classList.add('X');
                    state.push("X");
                    //console.log(square[0].innerHTML);
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
            //}

            winn.forEach((i) => {
                if ((square[i[0]].innerHTML=="X") && (square[i[1]].innerHTML=="X") && (square[i[2]].innerHTML=="X"))
                {
                    stat.classList.add('you-won');
                    stat.innerHTML="Congratulations! X is the Winner!";
                }
        
                else if ((square[i[0]].innerHTML=="O") && (square[i[1]].innerHTML=="O") && (square[i[2]].innerHTML=="O"))
                {
                    stat.classList.add('you-won');
                    stat.innerHTML="Congratulations! O is the Winner!";
                } 
        
                }); //edf

        });

        
    }); 
    
    
    

        /*
        if ((square[0].innerHTML=="X"))
                {
                    //stat.classList.add('you-won');
                    //stat.innerHTML="Congratulations! X is the Winner!";
                    console.log(square[0].innerHTML);
                    console.log("Lmaoo");
                }
        */

}