import { http, HttpResponse } from 'msw'
import { monthlyProductMockData } from './mocks/monthlyProductMockData'
import { recommendedProductMockData } from './mocks/recommendedProductMockData'
import { popularPackageMockData } from './mocks/popularProductMockData'

const mainHandlers = [
  http.get('api/v1/products/monthly/', () => {
    return HttpResponse.json(monthlyProductMockData)
  }),
  http.get('api/v1/products/recommended/', () => {
    return HttpResponse.json(recommendedProductMockData)
  }),
  http.get('api/v1/products/popular/', () => {
    return HttpResponse.json(popularPackageMockData)
  }),
]

export default mainHandlers
