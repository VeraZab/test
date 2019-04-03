import Prismic from 'prismic-javascript';

const apiURL = 'https://plotly.prismic.io/api/v2';

export async function fetchData(ref) {
  const doc = await Prismic.api(apiURL)
    .then(function(api) {
      return api.query('', { pageSize: 100, lang: "*", ref }, null);
    })
    .then(
      function(content) {
        return content;
      },
      function(err) {
        console.log('Something went wrong: ', err);
      }
    );
  return await doc.results;
}
