// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

$('.thumb').click(function(){
    var thumbSrc = $(this).attr('src');
    $('#bigimage').attr('src', thumbSrc);
});

console.log($('thumbnails').children);



// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
