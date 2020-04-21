//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//clicking on X and removing the li
$("ul").on("click", "span", function(event){
    //this refers to the span 
    $(this).parent().fadeOut(500, function(){
        //this refers to the li 
        $(this).remove();
    });
    //stops the propagation to other elements
    event.stopPropagation();
})

//adding new toDo
$("input[type='text']").keypress(function(event){
    //when enter key is pressed
    if(event.which === 13)
    {   //grabing the input from the text
        var toDoText = $(this).val();
        $(this).val("");
        //adding the new li to the ul
        $("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " + toDoText + "</li>");
    }

    
});

//fa-plus icons click event toggles the input form
$(".fa-plus").click(function(){
    
    $("input[type='text']").fadeToggle(500);
});