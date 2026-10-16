# 💗 Món quà 20/10 dành riêng cho Mỹ Hạnh

Website chúc mừng ngày Phụ nữ Việt Nam 20/10 — một món quà online lãng mạn, dễ thương
và có nhiều hiệu ứng tương tác. Được làm bằng React + Vite + TypeScript.

## ✨ Có gì trong này

- **Màn hình mở quà** — hộp quà rung nhẹ, bấm vào là mở ra với hiệu ứng trái tim bay.
- **Lời chúc 20/10** — chữ hiện ra từng ký tự (typewriter) + trái tim bay + lấp lánh.
- **Bức thư tình** — hiện dần khi cuộn tới, chữ "viết tay" từng đoạn.
- **Khoảnh khắc của hai mình** — album ảnh kỷ niệm (xem mục "Thêm ảnh" bên dưới).
- **Vườn hoa** — hoa nở dần khi cuộn tới; bấm vào từng bông để nhận lời nhắn dễ thương.
- **Những điều anh muốn nói** — các thẻ hiện dần + hiệu ứng hover.
- **Cảnh kết** — bầu trời đêm sao, bấm nút để nhận "cái ôm" + hiệu ứng bung trăm trái tim.
- **Nhạc nền** piano lãng mạn — có nút bật/tắt ở góc màn hình (đĩa xoay khi phát).

## 🖥️ Chạy trên máy (local)

Dự án cần Node.js (bản LTS). Trong thư mục dự án:

```bash
npm install
npm run dev
```

Sau đó mở trình duyệt vào `http://localhost:5173/`.

> Lưu ý: trên máy này Node đang cài "portable" nên nếu lệnh `npm`/`node` không chạy,
> hãy mở PowerShell và chạy trực tiếp theo đường dẫn, ví dụ:
> `$env:PATH="$env:LOCALAPPDATA\nodejs-portable\node-v24.22.0-win-x64;$env:PATH"` rồi thử lại.

## 📸 Thêm ảnh kỷ niệm (quan trọng)

Mục "Khoảnh khắc của hai mình" mặc định tìm 4 ảnh trong thư mục `public/photos/`
với đúng tên sau:

| Tên file             | Gợi ý                                            |
| -------------------- | ------------------------------------------------ |
| `public/photos/us-1.jpg` | Ảnh 1 — anh & em                             |
| `public/photos/us-2.jpg` | Ảnh 2 — nụ cười của em                        |
| `public/photos/us-3.jpg` | Ảnh 3 — khoảnh khắc dịu dàng                  |
| `public/photos/us-4.jpg` | Ảnh 4 — lúc nào cũng cạnh nhau                |

**Cách thêm:** copy ảnh của bạn vào thư mục `public/photos/` rồi đổi tên thành
`us-1.jpg`, `us-2.jpg`, `us-3.jpg`, `us-4.jpg` (hoặc `.png` — nếu đổi đuôi, nhớ sửa
thành phần `src` trong `src/data/messages.ts` cho khớp).

Nếu chưa có đủ ảnh, ô trống sẽ tự hiển thị khung dễ thương (không vỡ layout),
nên website luôn hiển thị đẹp dù chưa thêm ảnh.

> Ảnh gửi qua khung chat không tự lưu thành file được — bạn cần tự copy ảnh vào
> `public/photos/` rồi build lại (hoặc chạy `npm run dev` là thấy ngay).

## 🎵 Nhạc nền

- File nhạc: `public/audio/bgm.mp3`.
- Bài hiện tại: **"Romantic Wedding Piano"** của **Kris Harmony** (Jamendo),
  giấy phép **CC BY-NC-SA 3.0** — dùng được cho mục đích cá nhân, phi thương mại.
- Muốn đổi nhạc: ghi đè `public/audio/bgm.mp3` bằng bài bạn thích (giữ đúng tên),
  hoặc sửa đường dẫn trong `src/components/MusicPlayer.tsx`.
- Nhạc **không tự phát** ngay khi tải trang (trình duyệt chặn autoplay). Nó thử phát
  sau khi bạn bấm "Mở quà" (đã có thao tác người dùng), và luôn có nút bật/tắt.

## 📦 Build & triển khai (deploy) — gửi link cho người yêu mở

### Cách 1 — Vercel (nhanh nhất, miễn phí, có link công khai)

1. Tạo tài khoản [vercel.com](https://vercel.com) (đăng nhập bằng GitHub).
2. Đẩy dự án này lên một repo GitHub:
   ```bash
   git init
   git add .
   git commit -m "Quà 20/10 cho Mỹ Hạnh"
   git branch -M main
   git remote add origin https://github.com/TEN_USER/ten-repo.git
   git push -u origin main
   ```
3. Trên Vercel → **Add New → Project** → chọn repo vừa đẩy → **Deploy**.
   - Không cần đổi setting gì cả (đã cấu hình `base: './'` sẵn).
4. Xong — Vercel cho một link công khai dạng `https://ten-repo.vercel.app`,
   gửi link đó cho người yêu mở bằng điện thoại là được.

### Cách 2 — GitHub Pages (miễn phí)

1. Đẩy code lên GitHub (như trên).
2. Vào **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)**.
3. Save. Chờ 1–2 phút, trang sẽ live tại
   `https://TEN_USER.github.io/ten-repo/`.

> Dự án đã đặt `base: './'` trong `vite.config.ts` nên cả Vercel lẫn GitHub Pages
> (kể cả khi đặt trong thư mục con) đều hoạt động bình thường.

## 🛠️ Cấu trúc code

```
src/
  App.tsx                    # Gộp các phần lại theo thứ tự cuộn
  components/
    IntroScreen.tsx          # Màn hình mở quà
    MusicPlayer.tsx          # Nút bật/tắt nhạc nổi
    WishSection.tsx          # Phần 1 — lời chúc (typewriter)
    LoveLetter.tsx           # Phần 2 — bức thư tình
    PhotoMemories.tsx        # Album ảnh kỷ niệm
    FlowerGarden.tsx         # Phần 3 — vườn hoa tương tác
    WishCards.tsx            # Phần 4 — những điều anh muốn nói
    FinalSurprise.tsx        # Phần 5 — cảnh kết + cái ôm
    effects/                 # Trái tim bay, cánh hoa rơi
  data/messages.ts           # Nội dung lời nhắn, danh sách hoa/thẻ/ảnh
  hooks/                     # useTypewriter, useReveal, usePrefersReducedMotion
  lib/sfx.ts                 # Tiếng chuông mở quà (Web Audio, không cần file)
  styles/global.css          # Biến màu, font, con trỏ trái tim
```

Hiệu ứng ưu tiên CSS + Intersection Observer (nhẹ, mượt trên điện thoại) và có
tôn trọng `prefers-reduced-motion` của hệ điều hành.
