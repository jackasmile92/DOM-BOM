function TableText(){
	var bar = JSON.parse(localStorage.getItem("test3"));

    var text = '<table><tr>'
    text = text+'<td>Тип</td><td>Номер полиса</td><td>ФИО</td>'
    text = text+'<td>Дата</td><td>Страховая премия</td><td>Скидка</td><td>Выбрать</td></tr>';
    
    if(bar){
		for (var i = bar.length - 1; i >= 0; i--) {
			text = text + "<tr>" + "<td>" + bar[i].type + "</td>";
			text = text + "<td>" + bar[i].number + "</td>";
			text = text + "<td>" + bar[i].owner + "</td>";
			text = text + "<td>" + bar[i].date + "</td>";
			text = text + "<td>" + bar[i].premium + "</td>";
			text = text + "<td>" + bar[i].discount + "</td>";
			text = text + "<td>" + '<input type="radio" class = "radio">' + "</td>" + "</tr>";
		};
	};
	text = text + "</table>";

	document.getElementById("table").innerHTML = text;

}