import type { Categories, Pagination } from '@/types/package'
import type { Product } from './product'

export interface PackageResponse {
  categories: Categories
  pagination?: Pagination
}

export interface HomePageData {
  products: Product[]
  loading: boolean
}

export interface ProductResponse {
  products?: Product[]
  results?: Product[]
}
