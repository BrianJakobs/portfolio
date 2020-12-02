//(function(){
//  ('.menu-trigger').on('click', function() {
//    (this).toggleClass('active');
//    return false;
//  });
//});

document.querySelector(".menu-trigger").addEventListener('click', function () {
    'use strict';
    document.querySelector(".menu-trigger").classList.toggle('active');
//    return false;
});