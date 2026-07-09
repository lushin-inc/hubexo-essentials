import type { View, Session } from '../types'
import SessionBanner from './SessionBanner'
import ConceptCard from './ConceptCard'
import BackLink from './BackLink'

export default function SessionView({
  session,
  go,
}: {
  session: Session
  go: (v: View) => void
}) {
  return (
    <div className="rise-view">
      <BackLink onClick={() => go('home')} style={{ padding: '28px 0 14px' }} />
      <SessionBanner session={session} />
      <div className="concept-grid">
        {session.concepts.map((c) => (
          <ConceptCard key={c.id} concept={c} />
        ))}
      </div>
    </div>
  )
}
