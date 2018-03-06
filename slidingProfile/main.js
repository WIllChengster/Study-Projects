

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
    $('.picture').toggleClass('profilePic')
    $('.picture').css('background-image','url(https://static.zerochan.net/Ryuu.%28Street.Fighter%29.full.324542.jpg)')
}
function profile2Animation(){
    $('.picture').toggleClass('profilePic')
    $('.picture').css('background-image','url(http://vignette4.wikia.nocookie.net/streetfighter/images/b/be/Akuma_sf4.jpg/revision/latest?cb=20091022184740)')
}
function profile3Animation(){
    $('.picture').toggleClass('profilePic')
    $('.picture').css('background-image','url(https://i.pinimg.com/736x/22/1f/a5/221fa5960065414c994938ebd655e1ce--ken-street-fighter-street-fighter-characters.jpg)')
}
function profile4Animation(){
    $('.picture').toggleClass('profilePic')
    $('.picture').css('background-image','url(http://www.writeups.org/wp-content/uploads/Sakura-Kasugano-Street-Fighters-d.jpg)')

}