$('.flip-card .flip-card-inner').click(function() {
    $(this).closest('.flip-card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
})
$(' .project-card .project-card-inner').click(function() {
    $(this).closest('.project-card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
})