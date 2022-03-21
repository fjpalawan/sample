function click_submit() {
	//get the value of fullname field and store it in a variable
	var fullname = document.getElementById("fullname").value;
	//get the value of age field and store it in a variable
	var age = document.getElementById("age").value;
	//initialize have_errors
	var have_errors = false;

	if ( "" == fullname ) {
		//if fullname field is empty, add CSS class
		document.getElementById("fullname").classList.add("error-field");
		have_errors = true;
	} else {
		//if fullname field is not empty, remove CSS class
		document.getElementById("fullname").classList.remove("error-field");
	}

	if ( "" == age || age <= 0 || age >= 150 ) {
		//if age field is empty, add CSS class
		document.getElementById("age").classList.add("error-field");
		have_errors = true;
	} else {
		//if age field is not empty, remove CSS class
		document.getElementById("age").classList.remove("error-field");
	}

	//if theres an error, dont submit
	if ( have_errors ) {
		document.getElementById("message").innerHTML = "Please fill up the fields in red";
		document.getElementById("message").classList.add("error-message");
		return false;
	} else {
		document.getElementById("message").innerHTML = "This is my personal phonebook";
		document.getElementById("message").classList.remove("error-message");
	}
}
