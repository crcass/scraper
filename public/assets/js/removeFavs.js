const removeFavs = document.querySelectorAll('.remove-favs');

const removeFav = e => {
  const _id = e.target.dataset.articleid;
  const wrap = document.querySelector('.wrap');
  const article = document.getElementById(`${_id}`);

  axios.delete(`/favorites/${_id}`).then(data => console.log(data));

  wrap.removeChild(article);
};

removeFavs.forEach(button =>
  button.addEventListener('click', e => removeFav(e))
);
