const submit = document.querySelector("#submit");
const date = document.querySelector("input");
const scopes = document.querySelectorAll(".horoscope section");

submit.addEventListener('click', getDate);

function getDate(){
	let month = date.value.split("-")[1];
	let day = date.value.split("-")[2];
	let year = date.value.split("-")[0];
	showHoroscope(month, day, year);
}

function showHoroscope(month, day, year){
	//reset all to not visible
	scopes.forEach(scope => scope.classList.add("hide"));

	//show current horoscope
	// scopes[0].classList.remove("hide");
	// if (month === "01"){
	// 	if (day > 20) {
	// 		show(scopes, 0);
	// 	} else {
	// 		show(scopes, 11);
	// 	}
	// }
	//rewriting as ternary statements. One statement, so no curly braces needed woohoo!
	if (month === "01") (day >= 20) ? show(scopes, 0) : show(scopes, 11);
	else if (month === "02") (day >= 19) ? show(scopes, 1) : show(scopes, 0);
	else if (month === "03") (day >= 21) ? show(scopes, 2) : show(scopes, 1);
	else if (month === "04") (day >= 20) ? show(scopes, 3) : show(scopes, 2);
	else if (month === "05") (day >= 21) ? show(scopes, 4) : show(scopes, 3);
	else if (month === "06") (day >= 21) ? show(scopes, 5) : show(scopes, 4);
	else if (month === "07") (day >= 23) ? show(scopes, 6) : show(scopes, 5);
	else if (month === "08") (day >= 23) ? show(scopes, 7) : show(scopes, 6);
	else if (month === "09") (day >= 23) ? show(scopes, 8) : show(scopes, 7);
	else if (month === "10") (day >= 23) ? show(scopes, 9) : show(scopes, 8);
	else if (month === "11") (day >= 22) ? show(scopes, 10) : show(scopes, 9);
	else if (month === "12") (day >= 22) ? show(scopes, 11) : show(scopes, 10);
	else show(scopes, 12);

	console.log(`You were born in ${year}`);
}


function show(array, index){
	array[index].classList.remove("hide");
}