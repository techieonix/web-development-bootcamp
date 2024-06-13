// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// $("button")

// $("h1").css("color", "green");
// console.log($("h1").css("font-size"));

// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
// $("h1").hasClass("margin-50");

// $("h1").text("Bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");
// $("h1").attr("class");

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key)
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// })

// $("h1").before("<button>New</button>")
// $("h1").after("<button>New</button>")
// $("h1").prepend("<button>New</button>")
// $("h1").append("<button>New</button>")

// $("button").remove();

$("button").click(function() {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin: "20%"});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});