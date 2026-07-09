// ┌──────────────────────────────────────────────────────────────────┐
// │  SITE PASSWORD                                                     │
// │                                                                    │
// │  Change this ONE value, then rebuild + redeploy. Nothing else      │
// │  needs to change. The check is case-insensitive and ignores any    │
// │  surrounding whitespace, so "successtriangle" also works.          │
// │                                                                    │
// │  NOTE: this is a light gate for a static site, not real security.  │
// │  The value ships inside the client bundle, so anyone who really    │
// │  wants it can read it in the page source. It keeps casual /        │
// │  uninvited visitors out — good enough for gating training content. │
// └──────────────────────────────────────────────────────────────────┘
export const SITE_PASSWORD = 'SuccessTriangle'
