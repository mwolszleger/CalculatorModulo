function displayGame() {
    document.getElementsByClassName("panel-heading")[0].innerHTML = "Game";
    document.getElementsByClassName("panel-body")[0].innerHTML = "<div >Number n:</div><div id=\"numberToFactorize\">Loading number...</div><div>Divisor of n:</div><div><input type=\"text\" onClick=\"erase();\" id=\"divisor\" value=\"1\"></div><div>Your name:</div><div><input type=\"text\" onClick=\"erase();\" id=\"name\" value=\"Anonymous\"></div><button onclick=\"checkGame();\" type=\"button\">Check</button><div id=\"messageBox\">&nbsp;  </div><div id=\"resultsTable\">Loading table...</div>";
    $.ajax({
        url: 'numberToFactorize.php',
        complete: function (response) {
            $('#numberToFactorize').html(response.responseText);
        },
        error: function () {
            $('#numberToFactorize').html('Error while downloading results table');
        }
    });
    $.ajax({
        url: 'resultsTable.php',
        complete: function (response) {
            $('#resultsTable').html(response.responseText);
        },
        error: function () {
            $('#resultsTable').html('Error while downloading results table');
        }
    });
}
function checkGame() {
    $('#divisor').val()
    $.post(
        "saveToDatabase.php",
        {

            p: $('#divisor').val(),
            player: $('#name').val(),
            n: $('#numberToFactorize').text()
            
        },
        function (data) {
            if (data == 'true')
            {
                displayGame();
                $('#messageBox').text('SUCCEEDED');

            }
            if (data == 'false')
            {
                $('#messageBox').text('FAILED');
            }

           
        }
    )
}
function erase() {
    $('#messageBox').text(String.fromCharCode(160));
}
