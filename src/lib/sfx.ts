/**
 * Âm thanh "ting" mở quà — tổng hợp bằng Web Audio API,
 * không cần file ngoài, không lo bản quyền.
 */
export function playOpenChime(): void {
  try {
    const Ctx: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return

    const ctx = new Ctx()
    void ctx.resume()

    // Gõ nhẹ 4 nốt lên: Mi – Sol – Đô – Mi (giống tiếng chuông nhỏ)
    const notes = [659.25, 783.99, 1046.5, 1318.51]
    const now = ctx.currentTime

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      const t = now + i * 0.12
      gain.gain.setValueAtTime(0.0001, t)
      gain.gain.exponentialRampToValueAtTime(0.16, t + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t)
      osc.stop(t + 1)
    })

    window.setTimeout(() => {
      void ctx.close()
    }, 2200)
  } catch {
    // Âm thanh phụ — im lặng cũng không sao
  }
}
