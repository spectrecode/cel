var menuAll = require('./libs/menu.js');
    scrollElement = require('./libs/scrollingElement.js');

var menuGeneral = new menuAll
    sectionScroll = new scrollElement;

// Menú Mobile
var btnBurguerV= document.getElementsByClassName("hamburger-menu")[0];
// var btnBurguerH= document.getElementsByClassName("hamburger-menu")[1];


var idLienzo = document.getElementById("container");
menuGeneral.menuVertical(btnBurguerV, idLienzo);
// menuGeneral.menuHorizontal(btnBurguerH);

// create a simple instance
var elContain = document.getElementById('container');
// by default, it only adds horizontal recognizers
var mc = new Hammer(elContain);
// listen to events...
if(btnBurguerV.offsetLeft > 0){
  mc.on("swipeleft", function(ev) {
    btnBurguerV.click();
  });
}
