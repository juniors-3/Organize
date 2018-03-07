$(function () {
    $("p").on("click", function(){
        console.clear();
        
        if($(this).is(".j")){
            console.log("true");
        }else{
            console.log("false");
        }
    });
    
    //has
    
    $("p").has("span").append("<sup> has Span </sup>");
    
    //not
    $("p").not(":contains('jQuery')").css("color","red");
    
    //filter
    $("p").filter(":contains('jQuery')").css({
        color: "blue",
        border: "1px solid red"
    });
    
    $("p").css({
        padding: "10px",
        background: "#eee"
    }).filter(function(index){
        return index % 2 === 1;
    }).css("background", "red");
    
    var mapa = $("p").map(function(indice, elemento){
    console.log(elemento);
        
                          });
});
