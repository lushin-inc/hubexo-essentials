import type { Session } from '../types'
import { publicUrl } from '../lib/assets'

// Left rail on the home session card. Real image if provided, else a navy
// tile with the session number.
export default function SessionThumb({ session }: { session: Session }) {
  if (session.thumbnailSrc) {
    return <img className="img-cover" src={publicUrl(session.thumbnailSrc)} alt={session.title} />
  }
  const numColor = session.accent ? 'rgba(0,173,237,.9)' : 'rgba(255,255,255,.22)'
  return (
    <div className="thumb-fallback">
      <div className="thumb-num" style={{ color: numColor }}>
        {session.number}
      </div>
    </div>
  )
}
