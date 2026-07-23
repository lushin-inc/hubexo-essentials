import type { Flashcard } from '../types'

// Memorization deck only. Front = a question that does NOT contain the answer;
// back = the list / phrase to recall. Kept deliberately short — just the
// frameworks and lists worth committing to memory.
export const flashcards: Flashcard[] = [
  {
    s: 1,
    category: 'Foundation',
    concept: 'The Success Triangle',
    prompt: 'What are the three sides of the Success Triangle?',
    back: 'Behavior, Attitude, and Technique — and Behavior is the one you control.',
  },
  {
    s: 1,
    category: 'Behavior',
    concept: 'The Three Things',
    prompt: 'All of sales comes down to which three things?',
    back: 'Quality of prospect, quality of message, and the numbers game.',
  },
  {
    s: 1,
    category: 'Mindset',
    concept: 'The Belief Wheel',
    prompt: 'What are the four stages of the Belief Wheel, in order?',
    back: 'Belief → Evidence → Action → Result, then back to Belief.',
  },
  {
    s: 2,
    category: 'Process',
    concept: "The Buyer's Process",
    prompt: "What are the buyer's four moves?",
    back: 'Lie, Steal, Stall, Ghost.',
  },
  {
    s: 2,
    category: 'Process',
    concept: "The Seller's Process",
    prompt: "What are the seller's four steps?",
    back: 'Prospect, Discover, Demo, Close.',
  },
  {
    s: 2,
    category: 'Qualifying',
    concept: 'The Money Zone',
    prompt: 'What are the three areas where deals are won?',
    back: 'Pain, Budget, Decision.',
  },
  {
    s: 2,
    category: 'Qualifying',
    concept: 'The Decision Question',
    prompt: 'What question uncovers how a prospect will decide?',
    back: '"How do you go about making decisions on something like this?"',
  },
  {
    s: 2,
    category: 'Mindset',
    concept: 'The Six Hidden Weaknesses',
    prompt: 'What are the six hidden weaknesses?',
    back: 'Need for approval, emotional involvement, unsupportive beliefs, buy cycle, money tolerance, handling rejection.',
  },
  {
    s: 3,
    category: 'Tool',
    concept: 'DISC Styles',
    prompt: 'What do the four DISC letters stand for?',
    back: 'D – Dominant, I – Influencer, S – Steady, C – Conscientious.',
  },
  {
    s: 3,
    category: 'Tool',
    concept: 'DISC Fears',
    prompt: "What is each DISC style's core fear?",
    back: 'D: losing control. I: rejection. S: letting people down. C: being wrong.',
  },
  {
    s: 3,
    category: 'Behavior',
    concept: 'Verbal · Vocal · Non-Verbal',
    prompt: 'What three channels do you read someone by?',
    back: 'Verbal (words), vocal (tone and pace), and non-verbal (visual cues).',
  },
  {
    s: 3,
    category: 'Qualifying',
    concept: 'The 80 / 20 Rule',
    prompt: 'How much do people remember of what they say vs. what you say?',
    back: '80% of what they say; 20% of what you say.',
  },
  {
    s: 4,
    category: 'Tool',
    concept: 'The Up-Front Contract',
    prompt: 'What are the three parts of an up-front contract?',
    back: 'Time, Agenda, Outcome.',
  },
]
