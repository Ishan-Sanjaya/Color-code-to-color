document.getElementById("btn").onclick = function () {
  let colorCode = document.getElementById("color-input").value;

  document.getElementById("body").style.backgroundColor = colorCode;
};

$(document).keypress(function(e){
    if (e.which == 13){
        $("btn").click();
    }
});