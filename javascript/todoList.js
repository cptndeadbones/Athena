//Variable setup
const todoForm = document.querySelector('todo_form');
const todoList = documnet.querySelector('todo_list');

todoForm.addEventListener('submit', event => {
    event.preventDefault(); // prevent the form from refreshing the page
    const todoInput = document.querySelector('#list_item');
    const todoText = todoInput.value; // get the text from the input field
    todoInput.value = ''; // clear the input field

    // create a new list item and add it to the todo list
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
  });