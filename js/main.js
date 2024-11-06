let listElement = document.getElementsByClassName("list-group-item");
console.log(listElement);

listElement.forEach((element) => {
	listElement[i].textContent = "ciao";
});

// for (i = 0; i < 10; i++) {
// 	fetch("https://flynn.boolean.careers/exercises/api/random/mail")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data.response);
// 		});
// }
