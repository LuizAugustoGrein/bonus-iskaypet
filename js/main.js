'use strict';

$(document).ready(function() {
    
    $('button').on('click', function () {
        if ($(this).hasClass('secondary-button')) {
            $(this).removeClass('secondary-button');
        } else {
            $(this).addClass('secondary-button');
        }
    });

});