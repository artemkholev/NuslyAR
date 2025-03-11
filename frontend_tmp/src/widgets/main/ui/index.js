import { renderCharacter } from '../../entities/Character';

export function renderAboutSection() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>О персонаже</h2>
  `;
  section.appendChild(renderCharacter());
  return section;
}