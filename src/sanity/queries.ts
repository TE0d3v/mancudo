import { defineQuery } from 'next-sanity'

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && slug.current != "rengav"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    price,
    image
  }
`)

export const LATEST_6_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && slug.current != "rengav"] | order(_createdAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    price,
    image
  }
`)
