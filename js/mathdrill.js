(function(){
    var btn = document.querySelector("input[value='Click for multiplication drill']");
    if(!btn) return;
    btn.addEventListener("click", function(){
        var base = parseInt(document.getElementById("inputnumber3").value, 10);
        if(isNaN(base) || base < 1){ alert("Enter a number >= 1"); return; }
        var correct = 0;
        for(var i = 1; i <= 5; i++){
            var a = Math.floor(Math.random()*10)+1;
            var ans = prompt(base + " × " + a + " = ?");
            if(ans !== null && parseInt(ans,10) === base * a){
                correct++;
            }
        }
        alert("You got " + correct + " out of 5 correct.");
    }, false);
})();
