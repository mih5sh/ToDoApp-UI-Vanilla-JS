function ToDoItem(props) {
  function handleStatusChange(event) {
    props.changeStatusOfToDo(parseInt(event.target.dataset.id), 10);
  }

  function deleteToDo(event) {
    props.deleteToDo(parseInt(event.target.dataset.id), 10);
  }

  const toDoItemContainer = document.createElement('div');
  toDoItemContainer.dataset.id = props.id;
  toDoItemContainer.classList.add('toDoItemContainer');

  const statusInput = document.createElement('input');
  statusInput.type = 'checkbox';
  statusInput.defaultChecked = props.done;
  statusInput.dataset.id = props.id;
  statusInput.addEventListener('change', handleStatusChange);

  const toDoItem = document.createElement('span');
  if (props.done) {
    toDoItem.classList.add('toDoItemDone');
  }
  toDoItem.textContent = props.itemName;
  toDoItem.dataset.id = props.id;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.dataset.id = props.id;
  deleteButton.addEventListener('click', deleteToDo);

  toDoItemContainer.appendChild(statusInput);
  toDoItemContainer.appendChild(toDoItem);
  toDoItemContainer.appendChild(deleteButton);
  return toDoItemContainer;
}

export default ToDoItem;
