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

$(function() {
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
});