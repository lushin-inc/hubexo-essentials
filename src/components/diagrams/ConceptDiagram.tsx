import type { CSSProperties } from 'react'
import type { DiagramKind } from '../../types'

// Small inline concept visuals. Flat brand colours on light panels — a 1:1
// recreation of the SVG / styled-div diagrams from the prototype.

const panel: CSSProperties = {
  background: '#f7f8fc',
  border: '1px solid #eef0f6',
  borderRadius: 14,
  display: 'flex',
  justifyContent: 'center',
}

function SuccessTriangle() {
  return (
    <div style={{ ...panel, padding: 20 }}>
      <svg width="240" height="150" viewBox="0 0 240 150">
        <polygon points="120,14 226,140 14,140" fill="none" stroke="#d5d8e6" strokeWidth="1.5" />
        <line x1="14" y1="140" x2="226" y2="140" stroke="#00ADED" strokeWidth="4" strokeLinecap="round" />
        <text x="120" y="60" textAnchor="middle" fontSize="12" fontWeight="600" fill="#21245C" fontFamily="-apple-system,sans-serif">Technique</text>
        <text x="120" y="132" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0077a3" fontFamily="-apple-system,sans-serif">Behavior</text>
        <text x="196" y="104" textAnchor="middle" fontSize="12" fontWeight="600" fill="#a9720a" fontFamily="-apple-system,sans-serif" transform="rotate(50 196 104)">Attitude</text>
      </svg>
    </div>
  )
}

function GoalPlanAction() {
  const chip: CSSProperties = {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 600,
    color: '#0077a3',
    background: '#e5f7fe',
    borderRadius: 10,
    padding: '10px 6px',
  }
  const action: CSSProperties = { ...chip, fontWeight: 700, color: '#fff', background: '#00ADED' }
  const arrow: CSSProperties = { color: '#c2c6d6' }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
      <span style={chip}>Goal</span>
      <span style={arrow}>→</span>
      <span style={chip}>Plan</span>
      <span style={arrow}>→</span>
      <span style={action}>Action</span>
    </div>
  )
}

function ThreeThings() {
  const tile: CSSProperties = {
    flex: 1,
    background: '#f7f8fc',
    border: '1px solid #eef0f6',
    borderRadius: 12,
    padding: '12px 10px',
    textAlign: 'center',
  }
  const items: [string, string][] = [
    ['01', 'Quality of prospect'],
    ['02', 'Quality of message'],
    ['03', 'Numbers game'],
  ]
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {items.map(([n, label]) => (
        <div key={n} style={tile}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#00ADED' }}>{n}</div>
          <div style={{ fontSize: 11.5, color: '#4a4e63', marginTop: 4, lineHeight: 1.35 }}>{label}</div>
        </div>
      ))}
    </div>
  )
}

function BeliefWheel() {
  return (
    <div style={{ ...panel, padding: 18 }}>
      <svg width="330" height="150" viewBox="0 0 330 150" fontFamily="-apple-system,sans-serif">
        <defs>
          <marker id="hx-ah" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00ADED" />
          </marker>
        </defs>
        <line x1="92" y1="46" x2="150" y2="46" stroke="#00ADED" strokeWidth="2" markerEnd="url(#hx-ah)" />
        <line x1="238" y1="46" x2="238" y2="86" stroke="#00ADED" strokeWidth="2" markerEnd="url(#hx-ah)" />
        <line x1="238" y1="104" x2="180" y2="104" stroke="#00ADED" strokeWidth="2" markerEnd="url(#hx-ah)" />
        <line x1="92" y1="104" x2="92" y2="64" stroke="#00ADED" strokeWidth="2" markerEnd="url(#hx-ah)" />
        <g>
          <rect x="26" y="30" width="66" height="32" rx="9" fill="#21245C" />
          <text x="59" y="50" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#fff">Belief</text>
        </g>
        <g>
          <rect x="150" y="30" width="88" height="32" rx="9" fill="#eef1fb" />
          <text x="194" y="50" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0045C2">Evidence</text>
        </g>
        <g>
          <rect x="150" y="88" width="88" height="32" rx="9" fill="#eef1fb" />
          <text x="194" y="108" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0045C2">Action</text>
        </g>
        <g>
          <rect x="48" y="88" width="80" height="32" rx="9" fill="#eef1fb" />
          <text x="88" y="108" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0045C2">Result</text>
        </g>
      </svg>
    </div>
  )
}

function BuyerSeller() {
  const sell: CSSProperties = { background: '#e5f7fe', borderRadius: 8, padding: '5px 9px' }
  const buy: CSSProperties = { background: '#fce8ea', borderRadius: 8, padding: '5px 9px' }
  const row: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', fontSize: 12, color: '#4a4e63' }
  const head: CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      <div style={{ background: '#f7f8fc', border: '1px solid #eef0f6', borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ ...head, color: '#0077a3' }}>Seller does</div>
        <div style={row}>
          <span style={sell}>Prospect</span>→<span style={sell}>Discover</span>→<span style={sell}>Demo</span>→<span style={sell}>Close</span>
        </div>
      </div>
      <div style={{ background: '#fdf2f3', border: '1px solid #f6dee1', borderRadius: 12, padding: '14px 16px' }}>
        <div style={{ ...head, color: '#b32636' }}>Buyer does</div>
        <div style={row}>
          <span style={buy}>Lie</span>→<span style={buy}>Steal</span>→<span style={buy}>Stall</span>→<span style={buy}>Ghost</span>
        </div>
      </div>
    </div>
  )
}

function MoneyZone() {
  const bars: { label: string; h: number; bg: string; color: string }[] = [
    { label: 'Pain', h: 46, bg: '#e5ecfb', color: '#0045C2' },
    { label: 'Budget', h: 70, bg: '#cddcf7', color: '#0045C2' },
    { label: 'Decision', h: 94, bg: '#00ADED', color: '#fff' },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 96 }}>
      {bars.map((b) => (
        <div key={b.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div
            style={{
              width: '100%',
              height: b.h,
              background: b.bg,
              borderRadius: '10px 10px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: b.color,
            }}
          >
            {b.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function SixWeaknesses() {
  const items = [
    'Need for approval',
    'Emotional involvement',
    'Unsupportive beliefs',
    'Buy cycle',
    'Money tolerance',
    'Handling rejection',
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
      {items.map((w) => (
        <div
          key={w}
          style={{
            background: '#f7f8fc',
            border: '1px solid #eef0f6',
            borderRadius: 11,
            padding: '11px 13px',
            fontSize: 12.5,
            fontWeight: 600,
            color: '#21245C',
          }}
        >
          {w}
        </div>
      ))}
    </div>
  )
}

export default function ConceptDiagram({ kind }: { kind: DiagramKind }) {
  switch (kind) {
    case 'successTriangle':
      return <SuccessTriangle />
    case 'goalPlanAction':
      return <GoalPlanAction />
    case 'threeThings':
      return <ThreeThings />
    case 'beliefWheel':
      return <BeliefWheel />
    case 'buyerSeller':
      return <BuyerSeller />
    case 'moneyZone':
      return <MoneyZone />
    case 'sixWeaknesses':
      return <SixWeaknesses />
    default:
      return null
  }
}
