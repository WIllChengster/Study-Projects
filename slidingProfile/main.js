

$(document).ready(initializeApp)

function initializeApp(){
    applyEventHandlers()
}

function applyEventHandlers(){
    $('.item1').on('mouseenter mouseleave', profile1Animation)
    $('.item2').on('mouseenter mouseleave', profile2Animation)
    $('.item3').on('mouseenter mouseleave', profile3Animation)
    $('.item4').on('mouseenter mouseleave', profile4Animation)

}

function profile1Animation(){
    $('.prof1').toggleClass('profilePic')
}
function profile2Animation(){
    $('.prof2').toggleClass('profilePic')
}
function profile3Animation(){
    $('.prof3').toggleClass('profilePic')
}
function profile4Animation(){
    $('.prof4').toggleClass('profilePic')
}