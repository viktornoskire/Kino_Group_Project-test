createSections();

function createSections() {
  //Headline
  const headline = document.querySelector('.about-header');
  const mainheading = document.createElement('h1');
  mainheading.textContent = 'Title of page';
  headline.appendChild(mainheading);

  //Sektion 1
  const section1 = document.querySelector('.section-1');
  const heading1 = document.createElement('h2');
  heading1.textContent = 'Title 1';
  const content1 = document.createElement('p');
  content1.textContent = 'Textcontent';
  section1.appendChild(heading1);
  section1.appendChild(content1);

  //Sektion 2
  const section2 = document.querySelector('.section-2');
  const heading2 = document.createElement('h2');
  heading2.textContent = 'Title 2';
  const content2 = document.createElement('p');
  content2.textContent = 'Textcontent';
  section2.appendChild(heading2);
  section2.appendChild(content2);

  //Sektion 3
  const section3 = document.querySelector('.section-3');
  const heading3 = document.createElement('h2');
  heading3.textContent = 'Title 3';
  const content3 = document.createElement('p');
  content3.textContent = 'Textcontent';
  section3.appendChild(heading3);
  section3.appendChild(content3);

  //Sektion 4
  const section4 = document.querySelector('.section-4');
  const heading4 = document.createElement('h2');
  heading4.textContent = 'Title 4';
  const content4 = document.createElement('p');
  content4.textContent = 'Textcontent';
  section4.appendChild(heading4);
  section4.appendChild(content4);
}
