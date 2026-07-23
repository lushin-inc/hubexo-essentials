import type { View } from '../types'

// Where the "Lessons Learned & Wins" button points. Change here if the form
// link ever moves.
const LESSONS_FORM_URL = 'https://tinyurl.com/HubexoLushin'

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
          <div className="nav-item" onClick={() => go('files')}>
            Files
          </div>
          <a
            className="nav-cta"
            href={LESSONS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lessons Learned &amp; Wins
          </a>
        </div>
      </div>
    </div>
  )
}
