'use client'

import { useEffect } from 'react'

const BLOCK_TEXT = [
  '深域。測定値: 不定。',
  'この区画の底は記録されていません。',
  '下方向への進行を継続しています。',
  '基準点は移動しました。',
]

const BLOCKS = Array.from({ length: 20 }, (_, i) => i)

export default function ShinkaiClient() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
        window.scrollTo({ top: 0 })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ backgroundColor: '#0a0a0c', minHeight: '100vh', fontFamily: '"Noto Serif JP", serif' }}>
      {/* 次: こだまはありますか */}
      <div style={{ padding: '4rem 2rem', maxWidth: '540px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#3a3a4a', marginBottom: '4rem', textTransform: 'uppercase' }}>
          Zone B — 深域
        </p>
        {BLOCKS.map((i) => (
          <div key={i} style={{ marginBottom: '6rem', opacity: Math.max(0.1, 1 - i * 0.04) }}>
            {BLOCK_TEXT.map((line, j) => (
              <p key={j} style={{ color: '#4a5060', fontSize: '0.85rem', lineHeight: 2, marginBottom: '0.5rem' }}>
                {line}
              </p>
            ))}
            <p style={{ color: '#2a2a38', fontSize: '0.7rem', marginTop: '1rem', letterSpacing: '0.15em' }}>
              — {i + 1} —
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
