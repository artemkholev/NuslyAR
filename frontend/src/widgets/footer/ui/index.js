export function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
      <div class="footer-content">
      <h2>Stay Weird, Stay Awesome!</h2>
      <p>
        This website was made with 99% caffeine, 1% magic, and a sprinkle of chaos. 
        If you find any bugs, please feed them to the nearest cat))
      </p>
      <div class="social-links">
        <a href="https://onrockway.ru/?ysclid=m86hekdlk1747873557" target="_blank">RockWay</a>
        <a href="https://твоямотошкола.рф/" target="_blank">Твоя школа moto</a>
      </div>
      <p class="disclaimer">
        Disclaimer: This footer is 100% serious. No jokes here. Okay, maybe a few.
      </p>
    </div> 
    `;
  return footer;
}
