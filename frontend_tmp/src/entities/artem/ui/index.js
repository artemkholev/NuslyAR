export function renderCharacter() {
    const article = document.createElement('article');
    article.innerHTML = `
      <img src="public/tony_stark.jpg" alt="Тони Старк" class="profile-img">
      <p>
        Тони Старк — один из самых известных персонажей вселенной Marvel. Он является создателем костюма Железного человека и основателем компании Stark Industries.
      </p>
      <h3>Характеристики</h3>
      <ul>
        <li>Высокий интеллект</li>
        <li>Мастерство в инженерии</li>
        <li>Лидерские качества</li>
        <li>Чувство юмора</li>
      </ul>
    `;
    return article;
  }