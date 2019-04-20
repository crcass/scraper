const saveFavs = document.querySelectorAll('.save-favs');

const addToFavs = e => {
  const _id = e.target.dataset.articleid;
  const key = e.target.dataset.akey;
  const { image } = e.target.dataset;
  const title = e.target.dataset.title;
  const { byline } = e.target.dataset;
  const { link } = e.target.dataset;
  const { note } = e.target.dataset;

  const article = { _id, key, image, title, byline, link, note };

  axios.post(`/favorites/${_id}`, article).then(data => console.log(data));
};

saveFavs.forEach(button => button.addEventListener('click', e => addToFavs(e)));
