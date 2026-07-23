// Downloadable resources shown on the Files page. Drop a new file into
// public/templates/ and add a line here to list it.
export type FileKind = 'xlsx' | 'pdf'

export interface DownloadFile {
  title: string
  /** Filename inside public/templates/ (may contain spaces). */
  file: string
  kind: FileKind
  desc: string
}

export const files: DownloadFile[] = [
  {
    title: 'The Cookbook',
    file: 'Cookbook.xlsx',
    kind: 'xlsx',
    desc: 'Weekly prospecting activities and target counts.',
  },
  {
    title: 'The Cash Machine',
    file: 'Cash Machine.xlsx',
    kind: 'xlsx',
    desc: 'Work backward from your income goal to daily activity.',
  },
  {
    title: 'Pain By Images',
    file: 'Pain By Images.pdf',
    kind: 'pdf',
    desc: 'The Pain Funnel questions — one per slide.',
  },
]
