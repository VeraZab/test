export function imgix(url){
    return url.replace('https://prismic-io.s3.amazonaws.com/plotly', 'https://tamarack-prismic.imgix.net/plotly')
}