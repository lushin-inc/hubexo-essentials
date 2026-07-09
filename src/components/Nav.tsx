import type { View } from '../types'

export default function Nav({ go }: { go: (v: View) => void }) {
  return (
    <div className="nav">
      <div className="nav-inner">
        <span className="status-dot" />
        <div className="wordmark" onClick={() => go('home')}>
          Lushin / Sandler Essentials <span className="wordmark-sub">· Hubexo HQ</span>
        </div>
        <div className="nav-links">
          <div className="nav-item" onClick={() => go('home')}>
            Sessions
          </div>
          <div className="nav-item" onClick={() => go('cards')}>
            Flashcards
          </div>
          <div className="nav-item" onClick={() => go('glossary')}>
            Glossary
          </div>
        </div>
      </div>
    </div>
  )
}
