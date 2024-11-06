let listEmails = [];
for (i = 1; i <= 10; i++) {
	fetch("https://flynn.boolean.careers/exercises/api/random/mail")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.response);
			listEmails.push(data.response);

			if (listEmails.length == 10) {
				let listElements = document.getElementsByClassName("list-group-item");
				console.log(listElements);

				for (i = 0; i < listElements.length; i++) {
					listElements[i].innerText = listEmails[i];
				}
			}
		});

	console.log("chiamata", i);
	console.log("elementi", listEmails.length);
}
