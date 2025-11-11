/*  Implement random quize */ 

// get the element and change value [300,500)
var num1 = Math.floor(Math.random()*200 + 300);
var MEl = document.getElementById('M');
if (MEl) { MEl.textContent = num1.toString(); }
var num2 = Math.floor(Math.random()*100 + 100);
var num3 = Math.floor(Math.random()*5 + 1);

// update all the answers -- practice
function setOptionText(input, text){
    if (!input) return;
    if (input.nextSibling && input.nextSibling.nodeType === 3){
        input.nextSibling.nodeValue = " " + text;
    } else {
        var lab = input.parentNode ? input.parentNode.querySelector("label") : null;
        if (lab) {
            lab.textContent = text;
        } else if (input.parentNode){
            input.parentNode.appendChild(document.createTextNode(" " + text));
        }
    }
}

(function(){
    var answers = document.getElementsByClassName('answer');
    var inputs = [];
    for (var i=0;i<answers.length;i++){
        var inp = answers[i].querySelector('input');
        if (inp) { inputs.push(inp); }
    }
    if (inputs.length >= 4){
        var a = Math.floor(Math.random()*20)+5;
        var b = Math.floor(Math.random()*20)+5;
        var c = Math.floor(Math.random()*20)+5;
        var d = Math.floor(Math.random()*20)+5;
        var ex1 = (num1 - a) + " + " + a;  // correct
        var ex2 = (num1 + b) + " - " + b;// correct
        var ex3 = (num1 + c) + " - " + (b);// wrong
        var ex4 = (num1 - d) + " + " + (c);// wrong
        var exprs = [ex1, ex2, ex3, ex4];
        for (var j=0;j<4;j++){ setOptionText(inputs[j], exprs[j]); }
        answers[0].dataset.correct = "1";
        answers[1].dataset.correct = "1";
        answers[2].dataset.correct = "0";
        answers[3].dataset.correct = "0";
    }
})();

// Elements -- div answer box  --- Click
function changeStyle(event){
    event.preventDefault();
    var classname = this.getAttribute('class');
    if (classname == "answer selected"){
        this.setAttribute('class', "answer");
    } 
    else {
        this.setAttribute('class', "answer selected");
    }
}
for (var i = 0; i<4; i++){
    var box = document.getElementsByClassName('answer')[i];
    if (box){ box.addEventListener('click',changeStyle,false); }
}

(function(){
    var form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', function(e){
        e.preventDefault();
        var selected = document.querySelectorAll('.answer.selected');
        if (selected.length !== 2){ alert("Select exactly two answers."); return; }
        var ok = 0;
        for (var i=0;i<selected.length;i++){
            if (selected[i].dataset && selected[i].dataset.correct === "1") ok++;
        }
        if (ok === 2){ alert("Correct!"); } else { alert("Try again."); }
    }, false);
})();
