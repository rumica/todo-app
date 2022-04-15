const formInput = document.querySelector('.form-input')
const addButton = document.querySelector('.add-btn')
const listField = document.querySelector('.list-field')
const checkButton = document.querySelector('.check-btn')
const deleteButton = document.querySelector('.delete-btn')
const listItem = document.querySelector('.list-item')
const listDiv = document.querySelector('.todo-list')
const ul = document.querySelector('ul')

addButton.addEventListener('click', addNewItem)
ul.addEventListener('click', checkAndDeleteItem)

function addNewItem (e){
    e.preventDefault()

    if(formInput.value === ""){
        alert('Please enter something')
        return
    }

    let value = formInput.value
    console.log(value)

    const newItemDiv = document.createElement('div')
    newItemDiv.classList.add('todo-list')

    newItemDiv.innerHTML = `<li class="list-item">${value}</li><button class="check-btn">Check</button>
    <button class="delete-btn"><i class="fa fa-trash"></i></button>`

    /* const newItem = document.createElement('li')
    newItem.innerHTML = value
    newItemDiv.appendChild(newItem) */

    ul.append(newItemDiv)

    formInput.value = ""
} 

function checkAndDeleteItem (e){

    const targetItem = e.target
    if(targetItem.classList[0] === 'check-btn'){
        const todoItem = targetItem.parentElement
        todoItem.classList.toggle('checked')
    } 

    if(targetItem.classList[0] === 'delete-btn'){
        const todoItem = targetItem.parentElement
        todoItem.remove()
    }
}

