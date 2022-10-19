import $ from 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.min';
import '@fontsource/roboto';
import '@popperjs/core';


$('.navbar-menu').on('click', function(){
    $($('.navbar-nav')[0]).toggleClass('active');
});