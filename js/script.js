$(document).ready(function() {

    // Show or Hide Search Box when Search Icon is Clicked
    $("#search-icon").click(function() {
        $('.search-box').show();
        $(this).hide();
    });

    // Get Article when Button is Clicked
    $('.btn').click(function() {
        let articleTerm = $('#inputbox').val();
        getArticle(articleTerm);
    });

    // Function to Get Article
    function getArticle(articleTerm) {
        
    }
});