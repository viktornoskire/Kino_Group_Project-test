async function loadHeader() {
  const response = await fetch('../../data/header.json');
  const data = await response.json();
  console.log(data);
}

loadHeader();
