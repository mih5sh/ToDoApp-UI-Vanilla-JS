import ToDoItem from './toDoItem';
import AddToDo from './addToDo';

function ToDoContainer() {
  let id = 0;
  const byIdToDoMap = new Map();

  function addToDoInMap(toDoItemName) {
    byIdToDoMap.set(id, { itemName: toDoItemName, done: false, id: id });
    id = id + 1;
    getAllToDos();
  }

  function changeStatusOfToDo(toDoItemId) {
    const toDoToUpdate = byIdToDoMap.get(toDoItemId);
    console.log(toDoToUpdate);
    toDoToUpdate.done = !toDoToUpdate.done;
    getAllToDos();
  }

  function deleteToDo(toDoItemId) {
    byIdToDoMap.delete(toDoItemId);
    getAllToDos();
  }

  function getAllToDos() {
    while (toDoContainer.hasChildNodes()) {
      toDoContainer.removeChild(toDoContainer.childNodes[0]);
    }
    if (byIdToDoMap.size === 0) {
      toDoContainer.classList.add('noToDos');
      toDoContainer.textContent = "You don't have any To-Dos Yet";
      return;
    }
    toDoContainer.classList.remove('noToDos');
    [...byIdToDoMap.values()].forEach(toDoItem => {
      console.log(toDoItem);
      const propsToPass = {
        itemName: toDoItem.itemName,
        id: toDoItem.id,
        done: toDoItem.done,
        changeStatusOfToDo: changeStatusOfToDo,
        deleteToDo: deleteToDo
      };
      toDoContainer.appendChild(ToDoItem(propsToPass));
    });
  }

  const addToDoContainer = AddToDo({ addToDo: addToDoInMap });
  const toDoContainer = document.createElement('div');
  toDoContainer.classList.add('toDoContainer');
  getAllToDos();

  return [addToDoContainer, toDoContainer];
}

export default ToDoContainer;
