(function(){
    var add = document.getElementById("add");
    var remove = document.getElementById("remove");
    var list = document.getElementById("todo");
    if(add){
        add.addEventListener("click", function(){
            var txt = prompt("Add an item:");
            if(txt && list){
                var li = document.createElement("li");
                li.textContent = txt;
                list.appendChild(li);
            }
        }, false);
    }
    if(remove){
        remove.addEventListener("click", function(){
            if(list && list.lastElementChild){
                list.removeChild(list.lastElementChild);
            }
        }, false);
    }
})();
