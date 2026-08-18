import { defineQuery } from 'next-sanity'

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    price,
    image
  }
`)
