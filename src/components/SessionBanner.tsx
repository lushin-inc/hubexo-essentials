import type { Session } from '../types'
import { publicUrl } from '../lib/assets'

// Session-detail banner. Real image (with a left-to-right dark scrim) if
// provided, else a navy panel carrying a ghost number. The eyebrow + title
// overlay bottom-left in both cases.
export default function SessionBanner({ session }: { session: Session }) {
  return (
    <div className="banner">
      {session.bannerSrc ? (
        <>
          <img className="img-cover" src={publicUrl(session.bannerSrc)} alt={session.title} />
          <div className="banner-scrim" />
        </>
      ) : (
        <div className="banner-fallback">
          <div className="banner-ghost">{session.number}</div>
        </div>
      )}
      <div className="banner-text">
        <div className="banner-eyebrow">
          {session.date} · {session.label}
        </div>
        <div className="banner-title">{session.title}</div>
      </div>
    </div>
  )
}
