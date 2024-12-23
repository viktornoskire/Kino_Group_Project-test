loadEvent();

async function loadEvent() {
  try {
    const responseEvent = await fetch('../../data/barnkalasEvent.json');

    if (!responseEvent.ok) {
      throw new Error('Could not fetch data');
    }
    const dataEvent = await responseEvent.json();
    const event = document.querySelector('.article-party');

    dataEvent.kalas.forEach((events) => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add = 'party-div';
      event.append(eventDiv);
      const eventImg = document.createElement('img');
      eventImg.classList.add = 'party-img';
      eventImg.src = events.image;
      eventImg.alt = events.imageAlt;
      eventDiv.append(eventImg);
      const eventHeader = document.createElement('h1');
      eventHeader.classList.add('party-header');
      eventHeader.innerText = events.titel;
      eventDiv.append(eventHeader);
      const eventText = document.createElement('p');
      eventText.classList.add = 'party-text';
      eventText.innerText = events.description;
      eventDiv.append(eventText);
      const eventUl = document.createElement('ol');
      eventUl.classList.add = 'party-list';
      eventDiv.append(eventUl);

      const content = events.content;

      content.forEach((list) => {
        const eventLi = document.createElement('li');
        eventLi.classList.add = 'party-listItem';
        eventLi.innerText = list;
        eventUl.append(eventLi);
      });

      const eventButton = document.createElement('button');
      eventButton.classList.add('party-button');
      eventButton.innerText = events.book;
      eventDiv.append(eventButton);
    });
  } catch (error) {
    console.error(error);
  }
}

loadContent();

async function loadContent() {
  try {
    const responseContent = await fetch('../../data/barnkalasContent.json');

    if (!responseContent.ok) {
      throw new Error('Could not fetch data');
    }

    const dataContent = await responseContent.json();
    const info = document.querySelector('.article-kids');

    dataContent.barnkalas.forEach((content) => {
      const contentDiv = document.createElement('div');
      contentDiv.classList.add = 'kids-div';
      info.append(contentDiv);

      const contentHero = document.createElement('img');
      contentHero.classList.add = 'kids-hero';
      contentHero.src = content.imgHero;
      contentHero.alt = content.imgAltHero;
      contentDiv.append(contentHero);

      const contentImg = document.createElement('img');
      contentImg.classList.add = 'kids-img';
      contentImg.src = content.imgTextMobile;
      contentImg.alt = content.imgAltMobile;
      contentDiv.append(contentImg);

      const contentHeader = document.createElement('h2');
      contentHeader.classList.add('kids-header');
      contentHeader.innerText = content.titelMobile;
      contentDiv.append(contentHeader);

      const contentButton = document.createElement('button');
      contentButton.classList.add('party-button');
      contentButton.innerText = content.book;
      contentDiv.append(contentButton);

      const contentMainHeader = document.createElement('h1');
      contentMainHeader.classList.add('kids-mainHeader');
      contentMainHeader.innerText = content.mainTitelMobile;
      contentDiv.append(contentMainHeader);

      const contentText = document.createElement('p');
      contentText.classList.add = 'kids-text';
      contentText.innerText = content.descriptionMobile;
      contentDiv.append(contentText);
    });
  } catch (error) {
    console.error(error);
  }
}
