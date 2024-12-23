export async function loadModal() {
  const response = await fetch('data/infoModal.json');
  const data = await response.json();
  return data;
}

// DOM elements
const title = document.querySelector('.cinema-title');
const open = document.querySelector('.cinema-open');
const modal = document.querySelector('.info-modal');
const list = document.querySelector('.info-modal-list');

export async function buildModal() {
  const data = await loadModal();
  let sec = data.sections[1].modal;
  sec.forEach((section) => {
    if (section.text === undefined) {
      let q = section.title;
      const question = document.createElement('p');
      question.setAttribute('class', 'modal-title');
      question.innerText = q;
      modal.appendChild(question);
    } else {
      let q = section.title;
      const question = document.createElement('p');
      question.setAttribute('class', 'modal-question');
      question.innerText = q;
      list.appendChild(question);
    }
  });
}

buildModal();
