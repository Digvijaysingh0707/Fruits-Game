var playing=false;
var score;
var trialsleft;
var step;
var action;

var fruits=['apple','banana','grapes','orange','pineapple'];
$(function(){
    $("#startreset").click(function(){
        if(playing==true){
            location.reload();
        }else{
            playing=true;
            score=0;
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft=3;
            addHearts();
            $("#startreset").html("Reset Game");
            startAction();
        }

    });
});
function addHearts(){
    for(i=0;i<trialsleft;i++){
        $("#trialsleft").append(' <img src="images/heart.png" class="life"> ');
    }
}
function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});

    step=1+Math.round(5*Math.random());
    action=setInterval(function(){
        $("#fruit1").css('top',
        $("#fruit1").position().top+step);

        if($("#fruit1").position().top>
        $("#fruitsContainer").height()){

        }


    },10);

}
function chooseFruit(){
    $("#fruit1").attr('src','images/'+fruits[Math.round(4*Math.random())]+'.png')
}