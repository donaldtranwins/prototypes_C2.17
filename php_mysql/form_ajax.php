<?php

?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <pre>
        <form method="post">
            Food: <input name="title" type="text">
            Details: <input name="details" type="text">
            UserID: <input type="number" min="0" max="5" name="user_id">
            <button type="button" onclick="ajax()">POST</button>
            Success: <input name="timestamp" disabled>
        </form>
        <div id="output"></div>
    </pre>
    <script>
        var success = null;
        function listItemsInObj(object, prefix) {
            var list = '';
            for (var key in object) {
                var prepend = prefix || "";
                list += prepend + key + parse(object[key]) +"\n";
                if (typeof object[key] === 'object') {
                    prepend += "> ";
                    let nested = listItemsInObj(object[key], prepend);
                    list += nested;
                } else {
                }
            }
            function parse(param){
                return typeof param === 'object' ? ':' : ' '+param;
            }
            return list;
        }
        function ajax(){
            var title = $('input[name=title]').val();
            var details = $('input[name=details]').val();
            var user_id = $('input[name=user_id]').val();
            $.ajax({
                url: 'index_ajax.php',
                method: 'post',
                dataType: 'json',
                success: function(response){
                    success = response;
                    let div = listItemsInObj(response);
                    console.log('success: ', response);
                    $(':text').val('SUCCESS');
                    $(':disabled').val(response.time.timestamp);
                    $('#output').html(div);
                },
                error: function(response){
                    $('input:lt(2)').val('FAILED');
                    console.log('error: ', response);
                },
                data: {
                    title: title,
                    details: details,
                    user_id: user_id
                }
            });
        }
    </script>
<?php

?>