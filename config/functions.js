const imgixurl = 'tamarack-prismic.imgix.net'

const cloudfront = 'd3n6sqn01en2u4.cloudfront.net'
const cdn = 'images.ineffable.co'
const origin_cdn = 'plotly.cdn.prismic.io'
const aws = 'prismic-io.s3.amazonaws.com'

const original = aws;

export function imgix(url) {
  return url.replace(`https://${original}/plotly`, `https://${imgixurl}/plotly`)
}
