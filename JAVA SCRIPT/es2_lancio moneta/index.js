"use strict"

function lanciaMoneta() 
{
	let _txtLanci = document.getElementById("txtLanci");
	let _lblCroce = document.getElementById("lblCroce");
	let _lblTesta = document.getElementById("lblTesta");

	let cont1 = 0;
	let cont2 = 0;

	let nLanci = parseInt(_txtLanci.value);
	for(let i = 0; i < nLanci; i++)
	{
	  let n = generaNumero(0,2)
	  if(n == 0)
	       cont1++;
	  else
	       cont2++;
	}
	 _lblCroce.textContent = "N. di volte in cui è uscito croce: " + cont1.toString();
	 _lblTesta.textContent = "N. di volte in cui è uscito testa: " + cont2.toString();
}
function generaNumero(a,b)
{
	/// genera numero casuale tra a e b, quest'ultimo escluso!! ///
	let ris = Math.floor((b - a) * Math.random())+a;
	return ris;
}