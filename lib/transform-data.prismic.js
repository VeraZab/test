export const transformData = async (data, slug) => {
  const pages = await data.filter(doc => doc.type === 'page')


  const customer_stories = await data.filter(doc => doc.type === 'customer-story')
  const pricing_cards = await data.filter(doc => doc.type === 'pricing-cards')
  const site = await data.find(doc => doc.type === 'site')


  const modified_pages = pages.map(page => {
    const newSlices = page.data.slices.map(slice => {
      if (slice.slice_type === 'cs-pricing') {
        const pricing_card = slice.items.map(item => {
          return pricing_cards.find(card => card.id === item.pricing_cards.id)
        })
        return {
          ...slice,
          pricing_cards: pricing_card[0].data.body
        }
      } else {
        return {
          ...slice
        }
      }
    })

    const {data, data: {slices, ...data_rest}, ...rest} = page;
    return {
      ...rest,
      data: {
        ...data_rest,
        slices: newSlices
      }
    }
  })


  const current_page = await modified_pages.find(doc => doc.uid === slug)


  return {
    pages: modified_pages,
    current_page,
    customer_stories,
    pricing_cards,
    site
  }
}
