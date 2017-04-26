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
        ]
      });
    case '/domains/1':
      return Promise.resolve({
        data: {
          domainData: {
            _id: 1,
            domainName: 'News company blah',
            registeredDomains: 'www.random1.com',
            domainDescription: 'an overview of the organisation'
          },
          articles: [
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
          ]
        }
      });
    case '/articles/1':
      return Promise.resolve({
        data: {
          articleData: {
            _id: 1,
            title: 'Article 1',
            // TODO: refactor domain to domainId
            domain: 'www.random1.com',
            description: 'this is some text about the article',
            articleIsFakeNews: true
          },
          comments: [
            { _id: 1, author: 'some person', comment: 'this is a comment', threadId: null, articleId: 1, votes: 12 },
            { _id: 2, author: 'some person2', comment: 'this is a comment2', threadId: null, articleId: 1, votes: 23 },
            { _id: 3, author: 'some person3', comment: 'this is a comment3', threadId: 2, articleId: 1, votes: 2 },
            { _id: 4, author: 'some person4', comment: 'this is a comment4', threadId: 3, articleId: 1, votes: 12 },
            { _id: 5, author: 'some person5', comment: 'this is a comment5', threadId: null, articleId: 1, votes: 43 },
            { _id: 6, author: 'some person6', comment: 'this is a comment6', threadId: null, articleId: 1, votes: 2 },
            { _id: 7, author: 'some person7', comment: 'this is a comment7', threadId: 6, articleId: 1, votes: 0 },
            { _id: 8, author: 'some person8', comment: 'this is a comment8', threadId: null, articleId: 1, votes: 59 },
            { _id: 9, author: 'some person9', comment: 'this is a comment9', threadId: null, articleId: 1, votes: 2 },
            { _id: 10, author: 'some person10', comment: 'this is a comment10', threadId: 9, articleId: 1, votes: 90 }
          ]
        }
      });
    case '/trends':
      return Promise.resolve({
        data: {
          trends: [
            { _id: 1, trend: 'Trump', popularity: 77 },
            { _id: 2, trend: 'Joe', popularity: 10 },
            { _id: 3, trend: 'Laura', popularity: 34 },
            { _id: 4, trend: 'Tigers', popularity: 86 },
            { _id: 5, trend: 'Corruption', popularity: 12 },
            { _id: 6, trend: 'Unicorns', popularity: 19 },
            { _id: 7, trend: 'Smallpox', popularity: 9 }
          ]
        }
      });
  }
}