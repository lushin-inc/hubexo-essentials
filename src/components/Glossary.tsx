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
      <div className="view-title" style={{ margin: '14px 0 24px' }}>
        Glossary
      </div>

      <div className="gloss-panel">
        <input
          className="in-dark gloss-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms, e.g. pain, cookbook, decision…"
          aria-label="Search glossary terms"
        />
        <div>
          {rows.map((t) => (
            <div className="gloss-row" key={t.term}>
              <div className="gloss-term">{t.term}</div>
              <div className="gloss-def">{t.definition}</div>
            </div>
          ))}
          {rows.length === 0 && (
            <div className="gloss-none">No terms match that search.</div>
          )}
        </div>
      </div>
    </div>
  )
}
