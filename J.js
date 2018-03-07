$(function(){
    
    function onTarefaDeleteClick(){
        
       $(this).parent('.tarefa-item').unbind('click').hide('slow',function(){
           $(this).remove();
       });
    }
    
    
    function onTarefaItemClick(){
        var text = $(this).children('.tarefa-texto').text();
    }
    
    
    
    
});