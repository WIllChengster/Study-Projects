$(document).ready(initializeApp);

function initializeApp(){
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.movableElement').on('mousedown', mouseDown);

}
var initx;;
var inity;
var top;
var left;

function mouseDown(){
    initx = event.pageX;
    inity = event.pageY;
    topVal = parseFloat($('.movableElement').css('top'));
    leftVal = parseFloat($('.movableElement').css('left'));
    $('.moveBox').on('mousemove', moveMouse);
}

function moveMouse(){
    var x = initx;
    var y = inity
    moveElement(x,y)
    $(window).on('mouseup', release);
}

function moveElement(initx,inity){
    var finx = event.pageX;
    var finy = event.pageY;
    // var offTop = $('.movableElement').css('top');
    // var offLeft = $('.movableElement').css('left');
    var posX = finx - initx;
    var posY = finy -inity;
    $('.movableElement').css({'top': topVal+posY, 'left': leftVal+posX })
}

function release(){
    initx = event.pageX
    inity = event.pageY
    $('.moveBox').off('mousemove');
    $(window).off('mouseup');
}