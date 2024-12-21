export async function fetchHeaderData() {
  const response = await fetch('../../data/header.json');
  const headerData = await response.json();
  console.log(headerData);
  return headerData;
}
export function createNavigation(headerData) {
  const navigationContainer = document.querySelector('#navigation-menu');

  //Creates a nav element
  const nav = document.createElement('nav');
  nav.className = 'main-navigation';

  //left side of navigation with logo and name
  const leftSection = document.createElement('div');
  leftSection.className = 'nav-left';

  const logo = document.createElement('img');
  logo.src = headerData.header.mainHeader.logo;
  logo.alt = 'Kino Bio Logo';
  logo.className = 'nav-logo';

  const brandName = document.createElement('span');
  brandName.className = 'brand-name';
  brandName.textContent = headerData.header.mainHeader.brandName;

  leftSection.appendChild(logo);
  leftSection.appendChild(brandName);

  const rightSection = document.createElement('div');
  rightSection.className = 'nav-right';

  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.className = 'hamburger-btn';
  hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';

  const menuOverlay = document.createElement('div');
  menuOverlay.className = 'menu-overlay';

  const menuLinks = document.createElement('ul');
  menuLinks.className = 'menu-links';

  headerData.header.hamburgerMenu.menuLinks.forEach((link) => {
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = link.text;
    menuItem.appendChild(menuLink);
    menuLinks.appendChild(menuItem);
  });

  menuOverlay.appendChild(menuLinks);

  hamburgerBtn.addEventListener('click', () => {
    menuOverlay.style.display = menuOverlay.style.display === 'none' ? 'block' : 'none';
  });
  rightSection.appendChild(hamburgerBtn);
  nav.appendChild(leftSection);
  nav.appendChild(rightSection);
  navigationContainer.appendChild(nav);
  navigationContainer.appendChild(menuOverlay);
}

async function initHeader() {
  const headerData = await fetchHeaderData();
  createNavigation(headerData);
}

initHeader();
