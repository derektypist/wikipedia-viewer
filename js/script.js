$(document).ready(function() {

    // Show or Hide Search Box when Search Icon is Clicked
    $("#search-icon").click(function() {
        $('.search-box').show();
        $(this).hide();
    });

    // Show or Hide Search Box when Search Icon is Selected on Key Down
    $("#search-icon").keydown(function() {
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

            // Get Title and Create Heading h2
            let title = obj['title'];
            let $heading = $('<h2></h2>').text(title);

            // Get Snippet and Create Paragraph
            let $para = $('<p></p>').html(obj['snippet']);

            // Get PageID and Create Anchor Element
            let $a = $('<a></a>').attr(`href`,`https://en.wikipedia.org/?curid=${obj['pageid']}`).attr(`target`,`_blank`);

            // Create List Element
            let $list = $('<li></li>');

            // Append Heading and Paragraph to the List Item
            $list.append($heading);
            $list.append($para);

            // Create Unordered List
            $('<ul></ul>').append($list).appendTo($a);

            // Add to Main Search Output
            $mainSearchOutput.append($a);

            // Add to Search Results Box
            $searchResultsBox.append($mainSearchOutput);

        });
    }


});