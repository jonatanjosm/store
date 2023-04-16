// Main Js File
$(document).ready(function () {
    'use strict';    

    //Load components
    $('header').html(header())
    $('footer').html(footer())
    $('#brands-carousel').html(loadBrandsIcons())
    loadCartProducts()
    main();
});
