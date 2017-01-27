var display_element;
var modulo_element;
var first_number = true;
var matrix_size = 3;

function initialize() 
{
    if (document.readyState == 'complete') 
	{
        display_element = document.getElementById("display");
		modulo_element = document.getElementById("modulo");
    }
	var as = document.getElementsByTagName("a");

	for(var i = 0;i<as.length;i++)
	{
		if(as[i].innerHTML == "Matrices")
		{
			//as[i].click();
		}
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
		else if(event.target.innerHTML == "Matrices")
		{
			displayMatrices();	
			initializeMatrix();
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

function displayMatrices()
{
	document.getElementsByClassName("panel-heading")[0].innerHTML = "Calculate determinant and inverse matrix modulo n";
    document.getElementsByClassName("panel-body")[0].innerHTML = "<div id=\"whole\"><div class=\"n-field-prefix\">N:</div><input type=\"number\" min=\"2\" max=\"9999999\"  id=\"n\" value=\"0\"><div id=\"matrix\"></div><button onclick=\"addLevel();\">+</button><button onclick=\"eraseLevel();\">-</button><button onclick=\"calculateDetInv();\">calculate</button><div id=\"matrixText\"></div><div id=\"inverse\"></div></div>";
}

function addLevel()
{	
	if(matrix_size==5)
		return false;
	
	var inputs = document.getElementsByClassName("matrix-input");
	var varArr = [];
    for(i = 0; i < matrix_size; i++) 
	{
        varArr[i] = [];
        for(j = 0; j < matrix_size; j++) 
		{
            varArr[i][j] = inputs[matrix_size*i+j].value;
        }
    }

	for(var i = -1; i<matrix_size*matrix_size-1;)
	{		
		i+=matrix_size;
		var input = document.createElement("input");
		input.className = "matrix-input";
		input.setAttribute('onfocus','changeMatrixInputStyleOnFocus(this)');
		input.setAttribute('type','number');
		input.setAttribute('min','-9999999');
		input.setAttribute('max','9999999');
		inputs[i].parentNode.insertBefore(input, inputs[i].nextSibling);
	}
	matrix_size++;
	var matrixDiv = document.getElementById("matrix");

	for(var i = 0; i<matrix_size;i++)
	{
		matrixDiv.innerHTML += "<input class=\"matrix-input\" type=\"number\" min=\"-9999999\" max=\"9999999\" onfocus=\"changeMatrixInputStyleOnFocus(this)\" type=\"text\"></input>";
	}	
	matrixDiv.innerHTML += "</br>";	
	for(i = 0; i < matrix_size-1; i++) 
	{
        for(j = 0; j < matrix_size-1; j++) 
		{
            inputs[matrix_size*i+j].value = varArr[i][j];
        }
    }
}
function initializeMatrix()
{
	var matrixDiv = document.getElementById("matrix");
	for(var i = 0;i<matrix_size;i++)
	{
		for(var j = 0; j<matrix_size;j++)
			matrixDiv.innerHTML += "<input class=\"matrix-input\"type=\"number\" min=\"-9999999\" max=\"9999999\" onfocus=\"changeMatrixInputStyleOnFocus(this)\" type=\"text\"></input>";
		matrixDiv.innerHTML += "</br>";
	}
}


function eraseLevel()
{
	if(matrix_size==2)
		return false;
	var inputs = document.getElementsByClassName("matrix-input");
	var brElement = document.getElementsByTagName("br")[parseInt(matrix_size-1)];
	brElement.parentNode.removeChild(brElement);
	for(var i = -1;;)
	{		
		i+=matrix_size;
		
		if(i>matrix_size*matrix_size -matrix_size)
			break;
		inputs[i].parentNode.removeChild(inputs[i--]);
	}
	matrix_size=matrix_size - 1;
	for(var i = 0;i<matrix_size;i++)
	{
		inputs[inputs.length-1].parentNode.removeChild(inputs[inputs.length-1]);
	}
}