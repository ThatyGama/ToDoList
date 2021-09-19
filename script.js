
//constantes de botão, lista, input

const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('#task')
const elementoBotao = document.querySelector('#addBtn')
const elementoBotaoDelete = document.querySelector ('#removeBtn')

//função de limite de caracteres a serem contados no HTML


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
