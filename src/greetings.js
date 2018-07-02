function Greeter(props) {
  const greetingContainer = document.createElement('div');
  greetingContainer.classList.add('greetingsContainer');

  const userNameSpan = document.createElement('span');
  userNameSpan.classList.add('username');
  userNameSpan.textContent = `Hello, ${props.userName}`;

  const greetingsSpan = document.createElement('span');
  greetingsSpan.classList.add('greetings');
  greetingsSpan.textContent = `Let's start adding your To-Dos`;

  greetingContainer.appendChild(userNameSpan);
  greetingContainer.appendChild(greetingsSpan);
  return greetingContainer;
}

export default Greeter;
