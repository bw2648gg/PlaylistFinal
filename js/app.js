var addToHead = document.querySelector('head');  
    var cssLink = document.createElement('link'); 
    addToHead.appendChild(cssLink);
    cssLink.setAttribute('rel','stylesheet');
    cssLink.setAttribute('href','css/style.css');

    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    var boDy = document.querySelector('body')
    boDy.appendChild(wrapper);

//for loop
for (var i=0; i<4; i++){
     var divs = document.createElement('div');
     wrapper.appendChild(divs);
     divs.classList.add('wrapperDivs');
}
//appendchild method and wrapper variable 


//creating color variable
var color1= "linear-gradient(135deg,#0B132B 0%, #3A506B 100%)";
var color2= "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
var color3= "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
var color4= "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)"; 

var colorsArray = [color1,color2,color3,color4];
//console.log(colorsArray);
var wrapper_Divs = document.getElementsByClassName('wrapperDivs');
//console.log(wrapper_Divs);
var divOne = wrapper_Divs.item(0)
var divTwo = wrapper_Divs.item(1)
var divThree = wrapper_Divs.item(2)
var divFour = wrapper_Divs.item(3)

var allDivs = [divOne,divTwo,divThree,divFour];
//console.log(allDivs);
for (var i=0; i<4; i++){
    var myDiv = allDivs[i]
   //console.log(myDiv);
   myDiv.style.backgroundImage = colorsArray[i];
var update= document.createElement('section');
myDiv.appendChild(update)
update.setAttribute('id','ID'+[i]);
}



var today = new Date();
var hourNow = today.gethours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');

var $listHTML = $('ul').html();
$('ul').append($listHTML);

