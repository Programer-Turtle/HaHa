let i = 0;
let x = 0;
let z = 0;
let stared = false;
z = Math.floor(Math.random() * 5);





    setInterval(move, 20);


function move()
{
    
    if (stared == false)
    {
        window.moveTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height))
        stared = true;
    }
    
    
    
    if (z == 0)
    {
        if(i < 54)
     {
        moveBy(0.015625 * screen.width, 0);
        document.getElementById("text").style.color = "red";
        document.getElementById("backround").style.backgroundColor = "white";
        i++
     }

    else 
     {
        if (x < 54)
        {
            moveBy(-0.015625 * screen.width, 0);
            document.getElementById("text").style.color = "blue";
            document.getElementById("backround").style.backgroundColor = "black";
            x++
        }
        else
        {
            i = 0;
            x = 0;
        }
     }
    }

    if (z == 1)
    {
        if(i < 27)
     {
        moveBy(0, -0.02777777777 * screen.height);
        document.getElementById("text").style.color = "lime";
        document.getElementById("backround").style.backgroundColor = "white";
        i++
     }

    else 
     {
        if (x < 27)
        {
            moveBy(0, 0.02777777777 * screen.height);
            document.getElementById("text").style.color = "yellow";
            document.getElementById("backround").style.backgroundColor = "black";
            x++
        }
        else
        {
            i = 0;
            x = 0;
        }
     }
    }

    if (z == 2)
    {
        if(i < 27)
     {
        moveBy(-0.015625 * screen.width, -0.02777777777 * screen.height);
        document.getElementById("text").style.color = "orange";
        document.getElementById("backround").style.backgroundColor = "white";
        i++
     }

    else 
     {
        if (x < 27)
        {
            moveBy(0.015625 * screen.width, 0.02777777777 * screen.height);
            document.getElementById("text").style.color = "purple";
            document.getElementById("backround").style.backgroundColor = "black";
            x++
        }
        else
        {
            i = 0;
            x = 0;
        }
     }
    }

    if (z == 3)
    {
        if(i < 27)
     {
        moveBy(-0.015625 * screen.width, 0.02777777777 * screen.height);
        document.getElementById("text").style.color = "aqua";
        document.getElementById("backround").style.backgroundColor = "white";
        i++
     }

    else 
     {
        if (x < 27)
        {
            moveBy(0.015625 * screen.width, -0.02777777777 * screen.height);
            document.getElementById("text").style.color = "crimson";
            document.getElementById("backround").style.backgroundColor = "black";
            x++
        }
        else
        {
            i = 0;
            x = 0;
        }
     }
    }

    if (z == 4)
    {
        if(i < 27)
     {
        moveTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
        document.getElementById("text").style.color = "turquoise";
        document.getElementById("backround").style.backgroundColor = "white";
        i++
     }

    else 
     {
        if (x < 27)
        {
            moveTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
            document.getElementById("text").style.color = "mediumspringgreen";
            document.getElementById("backround").style.backgroundColor = "black";
            x++
        }
        else
        {
            i = 0;
            x = 0;
        }
     }
    }

    
    
   
}