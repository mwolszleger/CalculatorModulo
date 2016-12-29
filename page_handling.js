var display_element;
var modulo_element;
var first_number = true;

function initialize() 
{
    if (document.readyState == 'complete') 
	{
        display_element = document.getElementById("display");
		modulo_element = document.getElementById("modulo");
    }
}

function changePage(event)
  {
		document.getElementsByClassName("active")[0].className = "";
		event.target.parentElement.className = "active";

		if(event.target.innerHTML == "Game")
        {
            displayGame();      

		}
        else if (event.target.innerHTML == "Temporary assumptions")
		{
			document.getElementsByClassName("panel-heading")[0].innerHTML = "Assumptions:";
			document.getElementsByClassName("panel-body")[0].innerHTML = "Kalkulator:<br><font color=\"green\">+</font><br><font color=\"green\">-</font><br><font color=\"green\">*</font><br>odwrotny<br>potęga<br>przeciwny<br><font color=\"green\">pole na podanie n</font><br>Clear<br>Backspace<br><font color=\"green\">Konkurs</font><br>";
		}
  }
  
function changeInput(ev)
{
	if(ev.target.innerHTML == "display:")
	{
		display_element.className = "input-focus";
		modulo_element.className = "";
	}
	else
	{
		display_element.className = "";
		modulo_element.className = "input-focus";
	}
}