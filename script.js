$(".subcontents").click(function(){
    $(this).css("background", "purple");
});
$("#navigation").click(function(){
    $(this).css({
        "background": "url('hero_chara_mario_update_pc.png')",
        "background-size": "contain", 
    });
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

    $( "#button2" ).click(function() {
      $(".mario").animate({
        opacity: .5,
        right: "+=50",
        height: "-=123"
      }, 10000, function() {
      });
    });
    $("#text").keydown(function(){
        var value=$(this).val();
        $("p").text(value);
    })