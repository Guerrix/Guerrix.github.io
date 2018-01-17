$(function(){
    $('.toggle').click(function(e){
        e.preventDefault();
        if($('body').hasClass('lightmode')){
            $('body').removeClass('lightmode');
            localStorage.setItem('jGuerraLightMode', 'FALSE');
        }else{
            $('body').addClass('lightmode');
            localStorage.setItem('jGuerraLightMode', 'TRUE');
        }
    });

    var lightmode = localStorage.getItem('jGuerraLightMode');
    if(lightmode == 'TRUE'){
        $('body').addClass('lightmode');
    }
});