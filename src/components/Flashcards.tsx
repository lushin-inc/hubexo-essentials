import { useCallback, useEffect, useRef, useState } from 'react'
import type { View } from '../types'
import { flashcards } from '../data/flashcards'
import { categoryColors } from '../data/categories'
import { DownloadDark } from './DownloadLink'
import BackLink from './BackLink'

type Deck = 'all' | 's1' | 's2' | 's3' | 's4'

function deckIndices(deck: Deck): number[] {
  const all = flashcards.map((_, i) => i)
  if (deck === 'all') return all
  const n = deck === 's1' ? 1 : deck === 's2' ? 2 : deck === 's3' ? 3 : 4
  return all.filter((i) => flashcards[i].s === n)
}

export default function Flashcards({ go }: { go: (v: View) => void }) {
  const [deck, setDeck] = useState<Deck>('all')
  const [order, setOrder] = useState<number[]>(() => deckIndices('all'))
  const [pos, setPos] = useState(0)
  const [flip, setFlip] = useState(false)

  // Keep the latest order available to the keyboard handler without
  // re-registering the listener on every change.
  const orderRef = useRef(order)
  orderRef.current = order

  const rebuild = (d: Deck) => {
    setDeck(d)
    setOrder(deckIndices(d))
    setPos(0)
    setFlip(false)
  }

  const shuffle = () => {
    const a = [...orderRef.current]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    setOrder(a)
    setPos(0)
    setFlip(false)
  }

  const next = useCallback(() => {
    setPos((p) => (p + 1) % orderRef.current.length)
    setFlip(false)
  }, [])
  const prev = useCallback(() => {
    setPos((p) => (p - 1 + orderRef.current.length) % orderRef.current.length)
    setFlip(false)
  }, [])

  // ← prev · → next · space flips. Active only while this view is mounted.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        setFlip((f) => !f)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const card = flashcards[order[pos]] ?? flashcards[0]
  const total = order.length || 1
  const idx = pos + 1
  const progressPct = Math.round((idx / total) * 100) + '%'
  const pill = categoryColors[card.category]

  const seg = (label: string, value: Deck) => (
    <button
      className={'seg' + (deck === value ? ' active' : '')}
      onClick={() => rebuild(value)}
    >
      {label}
    </button>
  )

  return (
    <div className="rise-view" style={{ paddingBottom: 80 }}>
      <BackLink onClick={() => go('home')} style={{ padding: '28px 0 14px' }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 600, color: '#fff', letterSpacing: '-.015em' }}>
          Flashcards
        </div>
        <div className="seg-wrap">
          {seg('All', 'all')}
          {seg('Session 1', 's1')}
          {seg('Session 2', 's2')}
          {seg('Session 3', 's3')}
          {seg('Session 4', 's4')}
        </div>
        <button className="shuffle" onClick={shuffle}>
          ⇄ Shuffle
        </button>
      </div>

      <div className="fcard" data-flip={flip} onClick={() => setFlip((f) => !f)} role="button" tabIndex={0}>
        <div className="fcard-inner">
          {/* front */}
          <div
            className="fface"
            style={{
              background: 'linear-gradient(155deg,#fff 0%,#f4f6fc 100%)',
              boxShadow: '0 30px 70px -30px rgba(0,0,0,.6)',
            }}
          >
            <span
              style={{
                alignSelf: 'flex-start',
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '.09em',
                textTransform: 'uppercase',
                color: pill.fg,
                background: pill.bg,
                padding: '5px 11px',
                borderRadius: 20,
              }}
            >
              {card.category}
            </span>
            <div
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: '#1d1f2b',
                marginTop: 20,
                letterSpacing: '-.02em',
                lineHeight: 1.1,
              }}
            >
              {card.concept}
            </div>
            <div style={{ fontSize: 15, color: '#5b6070', marginTop: 14, lineHeight: 1.5 }}>
              {card.prompt}
            </div>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: 26,
                fontSize: 12,
                fontWeight: 600,
                color: '#a2a7bd',
                letterSpacing: '.03em',
              }}
            >
              Tap to reveal ↦
            </div>
          </div>

          {/* back */}
          <div
            className="fface fback"
            style={{
              background: 'linear-gradient(155deg,#1b1f4d 0%,#141738 100%)',
              border: '1px solid rgba(0,173,237,.35)',
              boxShadow: '0 30px 70px -30px rgba(0,0,0,.6)',
            }}
          >
            <span
              style={{
                alignSelf: 'flex-start',
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '.09em',
                textTransform: 'uppercase',
                color: '#8fdcf6',
              }}
            >
              Answer
            </span>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#fff',
                marginTop: 16,
                lineHeight: 1.3,
                letterSpacing: '-.01em',
              }}
            >
              {card.back}
            </div>
            {card.asset && <DownloadDark asset={card.asset} />}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: 26,
                fontSize: 12,
                fontWeight: 600,
                color: '#7f84b8',
                letterSpacing: '.03em',
              }}
            >
              {card.concept} · tap to flip back
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 620, margin: '22px auto 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="fnav" onClick={prev} aria-label="Previous card">
          ←
        </button>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: progressPct }} />
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#aeb3d8', minWidth: 56, textAlign: 'center' }}>
          {idx} / {total}
        </div>
        <button className="fnav" onClick={next} aria-label="Next card">
          →
        </button>
      </div>
      <div style={{ textAlign: 'center', fontSize: 12, color: '#7f84b8', marginTop: 16 }}>
        Use ← → to move · space to flip
      </div>
    </div>
  )
}
