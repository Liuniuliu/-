document.onscroll = function(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector(".navbar").style.backgroundColor = "rgba(0,0,0,0.4)";
    }else{
        document.querySelector(".navbar").style.backgroundColor = "rgba(0,0,0,0)";
    }
}