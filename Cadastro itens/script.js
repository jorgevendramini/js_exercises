//Obter elementos do DOM pelos Id's

const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");
const btnVerEstoque = document.getElementById("btn-ver-estoque");

//getElementByID - obter elementos específicos pelo ID

let estoque = [];
//Criar array vazio

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    //Previne o comportamento padrão do formulário HTML ao ser submetido.

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const dataEntrada = document.getElementById("data-entrada").value;

    //value é usado para obter o valor da ID

    const item = {
        nome,
        preco,
        quantidade,
        dataEntrada
    };

    //cria objeto unificando todos os valores a um item

    estoque.push(item);
    alert("Item adicionado!");
    //adiciona item

    formCadastro.reset();
});

//Adiciona evento para o botão ver estoque

btnVerEstoque.addEventListener("click", () => {
    //Verifique se o estoque está vazio
    if(estoque.length === 0){
        alert("Não há itens no estoque");
        return;
    }
    //.length expressão que retorna o número de elementos de um array

    tabela.querySelector("tbody").innerHTML = "";
    // seleciona campo da tabela

    estoque.forEach( (item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.preco}</td>
        <td>${item.quantidade}</td>
        <td>${item.dataEntrada}</td>
        <td><button>Remover do estoque</button></td>
        `;

        //Criou um elemento novo dentro do HTML atraves da função createElement

        tr.querySelector("button").addEventListener("click", () => {
            //Encontra o botão remover do estoque
            const index = estoque.indexOf(item);
            //Encontra o item (objeto) dentro do array

            estoque.splice(index, 1);
            //Remover o item (objeto) da tabela
            tabela.removeChild(tr);
            //remove a linha em branco do objeto removido
        });

        tabela.querySelector("tbody").appendChild(tr);
    })

    tabela.style.display = "table";
    //Mostrar tabela
});
