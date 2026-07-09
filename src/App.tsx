import { useCallback, useState } from 'react'
import type { View } from './types'
import { sessions } from './data/sessions'
import Nav from './components/Nav'
import Home from './components/Home'
import SessionView from './components/SessionView'
import Flashcards from './components/Flashcards'
import Glossary from './components/Glossary'
import PasswordGate from './components/PasswordGate'

const UNLOCK_KEY = 'hx-unlocked'

export default function App() {
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(UNLOCK_KEY) === '1'
    } catch {
      return false
    }
  })
  const [view, setView] = useState<View>('home')

  const go = useCallback((v: View) => {
    setView(v)
    window.scrollTo(0, 0)
  }, [])

  if (!unlocked) {
    return (
      <PasswordGate
        onUnlock={() => {
          try {
            sessionStorage.setItem(UNLOCK_KEY, '1')
          } catch {
            /* sessionStorage unavailable (e.g. private mode) — unlock anyway */
          }
          setUnlocked(true)
        }}
      />
    )
  }

  const s1 = sessions.find((s) => s.id === 's1')!
  const s2 = sessions.find((s) => s.id === 's2')!
  const s3 = sessions.find((s) => s.id === 's3')!

  return (
    <div className="app">
      <Nav go={go} />
      <div className="wrap">
        {view === 'home' && <Home go={go} />}
        {view === 's1' && <SessionView session={s1} go={go} />}
        {view === 's2' && <SessionView session={s2} go={go} />}
        {view === 's3' && <SessionView session={s3} go={go} />}
        {view === 'cards' && <Flashcards go={go} />}
        {view === 'glossary' && <Glossary go={go} />}
      </div>
    </div>
  )
}
