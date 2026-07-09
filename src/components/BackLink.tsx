import type { CSSProperties, KeyboardEvent } from 'react'

// "← Sessions" back link used on every detail view.
export default function BackLink({
  onClick,
  style,
}: {
  onClick: () => void
  style?: CSSProperties
}) {
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }
  return (
    <div
      className="backlink"
      style={style}
      onClick={onClick}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
    >
      <span style={{ fontSize: 16 }}>←</span> Sessions
    </div>
  )
}
