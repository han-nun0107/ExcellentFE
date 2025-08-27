import mypageHandlers from './handlers/mypage/mypage'
import recommendationHandlers from './handlers/recommendation/recommendation'
import tastetestHandlers from './handlers/tastetest/tastetest'
import mainHandlers from './handlers/main/main'

export const handlers = [
  ...mypageHandlers,
  ...recommendationHandlers,
  ...tastetestHandlers,
  ...mainHandlers,
]
