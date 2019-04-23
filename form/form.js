
validateForm = e => {
	e.preventDefault();
	if (!isValidName()) {
		document.getElementById('name').style.borderColor="red";
		let output = "Пожалуйста, используйте только буквы!";
		document.getElementById("message-name").innerHTML = output;
	}
	if (!isValidTel()) {
		document.getElementById('tel').style.borderColor="red";
		let output = "Пожалуйста, используйте только данный формат!";
		document.getElementById("message-tel").innerHTML = output;
	}
	if (!isValidEmail()) {
		document.getElementById('email').style.borderColor="red";
		let output = "Пожалуйста, используйте один из указанных форматов!";
		document.getElementById("message-email").innerHTML = output;
	}
	if (!isFilledText()) {
		document.getElementById('text').style.borderColor="red";
		let output = "Пожалуйста, заполните поле!";
		document.getElementById("message-text").innerHTML = output;
	}
	if (isValidName() && isValidTel() && isValidEmail() && isFilledText()) {
		document.getElementById("form").submit();
	}
}

isValidName = () => {
	let reg = /^[а-яёa-z\s]+$/i;
	let userName = document.getElementById("name").value.trim();
	return reg.test(userName);
}

isValidTel = () => {
	let reg = /^\+[\d]{1}\([\d]{3}\)[\d]{3}-[\d]{4}$/g;
	let userTel = document.getElementById("tel").value;
	return reg.test(userTel);
}

isValidEmail = () => {
	let reg = /^[a-z-\.]+@[a-z]+\.[a-z]{2,6}$/i;
	let userEmail = document.getElementById("email").value;
	return reg.test(userEmail);
}

isFilledText = () => {
	let reg = /.+/gim;
	//метод trim() удаляет лишние пробелы с начала и конца строки, не трогает пробелы внутри строки
	//делается для невозможности отправки поля с одними только пробелами
	let userText = document.getElementById("text").value.trim();
	return reg.test(userText);
}

clearInputs = (e) => {
	let elem = e.target.id;
	document.getElementById(elem).removeAttribute("style");
	document.getElementById(`message-${elem}`).innerHTML = "";
 }

addListeners = () => {
	document.getElementById('form').addEventListener('submit', validateForm);
	document.getElementById('name').addEventListener("input", clearInputs);
	document.getElementById('tel').addEventListener("input", clearInputs);
	document.getElementById('email').addEventListener("input", clearInputs);
	document.getElementById('text').addEventListener("input", clearInputs);
}

window.onload = addListeners;

