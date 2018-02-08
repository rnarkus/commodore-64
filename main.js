

$(document).ready(function(){
    $( ".input-form" ).focus();
    $("main").hide();
    $(document).keypress(function(e){
        if(e.which == 13) {
            var inputText = $('input[name=textInput]').val();
            inputText = inputText.toLowerCase();
            inputText = inputText.replace(/\s/g, ''); //getting rid of Spaces
            console.log(inputText);
            if (inputText == "background"){
                
                $("#main .Background").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "commands"){

                $("#main .Commands").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "screen"){

                $("#main .Screen").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "cassettetapes"){

                $("#main .cassettetapes").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "floppydisk"){

                $("#main .floppydisk").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "instructions"){

                $("#main .instructions").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "waittime"){

                $("#main .waittime").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else if (inputText == "accessories"){

                $("#main .accessories").appendTo(".element");
                $('input[name=textInput]').val("")
            }
            else{
                $("#main .error").appendTo(".element");
                $('input[name=textInput]').val("")
            }


        };
    });
});
