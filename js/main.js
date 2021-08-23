$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })

    // responsive bars
    $('.main-bar').click(function(){
        $('.navbar .menu').toggleClass('active')
    })
})