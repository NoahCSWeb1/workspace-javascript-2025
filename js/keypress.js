var messageE = document.getElementById('message');
const showKey = (event)=>{
    document.getElementById("lastKey").textContent="You hit " + event.key;
};
const showPosition = (event) =>{
    document.getElementById("charactersLeft").textContent = " position ("+event.pageX +","+event.pageY+")";

};
messageE.addEventListener('keydown', showKey, false);
document.addEventListener("mousemove", showPosition)