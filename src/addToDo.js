function AddToDo(props) {
  function handleKeyDown(event) {
    if (event.key !== 'Enter') return;
    console.log(`Should add ${event.target.value}`);
    props.addToDo(event.target.value);
    event.target.value = '';
  }
  const newToDoInput = document.createElement('input');
  newToDoInput.classList.add('toDoInput');
  newToDoInput.placeholder = 'New To-Do';
  newToDoInput.addEventListener('keydown', handleKeyDown);
  return newToDoInput;
}

export default AddToDo;
