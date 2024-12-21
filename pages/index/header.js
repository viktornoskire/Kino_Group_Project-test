//Getting the JSON file header.json and its data.
export async function fetchHeaderData() {
  const response = await fetch('../../data/header.json');
  const headerData = await response.json();
  console.log(headerData);
  return headerData;
}
//This function uses the data and creates the elements for the header.
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
  //the right section of the navigation meny with the hamburger menu, and its overlay on click.
  const rightSection = document.createElement('div');
  rightSection.className = 'nav-right';

  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.className = 'hamburger-btn';
  hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';

  const menuOverlay = document.createElement('div');
  menuOverlay.className = 'menu-overlay';

  const menuLinks = document.createElement('ul');
  menuLinks.className = 'menu-links';
  //This loops through each link from the JSON file, and creates <li> elements for each link. Also adds the correct text.
  headerData.header.hamburgerMenu.menuLinks.forEach((link) => {
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = link.text;
    menuItem.appendChild(menuLink);
    menuLinks.appendChild(menuItem);
  });

  menuOverlay.appendChild(menuLinks);
  //eventlistner for clicks on the hamburgermenu, this might change depending on styling down the line
  hamburgerBtn.addEventListener('click', () => {
    menuOverlay.style.display = menuOverlay.style.display === 'none' ? 'block' : 'none';
  });
  //appending the different elements thats been created above.
  rightSection.appendChild(hamburgerBtn);
  nav.appendChild(leftSection);
  nav.appendChild(rightSection);
  navigationContainer.appendChild(nav);
  navigationContainer.appendChild(menuOverlay);
}
//
export async function initHeader() {
  const headerData = await fetchHeaderData();
  createNavigation(headerData);
}
