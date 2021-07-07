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
        $.ajax({
  
            url: 'https://en.wikipedia.org/w/api.php',

            headers: {
                'Api-User-Agent':'derek_dhammaloka@yahoo.com'
            },

            data: {
                action: 'query',
                prop: 'revisions',
                reprop: 'content',
                format: 'json',
                origin: '*',
                list: 'search',
                srsearch: articleTerm,
            },

            success: function(data) {
                processData(data.query.search);
            },

            fail: function(err,xhr) {
                console.log(err);
            },


        });
    }

    // Function to Process Data
    function processData(data) {
        // Set Up Search Results Box
        let $searchResultsBox = $('.search-results');
        $searchResultsBox.html(``);

        data.forEach(function(obj) {
            let $mainSearchOutput = $(`<article></article>`);
            $mainSearchOutput.addClass('main-search-output');

            // Get Title
            let title = obj['title'];
            let heading = $('<h2></h2>').text(title);
        });
    }


});