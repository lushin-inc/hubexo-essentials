import { useState } from 'react'
import type { View } from '../types'
import { glossary } from '../data/glossary'
import BackLink from './BackLink'

export default function Glossary({ go }: { go: (v: View) => void }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  // Case-insensitive substring match across the term AND its definition.
  const rows = glossary.filter((t) =>
    (t.term + ' ' + t.definition).toLowerCase().includes(q),
  )

  return (
    <div className="rise-view">
      <BackLink onClick={() => go('home')} style={{ padding: '28px 0 4px' }} />
      <div
        style={{
          fontSize: 34,
          fontWeight: 600,
          color: '#fff',
          margin: '14px 0 24px',
          letterSpacing: '-.015em',
        }}
      >
        Glossary
      </div>

      <div
        style={{
          background: 'rgba(255,255,255,.04)',
          border: '1px solid rgba(255,255,255,.09)',
          borderRadius: 24,
          padding: '32px 34px',
          marginBottom: 72,
        }}
      >
        <input
          className="in-dark"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms, e.g. pain, cookbook, decision…"
          aria-label="Search glossary terms"
          style={{
            width: '100%',
            background: 'rgba(255,255,255,.06)',
            border: '1px solid rgba(255,255,255,.14)',
            borderRadius: 14,
            padding: '14px 16px',
            color: '#fff',
            fontSize: 15,
            outline: 'none',
            marginBottom: 10,
          }}
        />
        <div>
          {rows.map((t) => (
            <div className="gloss-row" key={t.term}>
              <div className="gloss-term">{t.term}</div>
              <div className="gloss-def">{t.definition}</div>
            </div>
          ))}
          {rows.length === 0 && (
            <div style={{ padding: '18px 0 4px', fontSize: 13.5, color: '#8f94c4' }}>
              No terms match that search.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
