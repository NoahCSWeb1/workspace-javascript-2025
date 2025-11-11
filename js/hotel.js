//** test for object */
var guest = {
    name: "Zhang",
    date: " Nov 3, 2025",
    member: "diamond",
    otherguest: ["Mike","Cindy","Sally"],
    display: function(){ return this.name + this.otherguest}
};

var guestgroup = [];
// hotel registration
function reservation() {
    // get user reservation 
    var g = {
        name: document.getElementById('guestname').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        guestnum: document.getElementById('guestnum').value,
        room: document.getElementById('room').value
    };
    guestgroup.push(g);
    alert("Reservation saved for " + g.name);
}

function showbookings(){
    var message = "";
    for (var i = 0; i < guestgroup.length; i++){
        var g = guestgroup[i];
        message += (i+1) + ". " + g.name + " " + g.checkin + " - " + g.checkout + "\n";
    }
    if(message===""){
        alert("No reservations");
    }else{
        alert(message);
    }
}

//register event
document.getElementById('submit').addEventListener('click',reservation,false);
var listbtn = document.getElementById('lists');
if(listbtn){
    listbtn.addEventListener('click',showbookings,false);
}
