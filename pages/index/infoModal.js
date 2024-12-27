async function loadJSON() {
  const response = await fetch('../../data/infoModal.json');
  const data = await response.json();
  return data;
}

export async function buildDoc() {
  const data = await loadJSON();
  // DOM elements
  const modal = document.querySelector('.info-modal');
  const list = document.querySelector('.info-modal-list');

  if (document.querySelector('.cinema-title')) {
    // Render text to headerSection where the main title is
    const headSection = data.sections[0];
    const title = document.querySelector('.cinema-title');
    const open = document.querySelector('.cinema-open');
    const img = document.querySelector('.kino-img');
    title.innerText = headSection.title;
    open.innerText = headSection.text;
    img.src = data.kinoImg.src;
    img.alt = data.kinoImg.alt;
  }
  //
  const modalInfo = data.sections[1].modal;
  modalInfo.forEach((section) => {
    // If there is no text key in section
    if (section.text == undefined) {
      const question = document.createElement('p');
      question.setAttribute('class', 'modal-title');
      question.innerText = section.title;
      // Prepend means to add it to the top of the children line
      modal.prepend(question);
      //
    } else {
      // Create elements
      const question = document.createElement('p');
      const answer = document.createElement('p');
      const openBtn = document.createElement('img');
      // Set class attribute to elements
      question.setAttribute('class', 'modal-question');
      answer.setAttribute('class', 'modal-answer');
      openBtn.setAttribute('class', 'modal-open');
      // Use JSON data to render text to elements
      question.innerText = section.title;
      answer.innerText = section.text;
      answer.style.display = 'none';
      openBtn.src = data.buttons[0].openButton;
      openBtn.alt = data.buttons[0].alt;
      // Append to list
      list.appendChild(openBtn);
      list.appendChild(question);
      // Add event listener to img button
      openBtn.addEventListener('click', () => {
        openBtn.classList.toggle('open-button-clicked');
        if (openBtn.className === 'modal-open open-button-clicked') {
          openBtn.src = data.buttons[1].closeButton;
          openBtn.alt = data.buttons[1].alt;
          answer.style.display = '';
        } else {
          openBtn.src = data.buttons[0].openButton;
          openBtn.alt = data.buttons[0].alt;
          answer.style.display = 'none';
        }
      });
      // If there's a key named 'open'
      if ('open' in section) {
        // Go through the 'open'-section
        section.open.forEach((i) => {
          const day = document.createElement('p');
          const date = document.createElement('p');
          const time = document.createElement('p');
          const activity = document.createElement('div');
          activity.setAttribute('class', `open-${i.datum}`);
          day.setAttribute('class', 'open-times-day');
          date.setAttribute('class', 'open-times-date');
          time.setAttribute('class', 'open-times-time');
          day.innerText = i.dag;
          date.innerText = i.datum;
          time.innerText = i.tid;
          activity.appendChild(day);
          activity.appendChild(date);
          activity.appendChild(time);
          answer.appendChild(activity);
          list.appendChild(answer);
        });
      }
      // Skip the whole open times elements and text if there is no 'open' key
      else {
        list.appendChild(answer);
      }
    }
  });
}

buildDoc();
