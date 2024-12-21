export async function fetchHeaderData() {
  const response = await fetch('../../data/header.json');
  const headerData = await response.json();
  console.log(headerData);
  return headerData;
}

export function createNavigation(headerData) {
  const navigationContainer = document.querySelector('#navigation-menu');
}
