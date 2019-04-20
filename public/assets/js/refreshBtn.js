const refreshBtn = document.querySelector('#refresh-btn');

const refreshArticles = () =>
  axios.get('/refresh').then(data => location.reload());

refreshBtn.addEventListener('click', refreshArticles);
