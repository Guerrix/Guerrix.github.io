$(function(){
    var winWidth = 0, totalClients = $('.testimonials blockquote').length, currentClient = 1;

    function setupClients(){
        winWidth = $(window).width();
        $('.testimonials').css('width', winWidth * totalClients);
        $('blockquote').css('width', winWidth + 'px');

        bqPadding = ((winWidth / 2 - 500) > 0) ? winWidth / 2 - 500 : 50;

        $('blockquote').css('padding-left', bqPadding + 'px');
        $('blockquote').css('padding-right', bqPadding + 'px');
    }

    function showNextClient(){
        if(currentClient > totalClients){
            currentClient = 1;
            console.log(currentClient, totalClients)
        }
        $('.testimonials').css('left', 0 - winWidth * (currentClient - 1));
        $('.testimonials blockquote:nth-child(' + (currentClient - 1) + ')').css('opacity', 0);
        $('.testimonials blockquote:nth-child(' + currentClient + ')').css('opacity', 1);
        currentClient = currentClient + 1;
    }

    $(window).resize(setupClients);
    setupClients();
    var clients = setInterval(showNextClient, 8000);

});