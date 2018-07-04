const imgixurl = 'tamarack-prismic.imgix.net'
const aws = 'prismic-io.s3.amazonaws.com'
const prismic_cdn = 'plotly.cdn.prismic.io'

export function imgix(url) {
  if(url.includes(aws)){
      return url.replace(`https://${aws}/plotly`, `https://${imgixurl}/plotly`)
  }
    return url.replace(`https://${prismic_cdn}/plotly`, `https://${imgixurl}/plotly`)
}
