function initMap() {
    const uluru = { lat: 34.045798, lng: -118.239594 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  function JoinMembership(){
    prompt("Enter Name:","David");
    prompt("Enter Email ID:","davidJ@gmail.com");
    alert("You have successfully registered!");
}
function subscribe(){
    alert("Thanks! for subscribing");
}
function contact(){
    alert("W'll contact you soon...");
}
function order(){
    prompt("Enter your Name:")
    alert("Your Order has been placed successfully.");
}
