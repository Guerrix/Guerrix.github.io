$(function(){
    $('.toggle').click(function(e){
        e.preventDefault();
        if($('body').hasClass('lightmode')){
            $('body').removeClass('lightmode');
            lightImgs();
            localStorage.setItem('jGuerraLightMode', 'FALSE');
        }else{
            $('body').addClass('lightmode');
            darkImgs();
            localStorage.setItem('jGuerraLightMode', 'TRUE');
        }
    });

    function darkImgs(){
        $('.idevice').each(function(){
            $(this).attr('src', $(this).attr('src').replace('.png', '-dark.png'));
        });
    }

    function lightImgs(){
        $('.idevice').each(function(){
            $(this).attr('src', $(this).attr('src').replace('-dark.png', '.png'));
        });
    }

    var lightmode = localStorage.getItem('jGuerraLightMode');
    if(lightmode == 'TRUE'){
        $('body').addClass('lightmode');
        darkImgs();
    }else{
        lightImgs();
    }
});