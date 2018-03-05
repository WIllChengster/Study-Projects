$(document).ready(initializeApp);

function initializeApp(){
    applyEventHandlers()
}

function applyEventHandlers(){
    $('svg').on('mouseenter mouseleave', boxAnimation);
}

function boxAnimation(){
    $('.box').toggleClass('boxTransition');
}