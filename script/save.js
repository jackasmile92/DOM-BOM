function Save(){

	var type = document.getElementById("insurance type").selectedIndex;
	if (type == 0) {
       	type = "КАСКО"
	};
    if (type == 1) {
       	type = "ОСАГО"
    };
    if (type == 2) {
       	type = "ДАГО"
    };
	var number = document.getElementById("number").value;
	var owner = document.getElementById("name").value;
	var date = document.getElementById("date").value;
	var premium = document.getElementById("premium").value;
	var discount = document.getElementById("discount").value;


    
    if (type && number && owner && date) {
		var policy = new Policy(type, number, owner, date, premium, discount);
		var base = [];
		if(JSON.parse(localStorage.getItem("test3")) ){
		 	base = JSON.parse(localStorage.getItem("test3"));
	    }
		base.push(policy);
		localStorage.setItem("test3", JSON.stringify(base));


    }

	
}