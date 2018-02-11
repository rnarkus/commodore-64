$(document).ready(function(){
    var count=0;
    var arr= [];
    $( ".input-form" ).focus();
    $("main").hide();
    $( "#main .content" ).each(function() {
        arr.push($(this).attr("id"));
    });
    $(document).keypress(function(e){
        if(e.which == 13) {
            $(".element").html("");
            var inputText = $('input[name=textInput]').val();
            if (inputText == "" && count <= arr.length){
                $("#main #"+arr[count]).appendTo(".element");
                count++;
            }
            inputText = inputText.toLowerCase();
            inputText = inputText.replace(/\s/g, ''); //getting rid of Spaces
            $( "#main .content" ).each(function() {
                var name = $(this).attr("id");
                if ( name == inputText ){
                    $("#main #"+name).appendTo(".element");
                }
            });
            $('input[name=textInput]').val("");
        };
    });
});
