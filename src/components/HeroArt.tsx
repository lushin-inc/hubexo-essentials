import { heroImageSrc } from '../data/images'
import { publicUrl } from '../lib/assets'

// Hero visual. If a real image is configured in data/images.ts we render it;
// otherwise we fall back to the Success Triangle diagram on a navy panel.
export default function HeroArt() {
  if (heroImageSrc) {
    return <img className="img-cover" src={publicUrl(heroImageSrc)} alt="Hubexo Essentials" />
  }
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg,#21245C 0%,#171a42 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 22,
          left: 26,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: '#8fdcf6',
        }}
      >
        The Success Triangle
      </div>
      <svg width="330" height="196" viewBox="0 0 330 196" fill="none" fontFamily="-apple-system,sans-serif">
        <polygon points="165,26 300,172 30,172" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
        <line x1="30" y1="172" x2="300" y2="172" stroke="#00ADED" strokeWidth="4" strokeLinecap="round" />
        <circle cx="165" cy="26" r="3.2" fill="rgba(255,255,255,0.55)" />
        <circle cx="30" cy="172" r="3.2" fill="#00ADED" />
        <circle cx="300" cy="172" r="3.2" fill="#00ADED" />
        <text x="165" y="96" textAnchor="middle" fontSize="15" fontWeight="600" fill="#ffffff">Technique</text>
        <text x="238" y="126" textAnchor="middle" fontSize="15" fontWeight="600" fill="#c3c7e8" transform="rotate(47 238 126)">Attitude</text>
        <text x="165" y="160" textAnchor="middle" fontSize="15" fontWeight="700" fill="#8fdcf6">Behavior</text>
      </svg>
    </div>
  )
}
