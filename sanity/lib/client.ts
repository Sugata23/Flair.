import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"sk8NE312Sb82Nn3o3uZlNeBcY7eDpnIdP7d27NMvSWuKG4KvWMYDJs3nGS3OerVJHYpP6EpukSrl7XgHoZKM2dfp6UOQyiVZJxAHumXYeZnGd4ECcEj5IlXlHe6EN3ICBNXGhIGM9y7awHsFH2dWnk8CUke6tF2pHlLHZqeeFSy1ta2dN6ZM",
})
