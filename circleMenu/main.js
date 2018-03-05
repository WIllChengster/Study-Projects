

$(document).ready(initializeApp);

function initializeApp(){
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.innerCircle').on('click', openPie)
}

function openPie(){
    $('.pieContainer').toggleClass('hidden')
}
