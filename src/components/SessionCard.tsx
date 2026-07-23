import type { KeyboardEvent } from 'react'
import type { Session } from '../types'
import SessionThumb from './SessionThumb'

export default function SessionCard({
  session,
  onOpen,
}: {
  session: Session
  onOpen: () => void
}) {
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen()
    }
  }
  return (
    <div
      className={'session-card ' + (session.accent ? 'accent' : 'plain')}
      onClick={onOpen}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
    >
      <div className="session-rail">
        <SessionThumb session={session} />
      </div>
      <div className="session-body">
        <div className="ghost-num">{session.number}</div>
        <div style={{ flex: 1 }}>
          <div className="eyebrow">
            {session.date} · {session.label}
          </div>
          <div className="session-title">{session.title}</div>
          <div className="chips">
            {session.topics.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
            {session.extraTopics ? (
              <span className="chip-more">+{session.extraTopics} more</span>
            ) : null}
          </div>
        </div>
        <span className="concept-count">{session.concepts.length} concepts →</span>
      </div>
    </div>
  )
}
