function performOperationClick(ev)
{
	switch(ev.target.innerHTML)
	{
		case "+":			
			break;
		case "-":			
			break;
		case "*":			
			break;
		case "pow":			
			break;
		case "=":
			break;
		case "-x":
			break;
		case "1/x":
			break;
		case "&lt;-":
			backspaceClick();
			break;
		case "Clear":
			clearClick();
			break;
		default:
			alert("Wrong button clicked");
	}
}

function performNumberClick(ev)
{
	var focus_element = document.getElementsByClassName("input-focus")[0];
	if(focus_element.id == "modulo")
	{
		if(focus_element.value.length==2 || ev.target.innerHTML == ',')
			return false;
	}	
	if(focus_element.value == "0" & ev.target.innerHTML != ',')
	{
		focus_element.value = ev.target.innerHTML;
		return false;
	}
	focus_element.value +=ev.target.innerHTML;
}

function performCommaClick(ev)
{
	if(display_element.value.indexOf(",")>-1)
		return false;
	performNumberClick(ev);
}

function backspaceClick()
{
	display_element.value = display_element.value.length == 1 ? 0 : display_element.value.slice(0, -1);
}

function clearClick()
{
	display_element.value = "0";
	modulo_element.value = "0";
	first_number = true;
	//clean some other variables
}