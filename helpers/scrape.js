const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

const scrape = res => {
  axios.get('https://www.theverge.com/').then(response => {
    const $ = cheerio.load(response.data);

    $('.c-entry-box--compact__image-wrapper').each((i, element) => {
      const key = i;
      const wrongImage =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs';
      let correctImage = $(element)
        .find('noscript')
        .text();
      correctImage = correctImage.substring(17, correctImage.length - 2);
      let image = $(element)
        .find('img')
        .attr('src');
      if (image === wrongImage) image = correctImage;
      const title = $(element)
        .next()
        .find('h2')
        .text();
      const byline = $(element)
        .next()
        .find('.c-byline__item')
        .first()
        .text()
        .trim();
      const link = $(element).attr('href');
      const result = { key, image, title, byline, link };

      db.Article.create(result)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });

    res.send('Scrape Complete');
  });
};

module.exports = scrape;
