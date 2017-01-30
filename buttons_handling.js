var display_value = 0;
var first_operator_flag = true;
var last_operator = "";
var first_operator_zero = true;
var last_equal = false;

function performOperationClick(ev)
{
	if(!isCorrectFilled())
		return false;
	if(ev.target.innerHTML != "=")
		last_operator = ev.target.innerHTML;
	first_operator_zero = false;
	/*if(first_operator_flag)
	{
		first_operator_flag = false;		
		if(ev.target.innerHTML == "-x")
		{
			display_element.value = oppositeElement(parseFloat(display_value), parseFloat(modulo_element.value));
		}
		if(ev.target.innerHTML == "1/x")
		{
			display_element.value = inverseElement(parseFloat(display_value), parseFloat(modulo_element.value));
		}
		
		display_value = display_element.value;
		return true;
	}*/
	switch(ev.target.innerHTML)
	{
		case "+":
			if(!last_equal)							
				display_element.value = addition(parseFloat(display_value), parseFloat(display_element.value), parseFloat(modulo_element.value));
			else
				last_equal = false;				
			break;
		case "-":
			if(!last_equal)
				display_element.value = subtraction(parseFloat(display_value), parseFloat(display_element.value), parseFloat(modulo_element.value));
			else
				last_equal = false;	
			break;
		case "*":
			if(!last_equal)
				display_element.value = multiplication(parseFloat(display_value), parseFloat(display_element.value), parseFloat(modulo_element.value));	
			else
				last_equal = false;				
			break;
		case "pow":
			if(!last_equal)
				display_element.value = power(parseFloat(display_value), parseFloat(display_element.value), parseFloat(modulo_element.value));	
			else
				last_equal = false;				
			break;
			
		case "-x":
			if(!last_equal)
			{
				/*if(first_operator_flag)
				{
					display_value = display_element.value;
					first_operator_flag = false;
				}*/
				display_element.value = oppositeElement(parseFloat(display_element.value), parseFloat(modulo_element.value));
			}
			else
				last_equal = false;
			break;
			
		case "1/x":
			if(!last_equal)
			{
				/*if(first_operator_flag)
				{
					display_value = display_element.value;
					first_operator_flag = false;
				}*/
				if(inverseElement(parseFloat(display_element.value), parseFloat(modulo_element.value)) == "Brak elementu odwrotnego")
					display_element.className = "input-alert"
				else
					display_element.value = inverseElement(parseFloat(display_element.value), parseFloat(modulo_element.value));
			}
			else
				last_equal = false;
			break;
				
		case "=":
			doEquals();
			break;
		default:
			alert("Wrong button clicked");
	}
	display_value = display_element.value;
}

function performNumberClick(ev)
{
	if(!first_operator_zero)
	{
		display_element.value = "0";
		first_operator_zero = true;
	}
	var focus_element = document.getElementsByClassName("input-focus")[0];
	if(focus_element.value == "0")
	{
		focus_element.value = ev.target.innerHTML;
		return false;
	}
	focus_element.value +=ev.target.innerHTML;
}

function doEquals()
{
	var buttons = document.getElementsByTagName("button");
	for(var i = 0;i<buttons.length;i++)
	{
		if(buttons[i].innerHTML == last_operator)
		{			
			buttons[i].click();
			break;
		}
	}
	last_equal = true;
}

function backspaceClick()
{
	display_element.value = display_element.value.length == 1 ? 0 : display_element.value.slice(0, -1);
}

function clearClick()
{
	display_element.value = "0";
	modulo_element.value = "0";
	display_value = "0";
	first_operator_flag = true;
	first_operator_zero = true;
	last_operator = "";
	//clean some other variables
}

function isCorrectFilled()
{
	var flag = true;
	if(isNaN(parseFloat(display_element.value)))
	{
		flag = false;
		display_element.className = "input-alert";
	}
	if(!(modulo_element.value >=2 && modulo_element.value% 1 === 0))
	{
		flag = false;
		modulo_element.className = "input-alert";
	}
	return flag;
}