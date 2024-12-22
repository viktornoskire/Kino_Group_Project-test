loadModal();

export async function loadModal() {
  const response = await fetch('data/infoModal.json');
  const data = await response.json();
  console.log(data);
}
