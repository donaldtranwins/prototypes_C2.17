//Create GLOBAL variable below here on line 2
var globalResult;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated', window.performance.now());
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', window.performance.now());
                globalResult = result;
                var firstMovie = result.feed.entry[0]['im:image'][2];
                (function featureSet3() {
                    for (var i = 0; i < result.feed.entry.length; i++) {
                        var imgObj = result.feed.entry[i]['im:image'][2].label;
                        var titleDirectorText = result.feed.entry[i].title.label;
                        var $img = $("<img src='" + imgObj + "'>");
                        var $p = $('<p>'+titleDirectorText+'</p>');
                        $('#main').append($img);
                        $('#main').append($p);
                    }
                })();
            }
        });
        console.log('End of click function', window.performance.now());
    });
});