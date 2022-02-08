"use strict"

let cont = []
let _txtLanci;
let _pMsg;

function init()
{
	_txtLanci = document.getElementById("txtLanci");
    _pMsg = document.getElementsByName("msg");

	for(let i = 0; i < 6; i++)
	{
		cont.push(0);
	}
	console.log (cont);
}
function genera()
{
	let lanci = _txtLanci.value;

	for(let i = 0; i < 6; i++)
	{
		cont[i] = 0;
	}

	for(let i = 0; i < lanci; i++)
	{
		let n = generaNumero(1, 7);
		cont[n - 1]++;
	}
	for(let j = 0; j < 6; j++)
	{
		_pMsg[j].innerHTML = "La faccia " + (j + 1) + " è uscita " + cont[j];
	}
}
function generaNumero(a,b)
{
	/// genera numero casuale tra a e b, quest'ultimo escluso!! ///
	let ris = Math.floor((b - a) * Math.random())+a;
	return ris;
}