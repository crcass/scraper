const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');
const scrape = require('../helpers/scrape.js');

module.exports = app => {
  app.get('/scrape', (req, res) => scrape(res));

  app.get('/refresh', (req, res) => {
    db.Article.deleteMany({}).then(data => console.log(data));
    scrape(res);
  });

  app.get('/', (req, res) => {
    db.Article.find({})
      .populate('note')
      .then(data => {
        const hbsObject = { data };
        res.render('index', hbsObject);
      })
      .catch(err => res.json(err));
  });

  app.get('/articles/:id', (req, res) => {
    db.Article.findById(req.params.id)
      .populate('note')
      .then(data => {
        res.json(data.note);
      })
      .catch(err => res.json(err));
  });

  app.post('/articles/:id', (req, res) => {
    db.Note.create(req.body).then(data => {
      db.Article.findByIdAndUpdate(
        req.params.id,
        { note: data._id },
        { new: true }
      )
        .then(note => res.json(note))
        .catch(err => res.json(err));
    });
  });

  app.delete('/notes/:id', (req, res) => {
    db.Note.findOneAndDelete({ _id: req.params.id })
      .then(note => res.json(note))
      .catch(err => res.json(err));
  });

  app.get('/favorites', (req, res) => {
    db.Favorite.find({})
      .populate('note')
      .then(data => {
        const hbsObject = { data };
        res.render('favorite', hbsObject);
      })
      .catch(err => res.json(err));
  });

  app.post('/favorites/:id', (req, res) => {
    db.Favorite.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

  app.delete('/favorites/:id', (req, res) => {
    db.Favorite.findOneAndDelete({ _id: req.params.id })
      .then(note => res.json(note))
      .catch(err => res.json(err));
  });
};
