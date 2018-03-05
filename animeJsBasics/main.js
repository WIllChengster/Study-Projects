$(document).ready(animation)

function animation(){
    var cssSelector = anime({
        targets: "#cssSelector .el",
        translateX: 1000,
        translateY: 500,
        borderRadius: '50%',
        backgroundColor:'#1',
        duration: 3000,
        direction: 'alternate',
        loop:true,
        duration: function (el, i){
            return 5000 + (i*500);
        }
    })
}
