import { useEffect, useRef, useState } from 'react'
import './MusicPlayer.css'

/**
 * Nhạc nền lãng mạn. Ưu tiên file local `audio/bgm.mp3` (đã có sẵn trong dự án).
 * Không tự phát có tiếng ngay khi tải trang (trình duyệt sẽ chặn).
 * Thử phát sau khi người dùng mở quà (đã có gesture), và cho phép bật/tắt bất cứ lúc nào.
 */
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const audio = new Audio('audio/bgm.mp3')
    audio.loop = true
    audio.volume = 0.45
    audio.preload = 'auto'
    audioRef.current = audio

    const onEnded = () => setPlaying(false)
    const onError = () => {
      setAvailable(false)
      setPlaying(false)
    }
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    // Sau khi trang mở (gesture đã có từ nút mở quà), thử phát nhạc một lần.
    // Nếu trình duyệt chặn, giữ im lặng — người dùng vẫn bật được bằng nút.
    const tryAuto = window.setTimeout(() => {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }, 300)

    return () => {
      window.clearTimeout(tryAuto)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || !available) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  return (
    <button
      type="button"
      className={`music-btn ${playing ? 'music-btn--playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Tắt nhạc' : 'Bật nhạc'}
      title={available ? (playing ? 'Tắt nhạc' : 'Bật nhạc') : 'Nhạc chưa sẵn sàng'}
      disabled={!available}
    >
      <span className={`music-btn__disc ${playing ? 'music-btn__disc--spin' : ''}`} aria-hidden="true">
        ♪
      </span>
      <span className="music-btn__label">{playing ? 'Tắt nhạc' : 'Bật nhạc'}</span>
    </button>
  )
}
