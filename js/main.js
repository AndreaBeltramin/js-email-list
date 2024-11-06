let listElements = document.getElementsByClassName("list-group-item");
console.log(listElements);

let listEmails = [];

for (i = 1; i < 10; i++) {
	fetch("https://flynn.boolean.careers/exercises/api/random/mail")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.response);
			listEmails.push(data.response);
			console.log(listEmails);
		});
}
for (i = 0; i < listElements.length; i++) {
	listElements[i].innerText = listEmails[i];
}
