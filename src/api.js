export function get(path) {
  switch (path) {
    case '/home':
      return Promise.resolve({
        data: [
          { _id: 1, title: 'Article 1', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 2, title: 'Article 2', domain: 'www.random2.com', description: 'this is some text about the article', articleIsFakeNews: false },
          { _id: 3, title: 'Article 3', domain: 'www.random3.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 4, title: 'Article 4', domain: 'www.random4.com', description: 'this is some text about the article', articleIsFakeNews: false },
          { _id: 5, title: 'Article 5', domain: 'www.random5.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 6, title: 'Article 6', domain: 'www.random6.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 7, title: 'Article 7', domain: 'www.random7.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 8, title: 'Article 8', domain: 'www.random8.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 9, title: 'Article 9', domain: 'www.random9.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 10, title: 'Article 10', domain: 'www.random10.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 11, title: 'Article 11', domain: 'www.random11.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 12, title: 'Article 12', domain: 'www.random12.com', description: 'this is some text about the article', articleIsFakeNews: true }
        ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 },
          { _id: 4, trend: 'Tigers', popularity: 86 },
          { _id: 5, trend: 'Corruption', popularity: 12 },
          { _id: 6, trend: 'Unicorns', popularity: 19 },
          { _id: 7, trend: 'Smallpox', popularity: 9 }
        ]
      });
    case '/domain':
      return Promise.resolve({
        domain: { _id: 1, domainName: 'News company blah', registeredDomains: ['www.random1.com', 'www.random2.com'], domainDescription: 'an overview of the organisation' },
        data: [
          { _id: 1, title: 'Article 1', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 2, title: 'Article 2', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: false },
          { _id: 3, title: 'Article 3', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 4, title: 'Article 4', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: false },
          { _id: 5, title: 'Article 5', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 6, title: 'Article 6', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 7, title: 'Article 7', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 8, title: 'Article 8', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 9, title: 'Article 9', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 10, title: 'Article 10', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 11, title: 'Article 11', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true },
          { _id: 12, title: 'Article 12', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true }
        ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 },
          { _id: 4, trend: 'Tigers', popularity: 86 },
          { _id: 5, trend: 'Corruption', popularity: 12 },
          { _id: 6, trend: 'Unicorns', popularity: 19 },
          { _id: 7, trend: 'Smallpox', popularity: 9 }
        ]
      });
    case '/article':
      return Promise.resolve({
        data: [{ _id: 1, title: 'Article 1', domain: 'www.random1.com', description: 'this is some text about the article', articleIsFakeNews: true }],
        comments: [
          { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
          { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 },
          { _id: 3, author: 'some person3', comment: 'this is a comment3', threadId: null, articleId: 1, votes: 2 }
          ],
        trends: [
          { _id: 1, trend: 'Trump', popularity: 77 },
          { _id: 2, trend: 'Joe', popularity: 10 },
          { _id: 3, trend: 'Laura', popularity: 34 },
          { _id: 4, trend: 'Tigers', popularity: 86 },
          { _id: 5, trend: 'Corruption', popularity: 12 },
          { _id: 6, trend: 'Unicorns', popularity: 19 },
          { _id: 7, trend: 'Smallpox', popularity: 9 }
        ]
      });
  }
}