
//constantes de botão, lista, input

const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('#task')
const elementoBotao = document.querySelector('#addBtn')
const elementoBotaoDelete = document.querySelector ('#removeBtn')
const botaoMercado = document.querySelector("#mercado")
const botaoPadrao = document.querySelector("#padrao")

//função de limite de caracteres a serem contados no HTML


//função que muda a aparência da página

botaoMercado.setAttribute('onclick', 'mudarMercado()')

function mudarMercado(){
    let feet = document.getElementById("feet")
    let mercado = document.getElementsByTagName("body")[0]
    let nomeLista = document.getElementById("nomeLista")
    let pLista = document.getElementById("pLista")
    mercado.style.backgroundImage = "url(http://apasshow.com.br/blog/wp-content/uploads/2018/05/Depositphotos_7883907_l-2015-768x543.jpg)"
    mercado.style.backgroundSize = "cover"
    mercado.style.backgroundRepeat = "no-repeat"
    mercado.style.backgroundColor = "gainsboro"
    feet.style.color = "black"
    feet.style.borderBottom = "1px dashed black"
    nomeLista.innerHTML = "Lista de Mercado"
    pLista.innerHTML = "Escreva os itens para suas compras:"
    elementoBotaoDelete.innerHTML = "Remover itens"
    botaoMercado.style.backgroundColor = "green"
    botaoMercado.style.color = "white"
    botaoPadrao.style.backgroundColor = "gainsboro"
    botaoPadrao.style.color = "black"
 
}

botaoPadrao.setAttribute('onclick', 'mudarPadrao()')

function mudarPadrao(){
    let feet = document.getElementById("feet")
    let padrao = document.getElementsByTagName("body")[0]
    let nomeLista = document.getElementById("nomeLista")
    let pLista = document.getElementById("pLista")
    padrao.style.backgroundImage = "none"
    padrao.style.backgroundColor = "rgb(22, 22, 22, 0.8)"
    feet.style.color = "gainsboro"
    feet.style.borderBottom = "1px dashed gainsboro"
    nomeLista.innerHTML = "Lista de Tarefas"
    pLista.innerHTML = "Escreva as tarefas para o seu dia:"
    elementoBotaoDelete.innerHTML = "Remover tarefas"
    botaoMercado.style.backgroundColor = "gainsboro"
    botaoMercado.style.color = "black"
    botaoPadrao.style.backgroundColor = "green"
    botaoPadrao.style.color = "white"

}

//variável que vai ser adicionada, modificada, de forma dinâmica
var tarefas = []

//colocar essa variável no localStorage ao ser adicionada

const updateLocalStorage = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

//associa tarefa com os IDs de associação

function mostraTarefas() {

    elementoLista.innerHTML = ""

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createElement('img')
        linkText.src = "./assets/lixo.svg"
        linkText.setAttribute('width', '20')
        linkText.style.cursor = "pointer"

        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}
mostraTarefas()


//apagar 1 tarefa

function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

// apagar todas as tarefas

function removeTasks() {
    const removeLocalStorage = () => {
        localStorage.removeItem('tarefas')
    }
    removeLocalStorage()
    tarefas = [];
    mostraTarefas()
}


//adicionar tarefa escrita no input nas condições seguintes

function addTarefa() {
    const textoTarefa = elementoInput.value
    if (textoTarefa.length <= 1){
        alert("Por favor, digite uma tarefa...")
        elementoInput.value = ""
      } else if (textoTarefa.length > 50){
        alert("O limite máximo é de 50 caracteres")
        elementoInput.value = ""
      } else{
    tarefas.push(textoTarefa)
    elementoInput.value = ""

    updateLocalStorage ()
    mostraTarefas()
}
}

elementoBotao.setAttribute('onclick', 'addTarefa()')

elementoBotaoDelete.setAttribute('onclick', 'removeTasks()')
