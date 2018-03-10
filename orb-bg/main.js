
posY = $(window).height()/2;
posX = $(window).width()/2;

$(document).ready(intializeApp)

function intializeApp(){
    attachEventHandlers();
}
function attachEventHandlers(){
    $(window).resize(getMovementWindowSize);
}

function getMovementWindowSize(){
    posX = $(window).height()/2;
    posY = $(window).width()/2;
    console.log( 'x: ', posX, ' y: ', posY);
}

function getCircleRadius(element){
    var elementHeight = $(element).height();
    var elementRadius = elementHeight/2;
    return elementRadius
}

function bounceX(element, x){
    var xParam = posX - getCircleRadius(element);
    $(element).css({
        'transform':"translateX("+xParam+"px)"
    })
}function negBounceX(element, x){
    var xParam = posX - getCircleRadius(element);
    $(element).css({
        'transform':"translateX(-"+xParam+"px)"
    })
}
function bounceY(element, y){
    var yParam = posY - getCircleRadius(element);
    $(element).css({
        'transform':"translateY("+yParam+"px)"
    })
}
function negBounceY(element, y){
    var yParam = posY - getCircleRadius(element);
    $(element).css({
        'transform':"translateY(-"+yParam+"px)"
    })
}


function checkBoundaries(element){
    var winHeight = $(window).height();
    var winWidth = $(window).width();

    var elementTopOffset = $(element).offset().top;
    var elementLeftOffset = $(element).offset().left;
    console.log(checkWindowBottom(element, elementTopOffset, winHeight))
    console.log(checkWindowTop(element, elementTopOffset))
    console.log(checkWindowRight(element,elementLeftOffset, winWidth))   
    console.log(checkWindowLeft(element,elementLeftOffset, winWidth ))
}

function checkWindowBottom(element, offsetTop, winHeight){
    var elementBottom = $(element).offset().top +(2* getCircleRadius(element));
    return ( elementBottom > winHeight) 
}

function checkWindowTop(element, offsetTop){
    var elementTop = $(element).offset().top;
    return (0>=elementTop)
}

function checkWindowRight(element, offsetLeft, winWidth){
    var elementRight = $(element).offset().left+(2*getCircleRadius(element))
    return (elementRight > winWidth)
}
function checkWindowLeft(element, offsetLeft, winWidth){
    var elementRight = $(element).offset().left;
    return (0>=elementRight)
}


// function gameCheck(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve
//         })
//     })
// }