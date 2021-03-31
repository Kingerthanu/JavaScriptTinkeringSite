ele = document.getElementsByClassName("nav-link");
ele[1].className = "nav-link disabled";
delete ele;
ele = document.getElementsByClassName("nav-item");
ele[1].className = "nav-item active";
delete ele;
mapboxgl.accessToken = 'pk.eyJ1Ijoia2luZ2VydGhhbnUiLCJhIjoiY2ttNzB6eTV5MDc4cjJvcWxqeDJwcnZhMyJ9.h5HKddr1ETPsQ6QAYOI29Q';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/kingerthanu/ckm716i689d8417qs5otkyqer', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});