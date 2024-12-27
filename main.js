import { initHeader } from './pages/index/header.js';
import { loadkids } from './pages/kids/kids.js';

initHeader();

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  loadkids();
}
