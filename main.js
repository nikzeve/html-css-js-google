$(document).ready(function() {

    $('#icon-apps').click(function() {

        var sottomenu = $(this).next('.dropdown');

        if (sottomenu.is(':visible')) {
            sottomenu.hide();
        } else {
            $('.dropdown').hide();
            sottomenu.show();
        }
    });
});
