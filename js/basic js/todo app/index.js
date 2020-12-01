var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
    listElement.innerHTML = ''
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        var deleteElementBtn = document.createElement('button')
        var pos = todos.indexOf(todo)
        
        createDeleteBtn(deleteElementBtn)

        todoElement.appendChild(todoText)
        todoElement.appendChild(deleteElementBtn)
        listElement.appendChild(todoElement)

        function createDeleteBtn(deleteElementBtn) {
            deleteElementBtn.innerText = 'X'
            deleteElementBtn.setAttribute('class', 'delete-btn')
            deleteElementBtn.setAttribute('onclick', `deleteTodo(${pos})`)
        }
    }
    inputElement.focus()
}
renderTodos()

function addTodo() {
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

buttonElement.addEventListener('click', addTodo)

