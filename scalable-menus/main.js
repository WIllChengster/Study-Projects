$(document).ready(initializeApp);

function initializeApp(){
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.movableElement').on('mousedown', mouseDown);

}

function mouseDown(){
    $('.moveBox').on('mousemove', moveMouse);
}

function moveMouse(e){
    var x = e.pageX + $('.movableElement').position().left;
    var y = e.pageY + $('.movableElement').position().top;
    console.log($('.movableElement').position().left, $('.movableElement').position().top);

    $('.movableElement').offset({top: e.pageY, left: e.pageX});
    $(window).on('mouseup', release);
}

function release(){
    $('.moveBox').off('mousemove');
    $(window).off('mouseup');
}