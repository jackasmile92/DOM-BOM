function DeleteAll(){
	localStorage.clear();
}
function DeleteOne(){
	var check = document.getElementsByClassName("radio");
    var bar = JSON.parse(localStorage.getItem("test3"));
	if(check){
		for (var i = check.length - 1; i >= 0; i--) {
			if(check[i].checked){
				bar.splice(i,1);
			}
		};

	}
	localStorage.setItem("test3", JSON.stringify(bar));
}