function Imie()
{
	do{
var imie = prompt("Jak się nazywasz?");
}while(imie==null || imie=="")
return imie;
}

function Zagraj() 
{
  x.play();
}
function Zatrzymaj() 
{
  x.pause();
}

function Iloczyn()
{
var x = Math.floor(Math.random(1)*100+1);
var y = Math.floor(Math.random(1)*100+1);
var z=prompt("Iloczyn: "+y+" i "+x);
z = parseInt(z);
if(z==x*y)
	{
	alert("Git Gut: "+z);
	wynik++;
	}else if(isNaN(z)){
	alert("Wpisz liczbę!!");
		}else{
			alert("Nicht Gut: "+z);
			}
return z;
}
function Suma()
{
var x = Math.floor(Math.random(1)*500+1);
var y = Math.floor(Math.random(1)*500+1);
var z=prompt("Suma: "+y+" i "+x);
z = parseInt(z);
if(z==x+y)
	{
	alert("Git Gut: "+z);
	wynik++;
	}else if(isNaN(z)){
	alert("Wpisz liczbę!!");
		}else{
			alert("Nicht Gut: "+z);
			}
return z;
}
function Różnica()
{
	do{
var x = Math.floor(Math.random(1)*500+1);
var y = Math.floor(Math.random(1)*500+1);
	}while(x<y)
var z=prompt("Różnica: "+x+" i "+y);
z = parseInt(z);
if(z==x-y)
	{
	alert("Git Gut: "+z);
	wynik++;
	}else if(isNaN(z)){
	alert("Wpisz liczbę!!");
		}else{
			alert("Nicht Gut: "+z);
			}
return z;
}
function Reszta()
{
	do{
var x = Math.floor(Math.random(1)*100+1);
var y = Math.floor(Math.random(1)*10+1);
	}while(x<y)
var z=prompt("Reszta z dzielenia: "+x+" i "+y);
z = parseFloat(z);
if(z==x%y)
	{
	alert("Git Gut: "+z);
	wynik++;
	}else if(isNaN(z)){
	alert("Wpisz liczbę!!");
		}else{
			alert("Nicht Gut: "+z);
			}
return z;
}
function Potęga()
{
var x = Math.round(Math.random(1)*15+1);
var y = Math.round(Math.random(1)*4+1);
var z=prompt(x+" do Potęgi "+y);
z = parseFloat(z);
if(z==x**y)
	{
	alert("Git Gut: "+z);
	wynik++;
	}else if(isNaN(z)){
	alert("Wpisz liczbę!!");
		}else{
			alert("Nicht Gut: "+z);
			}
return z;
}

function licz()
{
return wynik;
}



