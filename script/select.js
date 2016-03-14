function Validation(){
	var ind = document.getElementById("insurance type").selectedIndex;
	var input = document.getElementById("number");
	console.log(input)
	if (ind == 0) {
       	input.setAttribute("pattern", "^[0][0-4][0-9][aA][tT][-][0-2][0-9][/][0-9]{5}$");
	};
    if (ind == 1) {
       	input.setAttribute("pattern", "^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$");
    };
    if (ind == 2) {
       	input.setAttribute("pattern", "^[0][0-4][0-9][gG][oO][-][0-2][0-9][/][0-9]{5}$");
    };
};