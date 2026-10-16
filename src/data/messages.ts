export type FlowerType = 'rose' | 'tulip' | 'daisy'

export interface FlowerSpec {
  id: number
  type: FlowerType
  color: string
  accent: string
  /** Vị trí ngang trong vườn (0–100%) */
  left: number
  /** Kích thước (khuôn px) */
  size: number
  /** Độ trễ khi nở (ms) để tạo hiệu ứng nở dần */
  bloomDelay: number
  message: string
}

export const flowers: FlowerSpec[] = [
  {
    id: 1,
    type: 'rose',
    color: '#ff8fb1',
    accent: '#e63980',
    left: 8,
    size: 74,
    bloomDelay: 0,
    message: 'Em luôn xinh đẹp theo cách của riêng mình 💗',
  },
  {
    id: 2,
    type: 'tulip',
    color: '#c3a4ff',
    accent: '#7b5bd6',
    left: 24,
    size: 66,
    bloomDelay: 140,
    message: 'Mong em luôn vui vẻ và cười thật tươi nhé 🌷',
  },
  {
    id: 3,
    type: 'daisy',
    color: '#fff2c2',
    accent: '#ffb703',
    left: 40,
    size: 60,
    bloomDelay: 280,
    message: 'Gửi em một cái ôm thật chặt 🤗',
  },
  {
    id: 4,
    type: 'rose',
    color: '#ff6f9c',
    accent: '#c1123f',
    left: 56,
    size: 80,
    bloomDelay: 420,
    message: 'Anh thương em nhiều lắm, công chúa nhỏ 💕',
  },
  {
    id: 5,
    type: 'tulip',
    color: '#ffb3c7',
    accent: '#e0538a',
    left: 72,
    size: 64,
    bloomDelay: 560,
    message: 'Dù đi đâu, em cũng luôn là điều tuyệt vời nhất với anh 🌸',
  },
  {
    id: 6,
    type: 'daisy',
    color: '#dbeafe',
    accent: '#7fa8d9',
    left: 87,
    size: 58,
    bloomDelay: 700,
    message: 'Mỗi ngày bên em đều là một ngày dịu dàng 💮',
  },
]

export interface WishCard {
  id: number
  emoji: string
  text: string
}

export const wishCards: WishCard[] = [
  { id: 1, emoji: '💕', text: 'Mong em luôn vui vẻ' },
  { id: 2, emoji: '🌷', text: 'Mong mọi điều tốt đẹp sẽ đến với em' },
  { id: 3, emoji: '🌸', text: 'Mong em luôn tự tin và yêu bản thân' },
  { id: 4, emoji: '💗', text: 'Và mong anh có thể đồng hành cùng em thật lâu' },
]

export interface PhotoSlot {
  id: number
  src: string
  alt: string
  caption: string
  /** Xoay nhẹ để trông như album ảnh thật */
  tilt: number
}

/**
 * 4 ô ảnh kỷ niệm. Đặt file vào `public/photos/` với đúng tên bên dưới.
 * Nếu chưa có file, ô ảnh sẽ tự hiển thị khung dễ thương thay vì vỡ layout.
 */
export const photos: PhotoSlot[] = [
  {
    id: 1,
    src: 'photos/us-1.jpg',
    alt: 'Kỷ niệm của anh và Mỹ Hạnh',
    caption: 'Anh & em 💗',
    tilt: -3,
  },
  {
    id: 2,
    src: 'photos/us-2.jpg',
    alt: 'Kỷ niệm của anh và Mỹ Hạnh',
    caption: 'Nụ cười của em 🌸',
    tilt: 2.5,
  },
  {
    id: 3,
    src: 'photos/us-3.jpg',
    alt: 'Kỷ niệm của anh và Mỹ Hạnh',
    caption: 'Khoảnh khắc dịu dàng 🤍',
    tilt: -2,
  },
  {
    id: 4,
    src: 'photos/us-4.jpg',
    alt: 'Kỷ niệm của anh và Mỹ Hạnh',
    caption: 'Lúc nào cũng cạnh nhau 💌',
    tilt: 3,
  },
]
