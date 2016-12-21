function changePage(event)
  {
		document.getElementsByClassName("active")[0].className = "";
		event.target.parentElement.className = "active";
		if(event.target.innerHTML == "Calculator")
		{
			document.getElementsByClassName("panel-heading")[0].innerHTML = "Modulo Calculator";
			document.getElementsByClassName("panel-body")[0].innerHTML = "<div id=\"inputs\"><input type=\"text\" id=\"display\" value=\"0\"><input type=\"text\" maxlength=\"2\" id=\"modulo\" value=\"0\"></div>";
		}
		else if(event.target.innerHTML == "Game")
		{
		}
		else
		{
			document.getElementsByClassName("panel-heading")[0].innerHTML = "Assumptions:";
			document.getElementsByClassName("panel-body")[0].innerHTML = "Kalkulator:<br>+<br>-<br>*<br>odwrotny<br>potęga<br>przeciwny<br>pole na podanie n<br>Clear<br>Backspace<br>Konkurs<br>";
		}
  }