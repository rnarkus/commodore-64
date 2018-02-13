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
            var $screen = $('.screen-64');
            //$(window).scrollTop($screen.offset().top - ($(window).height() - $screen.outerHeight(true)) / 2)
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
            $('html, body').animate({
                scrollTop: $screen.offset().top - ($(window).height() - $screen.outerHeight(true)) / 2
            }, 200);
            $('input[name=textInput]').val("");
        };
    });
});
