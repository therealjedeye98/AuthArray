

const name = document.getElementById("Name").value;
const surname = document.getElementById("Surname").value;
const age = document.getElementById("Age").value;
const email = document.getElementById("Email").value;
const password = document.getElementById("Password").value;
const confirmPassword = document.getElementById("ConfirmPassword").value;

//create array

var DbArray = [];

function signUp(){
	var myArray = [];

	myArray.push(name);
	myArray.push(surname);
	myArray.push(age);
	myArray.push(email);
	myArray.push(password);
	myArray.push(confirmPassword);

	if(passwordCheck(myArray) == true){
		DbArray.push(myArray);
		alert("Success");
	}else{
		alert("Oops");
	}
}


function passwordCheck(myArray){
	if(myArray[4] == myArray[5]){
		return true;
	}else{
		return false;
	}
}
