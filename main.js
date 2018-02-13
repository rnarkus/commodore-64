$(document).ready(function(){
    var count=0;
    var arr= [];
    $( ".input-form" ).focus(); //focuses the inputform
    $("main").hide(); //hides main content
    $( "#main .content" ).each(function() { //
        var nameAtt = $(this).attr("id")
        arr.push(nameAtt);
        $("#commands-64").append("<p>-"+nameAtt+"</p>");
    });
    $(document).keypress(function(e){
        if(e.which == 13) {
            $(window).scrollTop($('.screen-64').offset().top);
            $(".element").html("");
            var inputText = $('input[name=textInput]').val();
            if (inputText == "" && count <= arr.length){
                $(".element").append($("#main #"+arr[count]).clone());
                if (count==arr.length){
                    count=0;
                }
                count++;
            }
            inputText = inputText.toLowerCase();
            inputText = inputText.replace(/\s/g, ''); //getting rid of Spaces
            $( "#main .content" ).each(function() {
                var name = $(this).attr("id");
                if ( name == inputText ){
                    $(".element").append($("#main #"+name).clone());
                }
            });
            $('input[name=textInput]').val("");
        };
    });
});
