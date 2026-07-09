import type { Flashcard } from '../types'

// Verbatim from the prototype `cards` array. 13 cards.
// Cookbook & Cash Machine carry a downloadable .xlsx asset.
export const flashcards: Flashcard[] = [
  {
    s: 1,
    category: 'Foundation',
    concept: 'The Success Triangle',
    prompt: 'What are the three legs — and which one do you actually control?',
    back: 'Behavior, Attitude, Technique. Behavior is the one leg you fully control, and it drives the other two.',
  },
  {
    s: 1,
    category: 'Behavior',
    concept: 'Activity vs. Outcome',
    prompt: 'Where should your focus go: the result, or the activity?',
    back: 'Focus on the activity. Results manage the past; activity manages the future.',
  },
  {
    s: 1,
    category: 'Behavior',
    concept: 'The Three Things',
    prompt: 'All of sales comes down to which three things?',
    back: 'Quality of prospect, quality of message, and the numbers game. Get all three right and the result follows.',
  },
  {
    s: 1,
    category: 'Tool',
    concept: 'The Cookbook',
    prompt: 'What does the Cookbook actually track?',
    back: 'A weekly recipe of prospecting activities and target counts. Follow the recipe and you get the result.',
    asset: { file: 'Cookbook.xlsx', label: 'Cookbook template (.xlsx)' },
  },
  {
    s: 1,
    category: 'Tool',
    concept: 'The Cash Machine',
    prompt: 'What does the Cash Machine calculate for you?',
    back: 'It works backward from your income goal to the daily activity it takes — and shows where to improve: conversion, deal size, or commission.',
    asset: { file: 'Cash Machine.xlsx', label: 'Cash Machine template (.xlsx)' },
  },
  {
    s: 1,
    category: 'Attitude',
    concept: 'Identity vs. Role',
    prompt: 'A bad sales day — does it dent your identity or your role?',
    back: 'Your role. Identity is always a 10. You cannot outperform your own self-image.',
  },
  {
    s: 1,
    category: 'Mindset',
    concept: 'The Belief Wheel',
    prompt: 'What has to change first to change your results?',
    back: 'Your belief. Belief shapes the evidence you notice, the action you take, and the result — which loops back to reinforce the belief.',
  },
  {
    s: 2,
    category: 'Process',
    concept: "Buyer's vs. Seller's Process",
    prompt: 'When both processes run at once, whose wins?',
    back: "The buyer's — lie, steal, stall, ghost. Recognize the pattern so you don't walk into it.",
  },
  {
    s: 2,
    category: 'Process',
    concept: 'A System, Not a Process',
    prompt: 'Is Sandler a script to recite or something else?',
    back: 'A system — milestones to reach, not rigid steps to recite.',
  },
  {
    s: 2,
    category: 'Qualifying',
    concept: 'Pain',
    prompt: 'Why establish pain before you ever talk price?',
    back: 'Pain changes how the brain weighs money. With no pain established, price becomes "too expensive."',
  },
  {
    s: 2,
    category: 'Qualifying',
    concept: 'Budget',
    prompt: 'When should the money conversation happen?',
    back: 'Before the demo, not after. A price flinch early beats a surprise at the end.',
  },
  {
    s: 2,
    category: 'Qualifying',
    concept: 'Decision',
    prompt: 'What question beats "Are you the decision maker?"',
    back: '"How do you go about making decisions on something like this?" — it reveals the people and the steps at once.',
  },
  {
    s: 2,
    category: 'Mindset',
    concept: 'Six Hidden Weaknesses',
    prompt: 'Name the traits that quietly help or hurt every call.',
    back: 'Need for approval, emotional involvement, unsupportive beliefs, buy cycle, money tolerance, handling rejection.',
  },
]
