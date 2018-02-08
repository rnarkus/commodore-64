

$(document).ready(function(){
    $( ".input-form" ).focus();
    $("main").hide();
    $(document).keypress(function(e){
        if(e.which == 13) {
            var inputText = $('input[name=textInput]').val();
            if (inputText == "Background"){
                $("#main .Background").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            if (inputText == "Commands"){

                $("#main .Commands").appendTo(".element");
                $('input[name=textInput]').val("")
            }

        };
    });
});
