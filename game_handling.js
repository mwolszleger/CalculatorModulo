function displayGame() {
    document.getElementsByClassName("panel-heading")[0].innerHTML = "Game";
    document.getElementsByClassName("panel-body")[0].innerHTML = "<div id=\"whole\"><div >Number n:</div><div id=\"numberToFactorize\">Loading number...</div><div>Divisor of n:</div><div class=\"n-field-prefix\">&nbsp;</div><input type=\"text\" onClick=\"erase();\" id=\"divisor\" value=\"1\"><div>Your name:</div><div class=\"n-field-prefix\">&nbsp;</div><input type=\"text\" onClick=\"erase();\" id=\"name\" value=\"Anonymous\"><div><button onclick=\"checkGame();\" type=\"button\">Check</button></div><div id=\"messageBox\">&nbsp;  </div><div id=\"resultsTable\">Loading table...</div></div>";
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
