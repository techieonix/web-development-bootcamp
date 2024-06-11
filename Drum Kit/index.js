// document.querySelectorAll("button")[0].addEventListener("click", function(){
//     alert("I got clicked!")
// });
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
