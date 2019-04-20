const scrapeBtn = document.querySelector('#scrape-btn');

const getArticles = () => axios.get('/scrape').then(data => location.reload());

scrapeBtn.addEventListener('click', getArticles);
