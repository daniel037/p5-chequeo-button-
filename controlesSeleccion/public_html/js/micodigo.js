$(document).ready(function(){
    $("#optneg").click(function (){
        $("#txt1").css("color","black");  
    });
    $("#optroj").click(function (){
        $("#txt1").css("color","red");
    });
    $("#optazu").click(function (){
        $("#txt1").css("color","blue");
    });
    
    $("#chkneg").click(function (){
       if($("#chkneg").is(":checked")){
           $("#txt1").css("font-weight","bold");
       }
           else{
               $("#txt1").css("font-weight","normal");
           }
       });
    $("#chkcur").click(function (){
       if($("#chkcur").is(":checked")){
           $("#txt1").css("font-style","italic");
       }
        else{
               $("#txt1").css("font-style","normal");
           }
    });
    
} );

