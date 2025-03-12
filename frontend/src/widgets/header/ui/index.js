import myPhoto from '../../../../src/app/assets/img/my_photo.jpg';

export function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
      <img src="${myPhoto}" alt="My Photo" />
      <h1>Kholev Artem</h1>
      <p>Frontend developer</p>

      <div class="contacts">
        <h3>My account tg:</h3>
        <a target="_blank" href="https://t.me/ArtKholev">Artёm</a>
      </div>
    `;
  return header;
}