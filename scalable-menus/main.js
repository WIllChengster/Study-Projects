$(document).ready(initializeApp);

function initializeApp(){

    attachEventHandlers();
}

function attachEventHandlers(){
    $('.movableElement').on('mousedown', movableElementMouseDown);
    $('.movableElement, body').on('mouseup', movableElementMouseUp);

}

function mousePos(){
    // console.log(event.pageX, event.pageY)
    
    return {x:event.pageX, y:event.pageY}
}

function movableElementMouseDown(){
    var pointer;
     $('.moveBox').on('mousemove', function(){
         pointer = mousePos()
         boxmove(pointer)
     })


}

function movableElementMouseUp(){
    $('.moveBox').off('mousemove')
}

function boxmove(asdf){
    console.log(asdf)

}