
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
//validacao de formulario de contato - Renan
function enviardados() {

    //valida nome - Renan
    if (document.dados.nome.value == "" ||
        document.dados.nome.value.length < 4) {
        alert("Preencha campo NOME corretamente!");
        document.dados.nome.focus();       
        return false;
    }

    //valida email - Renan
    if (document.dados.email.value == "" ||
        document.dados.email.value.indexOf('@') == -1 ||
        document.dados.email.value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.dados.email.focus();
        return false;
    }

    //valida mensagem nao vazia - Renan
    if (document.dados.mensagem.value == "") {
        alert("Preencha o campo MENSAGEM!");
        document.dados.mensagem.focus();
        return false;
    }

    //valida tamanho da mensagem - Renan
    if (document.dados.mensagem.value.length < 10) {
        alert("É necessario preencher o campo MENSAGEM pelo menos 10 caracteres!" );
        document.dados.mensagem.focus();
        return false;
    }
    //feedback apos envio com sucesso
    alert("Mensagem enviada com sucesso!");
    return true;
}


