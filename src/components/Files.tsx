import type { View } from '../types'
import type { FileKind } from '../data/files'
import { files } from '../data/files'
import { templateUrl } from '../lib/assets'
import BackLink from './BackLink'

function KindIcon({ kind }: { kind: FileKind }) {
  if (kind === 'xlsx') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9.5" x2="21" y2="9.5" />
        <line x1="3" y1="14.5" x2="21" y2="14.5" />
        <line x1="9" y1="4" x2="9" y2="20" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  )
}

function SheetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  )
}

export default function Files({ go }: { go: (v: View) => void }) {
  return (
    <div className="rise-view">
      <BackLink onClick={() => go('home')} style={{ padding: '28px 0 4px' }} />
      <div className="view-title" style={{ margin: '14px 0 8px' }}>
        Files
      </div>

      <div className="section-label" style={{ marginTop: 22 }}>
        Downloads
      </div>
      <div className="file-list">
        {files.map((f) => (
          <div className="file-card" key={f.file}>
            <div className="file-icon">
              <KindIcon kind={f.kind} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="file-title">{f.title}</div>
              <div className="file-desc">{f.desc}</div>
            </div>
            <a className="file-dl" href={templateUrl(f.file)} download={f.file}>
              Download
            </a>
          </div>
        ))}
      </div>

      <div className="section-label" style={{ marginTop: 34 }}>
        Cheat Sheets
      </div>
      <div className="file-list" style={{ marginBottom: 72 }}>
        <div
          className="file-card file-card-btn"
          role="button"
          tabIndex={0}
          onClick={() => go('cheat')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              go('cheat')
            }
          }}
        >
          <div className="file-icon">
            <SheetIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div className="file-title">The Pain Funnel</div>
            <div className="file-desc">The questions that surface and deepen pain, in order.</div>
          </div>
          <span className="file-dl">Open →</span>
        </div>
      </div>
    </div>
  )
}
