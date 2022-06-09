    
      canvas = document.getElementById('myCanvas');
      ctx = canvas.getContext("2d");
    
    
    
    //Create "mouseEvent" variable and set it as “Empty”.

    //Create two variables "last_position_of_x" and  "last_position_of_y".

    var mouseEvent= "";
    var last_position_of_x, last_position_of_y;

    
    //Define two variables color and width_of_line and assign values.
    

    color = "green";
    Width_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
     
       mouseEvent = "Mousedown";

       last_position_of_x = e.clientX - canvas.offsetLeft;
       last_position_of_y = e.clientY - canvas.offsetTop;

    }

    //Create the addEventListener() function for mouseup(). 

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e)
    {
       mouseEvent = "Mouseup";

    }
    

    //Create the addEventListener() function for mouseleave(). 
    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e)
    {
       mouseEvent = "Mouseleave";

    }
    

    canvas.addEventListener("mousemove", my_mousemove);

    
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "Mousedown"){


            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = Width_line;
            ctx.moveTo(last_position_of_x, last_position_of_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            

            last_position_of_x = current_position_of_mouse_x; 
            last_position_of_y = current_position_of_mouse_y;
        }


     
  
    }