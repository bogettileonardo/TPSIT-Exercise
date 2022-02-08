"use strict"








function generaNumero(a,b)
{
	/// genera numero casuale tra a e b, quest'ultimo escluso!! ///
	let ris = Math.floor((b - a) * Math.random())+a;
	return ris;
}