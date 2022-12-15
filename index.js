var gameOver= false;

$(".clickable").click(function(){
    var correctGuess=false;

    let id = $(this).attr("id");

    var life=parseInt($("#life").text());

    for(var i= 0;i < randomWord.word.lenght; i++){
        if(randomWord.word.charAT(i).toLowerCase()== id()){
            if(life>0 && ($(".fill_blanks").eq(i).html()== "_" || $(".fill_blanks")))
            $("fill_blanks").eq(i).html(id);
            correctGuess = true;

            if($("#blanks").text()=== rondomWord.word.toLowerCase()){
                $("#result").text("YOU WIN!!")
                correctGuess=true;
                gameOver=true;
            }
        }
    } 
})