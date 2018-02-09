$(document).ready(function(){
    var count=0;
    $( ".input-form" ).focus();
    $("main").hide();
    $(document).keypress(function(e){
        if(e.which == 13) {
            var inputText = $('input[name=textInput]').val();
            inputText = inputText.toLowerCase();
            inputText = inputText.replace(/\s/g, ''); //getting rid of Spaces
            $( "#main div" ).each(function() {
                var name= $(this).attr("class")
                if ( name== inputText ){
                    $("#main ."+name).appendTo(".element");
                    console.log($(".element").html());
                };
            });
            $('input[name=textInput]').val("");
        };
    });
});
