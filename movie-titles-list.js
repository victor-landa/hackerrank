async function getMovieList(year) {
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
  const https = require('https');
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  const getData = new Promise((resolve, reject) => {
    let data = '';
    https.get(url, res => {
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      })
    }).on('error', err => {
      console.log(err.message);
    })
  });

  const myData = await getData;
  const movies = [];
  myData.data.map(movie => movies.push(movie.Title));
  return movies;
}

getMovieList('2015');