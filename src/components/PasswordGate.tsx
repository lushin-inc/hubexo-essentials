import { useState } from 'react'
import type { FormEvent } from 'react'
import { SITE_PASSWORD } from '../config'

// Light client-side gate. See config.ts for how to change the password and
// the note on what this does / doesn't protect.
export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [val, setVal] = useState('')
  const [err, setErr] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (val.trim().toLowerCase() === SITE_PASSWORD.trim().toLowerCase()) {
      onUnlock()
    } else {
      setErr(true)
    }
  }

  return (
    <div className="app gate-app">
      <form className="gate-card" onSubmit={submit}>
        <div className="gate-brand">
          <span className="status-dot" />
          <span>
            Lushin / Sandler Essentials <span className="wordmark-sub">· Hubexo HQ</span>
          </span>
        </div>
        <h1 className="gate-title">Enter the access password</h1>
        <p className="gate-sub">
          This portal is for reps in the Hubexo Essentials training. Enter the password
          from your invite email to continue.
        </p>
        <input
          className="in-dark gate-input"
          type="password"
          value={val}
          autoFocus
          onChange={(e) => {
            setVal(e.target.value)
            if (err) setErr(false)
          }}
          placeholder="Password"
          aria-label="Password"
        />
        {err && <div className="gate-err">That password didn&rsquo;t match. Try again.</div>}
        <button className="btn-primary gate-btn" type="submit">
          Enter
        </button>
      </form>
    </div>
  )
}
