var side = document.querySelector('.ul1')
document.querySelector('.barsIon').addEventListener('click', function(){
    
        side.style.left="0%"
        document.querySelector('.barsIcon').style.transform = "scale(0)"
        document.querySelector('.removeIcon').style.transform = "scale(1.1)"
    })

document.querySelector('.removeIcon').addEventListener('click', function(){
        side.style.left="-80%"

        document.querySelector('.barsIcon').style.transform = "scale(1.1)"
        document.querySelector('.removeIcon').style.transform = "scale(0)"
    
})

var prevScrollpos = window.pageYOffset;
window.onscroll= function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos && prevScrollpos > 30){
        document.getElementById("topHeader").style.top = "-70";
    }else{
        document.getElementById("topHeader").style.top = "-70";
    }


    if(prevScrollpos > currentScrollPos && currentScrollPos > parseInt('300')){
        document.getElementById("scrollUp").style.right = "30px";
        document.getElementById("scrollUp").style.opacity = "1";
        
    }else{
        document.getElementById("scrollUp").style.opacity = "0";
        document.getElementById("scrollUp").style.right = "-10px";
    }
    prevScrollpos=currentScrollPos;
}

function toggle(element){
    var id = element.id + "-p"
    if(document.getElementById(id).style.height != "260px"){
        document.getElementById(id).style.height="260px"
        document.getElementById(id).style.paddingTop="10px"
        document.getElementById(element.id).style.color="rgb(255, 166, 0)"
    }else{
        document.getElementById(id).style.height="0px"
        document.getElementById(id).style.paddingTop="0px"
    }
    

}
