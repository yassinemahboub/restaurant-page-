export function setupTabs() {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const tabContents = document.querySelectorAll("[data-tab-content]");
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
  
        tabs.forEach(tabItem => tabItem.classList.remove('active'));
        tabContents.forEach(contentItem => contentItem.classList.remove('active'));
  
        tab.classList.add('active');
        target.classList.add('active');
      });
    });
  }