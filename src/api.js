export function get (path) {
  switch (path) {
    case '/home':
      return Promise.resolve({
        data: [
          {_id: 1, title: 'Article 1', url: 'www.random1.com'},
          {_id: 2, title: 'Article 2', url: 'www.random2.com'},
          {_id: 3, title: 'Article 3', url: 'www.random3.com'},
          {_id: 4, title: 'Article 4', url: 'www.random4.com'},
          {_id: 5, title: 'Article 5', url: 'www.random5.com'},
        ]
      });
  }

}