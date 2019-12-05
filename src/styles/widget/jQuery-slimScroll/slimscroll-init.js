$(document).ready(function () {
    $(".comman-scroll").slimScroll({
        color: '#a19e9e',
        size: '5px',
        //height: '180px',
        //height: 'auto',
        alwaysVisible: false,
        railVisible: true,
        //position: 'left',
        distance: '0px',
        railColor: '#020202',
        railOpacity: 0.05,
        //wheelStep: 10,
        allowPageScroll: false,
        disableFadeOut: false
    });
    $(".comman-card .comman-scroll").slimScroll({
        height: '265px'
    });
//    $(".h170-scroll.comman-scroll").slimScroll({
//        height: '170px'
//    });
    $('.collapse').on('shown.bs.collapse', function () {
        $(".comman-scroll").slimScroll({
            color: '#a19e9e',
            size: '5px',
            alwaysVisible: true,
            railVisible: true,
            railColor: '#020202',
            railOpacity: 0.05,
            allowPageScroll: false,
            disableFadeOut: false
        });
    });

    $('.carousel').on('slid.bs.carousel', function () {
        $(".comman-scroll").slimScroll({
            color: '#a19e9e',
            size: '5px',
            alwaysVisible: true,
            railVisible: true,
            railColor: '#020202',
            railOpacity: 0.05,
            allowPageScroll: false,
            disableFadeOut: false
        });
        $('.collapse').on('show.bs.collapse', function () {
            $(".comman-scroll").slimScroll({
                color: '#a19e9e',
                size: '5px',
                alwaysVisible: true,
                railVisible: true,
                railColor: '#020202',
                railOpacity: 0.05,
                allowPageScroll: false,
                disableFadeOut: false
            });
        });

        $('.carousel').on('slide.bs.carousel', function () {
            $(".comman-scroll").slimScroll({
                color: '#a19e9e',
                size: '5px',
                alwaysVisible: true,
                railVisible: true,
                railColor: '#020202',
                railOpacity: 0.05,
                allowPageScroll: false,
                disableFadeOut: false
            });
        });
    });

});

