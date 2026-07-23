import type { View } from '../types'
import BackLink from './BackLink'

// The Pain Funnel — from the "Pain By Images" deck. Ask top to bottom.
const stages: { label: string; qs: string[] }[] = [
  {
    label: 'Open it up',
    qs: ['What do you mean?', 'Tell me more.', 'Can you give me a specific example?'],
  },
  {
    label: 'Dig in',
    qs: [
      'What happened because of that?',
      'What else have you tried?',
      'How long has that been going on?',
      'Who else knows or cares about this?',
    ],
  },
  {
    label: 'The cost',
    qs: [
      "What's it costing you?",
      'Fast-forward a year — what happens if you do nothing?',
      'Have you given up?',
    ],
  },
  {
    label: 'The ask',
    qs: ['Do you want help?'],
  },
]

export default function CheatSheet({ go }: { go: (v: View) => void }) {
  let n = 0
  return (
    <div className="rise-view">
      <BackLink onClick={() => go('files')} label="Files" style={{ padding: '28px 0 4px' }} />
      <div className="sheet">
        <div className="sheet-title">The Pain Funnel</div>
        <div className="sheet-note">Ask in order. Let them answer before you move to the next one.</div>
        {stages.map((st) => (
          <div className="sheet-stage" key={st.label}>
            <div className="sheet-stage-label">{st.label}</div>
            {st.qs.map((q) => {
              n += 1
              return (
                <div className="sheet-q" key={q}>
                  <span className="sheet-num">{n}</span>
                  <span className="sheet-qtext">{q}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
