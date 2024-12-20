loadEvent();

async function loadEvent() {
  const responseEvent = await fetch('../../data/barnkalasEvent.json');
  const dataEvent = await responseEvent.json();
  console.log(dataEvent);
}

loadContent();
async function loadContent() {
  const responseContent = await fetch('../../data/barnkalasContent.json');
  const dataContent = await responseContent.json();
  console.log(dataContent);
}
