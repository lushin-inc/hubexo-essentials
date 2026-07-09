export type View = 'home' | 's1' | 's2' | 'cards' | 'glossary'

export type Category =
  | 'Foundation'
  | 'Behavior'
  | 'Tool'
  | 'Attitude'
  | 'Mindset'
  | 'Process'
  | 'Qualifying'

export type DiagramKind =
  | 'successTriangle'
  | 'goalPlanAction'
  | 'threeThings'
  | 'beliefWheel'
  | 'buyerSeller'
  | 'moneyZone'
  | 'sixWeaknesses'

/** A downloadable asset. `file` is the filename inside public/templates/. */
export interface Asset {
  file: string
  label: string
}

export interface Concept {
  id: string
  category: Category
  title: string
  summary: string
  keyLine: string
  body: string
  diagram?: DiagramKind
  asset?: Asset
  /** Span both columns of the concept grid. */
  fullWidth?: boolean
}

export interface Session {
  /** Also used as the view id, e.g. 's1'. */
  id: 's1' | 's2'
  /** Ghost number shown on cards/banners, e.g. '01'. */
  number: string
  /** e.g. 'June 18'. */
  date: string
  /** e.g. 'Session One'. */
  label: string
  /** e.g. 'The Success Triangle'. */
  title: string
  /** Topic chips shown on the home session card. */
  topics: string[]
  /** Rendered as "+N more" after the chips. Omit or 0 to hide. */
  extraTopics?: number
  /** Session 1 gets the cyan accent treatment. */
  accent: boolean
  /**
   * Optional real image sources. Leave undefined to use the built-in
   * fallback visuals (navy number tile / navy banner panel). Paths are
   * relative to /public (e.g. 'img/s1-banner.jpg') or absolute URLs.
   */
  thumbnailSrc?: string
  bannerSrc?: string
  concepts: Concept[]
}

export interface Flashcard {
  s: 1 | 2
  category: Category
  concept: string
  prompt: string
  back: string
  asset?: Asset
}

export interface GlossaryTerm {
  term: string
  definition: string
}
