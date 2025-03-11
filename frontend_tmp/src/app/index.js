javascript
Copy
import { renderHeader } from '../../widgets/Header';
import { renderAboutSection } from '../../widgets/AboutSection';
import { renderFooter } from '../../widgets/Footer';

const app = document.getElementById('app');

app.appendChild(renderHeader());
app.appendChild(renderAboutSection());
app.appendChild(renderFooter());