import { renderButton} from "../../../shared/ui/button/index.js"

export function renderCharacter() {
  const article = document.createElement("article");

  article.innerHTML = `
    <p>
      A student, I am engaged in self-development in the field of frontend and backend development, I write websites, hybrid applications
    </p>
    <div class="hobbies-header" style="display: flex; gap: 20px; align-items: center;">
      <h3>Hobbies</h3>
    </div>
    <ul id="hobbies-list" style="transition: max-height 0.5s ease-in-out; overflow: hidden; max-height: 500px;">
      <li>Drums</li>
      <li>Motorcycles</li>
      <li>Running</li>
      <li>Boxing</li>
    </ul>
  `;

  const hobbiesHeader = article.querySelector('.hobbies-header');

  const toggleButton = renderButton('Collapse', () => {
    const hobbiesList = article.querySelector('#hobbies-list');
    if (hobbiesList.style.maxHeight === '0px') {
      hobbiesList.style.maxHeight = '500px';
      toggleButton.textContent = 'Collapse';
    } else {
      hobbiesList.style.maxHeight = '0px'; 
      toggleButton.textContent = 'Expand';
    }
  });
  hobbiesHeader.appendChild(toggleButton);

  return article;
}