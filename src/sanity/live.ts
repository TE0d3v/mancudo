import { defineLive } from "next-sanity/live";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ 
    apiVersion: 'vX', // Use the latest API version or 'vX' for live
    useCdn: false
  })
});
