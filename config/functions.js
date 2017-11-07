const imgixurl = 'tamarack-prismic.imgix.net'

const cloudfront = 'd3n6sqn01en2u4.cloudfront.net'
const cdn = 'images.ineffable.co'

export function imgix(url) {
  return url.replace('https://prismic-io.s3.amazonaws.com/plotly', `https://${cdn}/plotly`)
}
