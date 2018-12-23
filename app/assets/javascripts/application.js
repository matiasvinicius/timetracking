// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


//Find user's location

function getLocation() {
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  }

  else{
    alert("Geolocation unavailable in your browser.");
  }
}

function showPosition(position){
  document.getElementsByClassName("catchLatitude")[0].value = position.coords.latitude;
  document.getElementsByClassName("catchLongitude")[0].value = position.coords.longitude;
}

function showError(error){
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("Request denied.");
      window.location='index';
    break;
    case error.POSITION_UNAVAILABLE:
      alert("Location unavailable.");
      window.location='index';
    break;
    case error.TIMEOUT:
      alert("The request has expired.");
      window.location='index';
    break;
    case error.UNKNOWN_ERROR:
      alert("Some unknown error happened.");
      window.location='index';
    break;
  }
}


//show position of checkin on google maps
function showMap(latitude, longitude){
  latlon=new google.maps.LatLng(latitude, longitude)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='250px';
  mapholder.style.width='500px';
 
  var myOptions={
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
}

//end

//Clock
function startTime(){
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();

  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  t=setTimeout('startTime()',500);
}

function checkTime(i){
  if (i < 10) i = "0" + i;
  return i;
}
//end

//Current date (mm/dd/yyyy)
function getDate(){
  var currentDate = new Date();
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear();

  document.getElementById('date').innerHTML = month + "/" + day + "/" + year;
}

//end

//Validation - Form

function validateForm(){
  if(document.getElementsByClassName("form-control")[0].value == ""){
    document.getElementById("situation").innerHTML = "Write a comment";
    return false;
  }

  if(document.getElementsByClassName("catchLatitude")[0].value == ""){
    document.getElementById("situation").innerHTML = "We're still finding your location, wait a few seconds and checkin again";
    return false;
  }
  
  if(document.getElementsByClassName("catchLongitude")[0].value == ""){
    document.getElementById("situation").innerHTML = "We're still finding your location, wait a few seconds and checkin again";
    return false;
  }
  return true;
}

//end