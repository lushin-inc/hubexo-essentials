import type { Category } from '../types'

/**
 * Category pill palette (text colour on tint background), straight from the
 * design tokens. Used for concept-card pills and flashcard pills alike.
 */
export const categoryColors: Record<Category, { fg: string; bg: string }> = {
  Foundation: { fg: '#21245C', bg: '#e9eaf5' },
  Process: { fg: '#21245C', bg: '#e9eaf5' },
  Behavior: { fg: '#0077a3', bg: '#e5f7fe' },
  Tool: { fg: '#c1420f', bg: '#fdece3' },
  Attitude: { fg: '#a9720a', bg: '#fff2dc' },
  Mindset: { fg: '#b32636', bg: '#fce8ea' },
  Qualifying: { fg: '#0045C2', bg: '#e5ecfb' },
}
