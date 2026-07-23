import { useCallback, useState } from 'react'
import type { View } from './types'
import { sessions } from './data/sessions'
import Nav from './components/Nav'
import Home from './components/Home'
import SessionView from './components/SessionView'
import Flashcards from './components/Flashcards'
import Glossary from './components/Glossary'
import Files from './components/Files'
import CheatSheet from './components/CheatSheet'

type Theme = 'light' | 'dark'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  const go = useCallback((v: View) => {
    setView(v)
    window.scrollTo(0, 0)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('hx-theme', next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const s1 = sessions.find((s) => s.id === 's1')!
  const s2 = sessions.find((s) => s.id === 's2')!
  const s3 = sessions.find((s) => s.id === 's3')!
  const s4 = sessions.find((s) => s.id === 's4')!

  return (
    <div className="app">
      <Nav go={go} theme={theme} onToggleTheme={toggleTheme} />
      <div className="wrap">
        {view === 'home' && <Home go={go} />}
        {view === 's1' && <SessionView session={s1} go={go} />}
        {view === 's2' && <SessionView session={s2} go={go} />}
        {view === 's3' && <SessionView session={s3} go={go} />}
        {view === 's4' && <SessionView session={s4} go={go} />}
        {view === 'cards' && <Flashcards go={go} />}
        {view === 'glossary' && <Glossary go={go} />}
        {view === 'files' && <Files go={go} />}
        {view === 'cheat' && <CheatSheet go={go} />}
      </div>
    </div>
  )
}
