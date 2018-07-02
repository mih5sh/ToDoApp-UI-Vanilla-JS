import Greeter from './greetings';
import AddToDo from './addToDo';
import ToDoContainer from './toDoContainer';

const app = document.getElementById('app');
app.classList.add('container');
app.appendChild(Greeter({ userName: 'Mihir' }));
const [addToDoContainer, toDosContainer] = ToDoContainer();
app.appendChild(addToDoContainer);
app.appendChild(toDosContainer);
