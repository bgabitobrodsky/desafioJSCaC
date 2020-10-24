const precios = {
	'pase_dia':30,
	'pase_completo':50,
	'pase_dos':45,
}

const iPaseDia = document.getElementById('pase_dia');
const iPaseCompleto = document.getElementById('pase_completo');
const iPaseDos = document.getElementById('pase_dosdias');

const btnCalcular = document.getElementById('calcular');

const resumen = document.getElementById('lista-productos');
const total = document.getElementById('suma-total');

btnCalcular.onclick = () => {
	var pDia = iPaseDia.value * precios.pase_dia;
	var pCompleto = iPaseCompleto.value * precios.pase_completo;
	var pDos = iPaseDos.value * precios.pase_dos;
	var tot = pDia + pCompleto + pDos;
	if(tot > 0){
		var html = '<table width="100%"><tr><th>Articulo</th><th>Cantidad</th><th>Precio</th></tr>';
		if(pDia > 0)
			html += '<tr><td>Pase de un día</td><td>' + iPaseDia.value + '</td><td>$' + precios.pase_dia + '</td></tr>';
		if(pCompleto > 0)
			html += '<tr><td>Pase completo</td><td>' + iPaseCompleto.value + '</td><td>$' + precios.pase_completo + '</td></tr>';
		if(pDos > 0)
			html += '<tr><td>Pase de finde</td><td>' + iPaseDos.value + '</td><td>$' + precios.pase_dos + '</td></tr>';
		html += '</table>';
		resumen.innerHTML = html;

		total.innerHTML = tot;
	}
}
