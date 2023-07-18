import '/dist/style.css'

import { setupTabs } from '/dist/tabSetup.js'; 


const elementLoad = () => {
  const mainEl = document.querySelector("main");
  mainEl.innerHTML = `
    <div class="tabs-content active" id="home" data-tab-content>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
    <div class="tabs-content" id="menu" data-tab-content>
      <h1>Menu</h1>
      <p>This is the menu page</p>
    </div>
    <div class="tabs-content" id="contact" data-tab-content>
      <h1>Contact</h1>
      <p>Reach out to us</p>
    </div>
  `;

  setupTabs(); // Call the tab setup logic after updating the mainEl.innerHTML

  return mainEl;
};

document.addEventListener("DOMContentLoaded", () => {
  elementLoad();
});
