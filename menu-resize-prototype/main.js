window.addEventListener('load', initializeApp);
var leftCol=null
var hoverLoop=null

function initializeApp(){
    leftCol = document.getElementById('rightBorder');
    attachEventHandlers();
}

function attachEventHandlers(){
    // var leftCol = document.getElementsByClassName('rightBorder');
    // leftCol.addEventListener('mousedown', borderClick)
    leftCol.addEventListener('mousedown', borderClick);
    
}


function borderClick(){
    hoverLoop = setInterval(dragResize,10);
    console.log('clicked')
    leftCol.onmousemove = hoverLoop;
}

function dragResize(){
    console.log('resizing..');
    window.addEventListener('mouseup', release);
    var cursx = window.pageX;
    var cursy = window.pageY 
    console.log(cursx, cursy)

}

function release(){
    window.removeEventListener('mouseup', dragResize);
    clearInterval(hoverLoop);

}