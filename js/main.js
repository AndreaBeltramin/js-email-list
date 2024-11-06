let listElements = document.getElementsByClassName("list-group-item");
console.log(listElements);

for (i = 0; i < 10; i++) {
	fetch("https://flynn.boolean.careers/exercises/api/random/mail")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.response);
			for (i = 0; i < listElements.length; i++) {
				listElements[i].textContent = data.response;
			}
		});
}
