
/* função para mostrar o menu ao clicar no ícone de barrinhas no celular - matheus */
function openNav(){

	var x = document.getElementById("navigation");

	if(x.className === "navigation"){
		x.className += " menujs"; /* adiciona a classe criada para tela de celular ao clicar no ícone de menu - matheus */
		document.getElementById("threeline-icon").innerHTML = "<a>&cross;</a>"; /* troca o icone para um 'x' para fechar o menu - matheus */
	} else {
		x.className = "navigation"; /* remove a classe menujs para fechar o menu - matheus */
		document.getElementById("threeline-icon").innerHTML = "<a>&#9776;</a>"; /* volta o ícone de menu - matheus */
	}

}