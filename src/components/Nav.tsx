import type { View } from '../types'

// Where the "Lessons Learned & Wins" button points. Change here if the form
// link ever moves.
const LESSONS_FORM_URL = 'https://tinyurl.com/HubexoLushin'

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export default function Nav({
  go,
  theme,
  onToggleTheme,
}: {
  go: (v: View) => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
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
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}
