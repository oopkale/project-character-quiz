$("button").click(function(){});
let single=$("singleton").val();
let pennies=$("#penny").val();

if(single==="no"&&pennies>19){
    $(".character").text("You are ana");
    }
    
    else if(single==="no"&&pennies<19){
         $(".character").text("You are christof");
        }
    else if(single==="yes"&&pennies<19){
        $(".character").text("You are elsa");
        }
    else if(single==="yes"&&pennies>19){
        $(".character").text("You are olaf");
        }
    $("body").append(`<p>congrats you are ${pennies}</p>`);