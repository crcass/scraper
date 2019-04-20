const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

require('./routes/routes')(app);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
