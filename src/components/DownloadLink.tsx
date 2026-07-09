import type { MouseEvent } from 'react'
import type { Asset } from '../types'
import { templateUrl } from '../lib/assets'

// stopPropagation keeps a click on the link from also toggling the concept
// card open/closed or flipping the flashcard.
const stop = (e: MouseEvent) => e.stopPropagation()

/** Light pill button used inside white concept cards. */
export function DownloadLight({ asset }: { asset: Asset }) {
  return (
    <a
      className="dl-light"
      href={templateUrl(asset.file)}
      download={asset.file}
      onClick={stop}
    >
      ↓ {asset.label}
    </a>
  )
}

/** Cyan-on-navy button used on the dark flashcard back. */
export function DownloadDark({ asset }: { asset: Asset }) {
  return (
    <a
      className="dl-dark"
      href={templateUrl(asset.file)}
      download={asset.file}
      onClick={stop}
    >
      ↓ {asset.label}
    </a>
  )
}
