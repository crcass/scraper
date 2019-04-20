const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
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

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
