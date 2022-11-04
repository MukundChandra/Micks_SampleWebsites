async function getData() {
	await fetch("https://catfact.ninja/fact").then(response => response.json()).then(data => showData(data));
}

function showData(data) {
	document.getElementById("fact").innerHTML = data.fact;
}