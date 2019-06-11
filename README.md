# V News

powered by [The Verge](https://www.theverge.com/)

![V News](/public/assets/images/vnews.jpg)

## Technology

This app was built with [MongoDB](https://www.mongodb.com/), [MongooseJS](https://mongoosejs.com/), [Cheerio.js](https://cheerio.js.org/), [Handlebars.js](https://handlebarsjs.com/), [Axios](https://www.npmjs.com/package/axios), [Express.js](https://expressjs.com/) & [Sass](https://sass-lang.com/).

## Concept

V News is an app where users can view headlines, images, & authors for each article, leave a comment, and add an article to their favorites. All articles link directly to The Verge.

## Motivation

This app was an exercise in scraping a news site for information, then displaying that info using server-side rendering with Handlebars and Express. I wanted users to be able to leave comments on news articles and save articles for future reading.

## Design Process

Since V News is scraping [The Verge](https://www.theverge.com/), I wanted to follow a few of their design ideas. I also wanted to continue to improve my Sass skills and used Sass to style the page.

## Future Development

- Authentication using Google and/or Facebook. This would allow users to save their own articles and keep track of their comments. Currently there is only one universal favorites list.

## Known Issues

- Currently only one comment/note displays at a time
- Users are able to add multiple copies of the same article to favorites
- Refreshing the articles will unlink the comments. The comments are still there, biding their time...
- Some minor rendering issues that only appear when the database is empty

♥︎ cc
