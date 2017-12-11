import {RichText} from 'prismic-reactjs'
import StyledSerializer from 'components/styledSerializer'

export const renderPrismic = (richtext) => RichText.render(richtext, null, StyledSerializer)
