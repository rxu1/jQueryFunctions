$(".subcontents").click(function(){
    $(this).css("background", "purple");
});
$( "#button2" ).click(function() {
  $(".mario").animate({
    opacity: .1,
    // right: "+=500",
    height: "-=500"
  }, 10000, function() {
  });
});
var mariosize = 123;
$("#navigation").click(function(){
    $(this).css({
        "background": "url('hero_chara_mario_update_pc.png')",
        "background-size": "contain", 
        });
    $("#navigation").addClass("mario");
})
$("#header").click(function (){
    $(this).hide();
});
$("#button1").click(function(){
    $(this).slideDown();
})
$("#button3").hover(function(){
    $("#main_content").fadeIn();
    $(this).slideUp();
})

$(".btn").click(function(){
    $("#main_content").fadeOut();
})
$("#wrapper").hover(function(){
    $(this).html();
    })

    $("#text").keydown(function(){
        var value=$(this).val();
        $("p").text(value);
    })

$(".btn00").click(function(){
    $(".mario").animate({
        opacity: 1.0,
        height: mariosize,
    }, 1000, function(){
    })
})