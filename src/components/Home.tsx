import type { View } from '../types'
import { sessions } from '../data/sessions'
import HeroArt from './HeroArt'
import SessionCard from './SessionCard'

export default function Home({ go }: { go: (v: View) => void }) {
  return (
    <div className="rise-home">
      <div className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">The core Sandler methodology, in one place.</h1>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => go('cards')}>
                Study flashcards
              </button>
              <button className="btn-outline" onClick={() => go('glossary')}>
                Glossary
              </button>
            </div>
          </div>
          <div className="hero-img">
            <HeroArt />
          </div>
        </div>
      </div>

      <div className="section-label">Sessions</div>

      {sessions.map((s) => (
        <SessionCard key={s.id} session={s} onOpen={() => go(s.id)} />
      ))}

      <div style={{ height: 64 }} />
    </div>
  )
}
