import { useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import type { Concept } from '../types'
import { categoryColors } from '../data/categories'
import { Chevron } from './Icons'
import ConceptDiagram from './diagrams/ConceptDiagram'
import { DownloadLight } from './DownloadLink'

export default function ConceptCard({ concept }: { concept: Concept }) {
  const [open, setOpen] = useState(false)
  const pill = categoryColors[concept.category]

  const toggle = () => setOpen((o) => !o)

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    // Ignore clicks on the download link (it handles itself).
    if ((e.target as HTMLElement).closest('a')) return
    toggle()
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if ((e.target as HTMLElement).closest('a')) return
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={'concept' + (concept.fullWidth ? ' full' : '')}
      data-open={open}
      onClick={onClick}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      aria-expanded={open}
    >
      <div className="concept-head">
        <div style={{ flex: 1 }}>
          <span className="pill" style={{ color: pill.fg, background: pill.bg }}>
            {concept.category}
          </span>
          <div className="concept-title">{concept.title}</div>
          <div className="concept-tag">{concept.concept}</div>
        </div>
        <Chevron />
      </div>

      <div className="cd">
        <div className="cd-divider" />
        {concept.diagram && <ConceptDiagram kind={concept.diagram} />}
        <ul className="points" style={{ marginTop: concept.diagram ? 14 : 0 }}>
          {concept.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        {concept.asset && <DownloadLight asset={concept.asset} />}
      </div>
    </div>
  )
}
