document.getElementById("buttonCalcular").addEventListener("click", calcular);


function calcular( ){
    const nome = document.getElementById("nome").value.trim();
    const bebida = document.querySelector('input[name="bebida"]:checked');
    const listDocesSalgados = document.querySelectorAll('.doces-salgados input[type="checkbox"]:checked');
    const valor = document.getElementById("valor");

    validarCampos(nome,bebida)

    let total = parseFloat(bebida.value);
    let nomeBebida = bebida.parentElement.textContent.trim();
    let listProdutos = [];
    listProdutos.push(nomeBebida)

    listDocesSalgados.forEach(item => {
        total += parseFloat(item.value);
        listProdutos.push(item.dataset.nome);
    });


    valor.innerHTML = `
        <h3> Pedido </h3>
        <p><strong>Cliente:</strong> ${nome}</p>
        <p><strong>Itens selecionados:</strong> ${listProdutos.join(", ")}</p>
        <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
    `;
}

function validarCampos(nome, bebida){
    if (!nome) {
        alert("informe o nome do cliente.");
        return;
    }

    if (!bebida) {
        alert("Selecione uma bebida.");
        return;
    }


}