const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  key: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  byline: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
