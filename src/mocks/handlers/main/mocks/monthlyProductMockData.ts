import type { ProductResponse } from '@/types/home'

export const monthlyProductMockData: ProductResponse = {
  products: [
    {
      id: 1,
      name: '달빛 IPA',
      product_type: 'individual',
      main_image_url:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 6500,
      final_price: 5900,
      short_description: '풍부한 홉향과 깔끔한 마무리의 IPA',
      brewery_name: 'Moon Brewery',
      is_featured: true,
      description:
        '달빛 IPA는 은은한 과일향과 쌉쌀한 홉 맛이 어우러진 상큼한 페일 에일입니다.',
      discount_rate: 10,
      is_on_sale: true,
      view_count: 128,
      order_count: 45,
      like_count: 22,
      review_count: 8,
      status: 'ACTIVE',
      created_at: '2025-08-01T12:00:00Z',
      updated_at: '2025-08-20T15:00:00Z',
    },
    {
      id: 2,
      name: '산들바람 라거',
      product_type: 'individual',
      main_image_url:
        'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 5500,
      short_description: '부드럽고 청량한 라거',
      brewery_name: 'Windy Valley Brewery',
      is_featured: true,
      description:
        '은은한 몰트 향과 부드러운 바디감을 가진 산들바람 라거는 목 넘김이 좋고 가볍게 마시기 좋습니다.',
      is_on_sale: false,
      view_count: 92,
      order_count: 30,
      like_count: 15,
      review_count: 5,
      status: 'ACTIVE',
      created_at: '2025-07-28T10:00:00Z',
      updated_at: '2025-08-15T09:00:00Z',
    },
    {
      id: 3,
      name: '청포도 사워에일',
      product_type: 'individual',
      main_image_url:
        'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 7000,
      final_price: 6300,
      short_description: '상큼한 청포도의 풍미가 가득한 사워에일',
      brewery_name: 'Green Harvest Brewery',
      is_featured: true,
      description:
        '상큼한 청포도의 산미와 부드러운 곡물향이 조화로운 사워에일. 신맛과 단맛의 밸런스가 좋아 와인처럼 즐길 수 있습니다.',
      discount_rate: 10,
      is_on_sale: true,
      view_count: 157,
      order_count: 53,
      like_count: 27,
      review_count: 12,
      status: 'ACTIVE',
      created_at: '2025-08-05T14:00:00Z',
      updated_at: '2025-08-21T08:00:00Z',
    },
  ],
}
