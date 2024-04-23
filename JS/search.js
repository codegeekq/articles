import { articlesArray } from '../API.js'
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.onkeyup = function() {
  searchResults.innerHTML = ''
  const searchTerm = searchInput.value;
  for (var i = 1; i < articlesArray.length; i++) {
    if (articlesArray[i].article.includes(searchTerm)) {
      const paragraph = document.createElement('a');
      paragraph.href = `../${articlesArray[i].learnMoreLink}`;
      paragraph.className = 'link-search'
      paragraph.textContent = `• ${articlesArray[i].articleName}`;
      searchResults.appendChild(paragraph);
    }
  }
}