import Prismic from 'prismic-javascript'

// const apiURL = 'https://plotly.cdn.prismic.io/api/v2';
const apiURL = 'https://plotly.prismic.io/api/v2';


// Get all documents from prismic

export async function fetchData() {
  const doc = await Prismic.api(apiURL).then(function (api) {
    return api.query('');
  }).then(function (content) {
    return content;
  }, function (err) {

    console.log('Something went wrong: ', err);
  });

  return await doc.results;
}
