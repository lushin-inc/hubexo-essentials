import type { Session } from '../types'

/**
 * All session content, modelled as data so a new training is a copy-paste
 * away. To add Session 4: append a new object here (id 's4', number '04',
 * accent false), add 's4' to the View union in types.ts, and render it in
 * App.tsx the same way s1/s2/s3 are.
 *
 * Each concept has:
 *   title   — the rep-facing headline (the situation/outcome they care about)
 *   concept — the underlying Sandler name (shown small + muted)
 *   points  — a few short, plain bullets (trainer's voice where it helps)
 *   diagram / asset / fullWidth — optional
 */
export const sessions: Session[] = [
  {
    id: 's1',
    number: '01',
    date: 'June 18',
    label: 'Session One',
    title: 'The Success Triangle',
    accent: true,
    topics: ['Behavior · Attitude · Technique', 'The Cookbook', 'Belief Wheel'],
    extraTopics: 4,
    concepts: [
      {
        id: 's1-success-triangle',
        category: 'Foundation',
        title: "When You're Stuck in a Slump",
        concept: 'The Success Triangle',
        diagram: 'successTriangle',
        points: [
          'Everything you do is one of three things: Behavior, Attitude, or Technique.',
          'Behavior is the only one you fully control.',
          'How you act drives how you feel — not the other way around.',
          "You can't affirm your way out of a slump. You can act your way out.",
        ],
      },
      {
        id: 's1-goal-plan-action',
        category: 'Behavior',
        title: 'How to Hit Your Number Every Month',
        concept: 'Goal → Plan → Action',
        diagram: 'goalPlanAction',
        points: [
          'Set the goal, build the plan, then work the daily activity.',
          'Focus on the activity you control, not the outcome.',
          'Results manage the past. Activity manages the future.',
          'Do the behavior and the numbers tell the story.',
        ],
      },
      {
        id: 's1-three-things',
        category: 'Behavior',
        title: "Why Being Busy Isn't Closing Deals",
        concept: 'The Three Things',
        diagram: 'threeThings',
        points: [
          'All of sales comes down to three things.',
          'Quality of prospect — the right companies and titles.',
          'Quality of message — something relevant to their pain.',
          'Numbers game — do it enough times.',
          'Get all three right and the result follows.',
        ],
      },
      {
        id: 's1-cookbook',
        category: 'Tool',
        title: 'Knowing Exactly What to Do Each Week',
        concept: 'The Cookbook',
        points: [
          'A weekly recipe of prospecting activities and target counts.',
          'Pick your activities — calls, LinkedIn, emails — and your weekly numbers.',
          'Miss a day? Make it up.',
          'Follow the recipe and you get the result.',
        ],
        asset: { file: 'Cookbook.xlsx', label: 'Cookbook template (.xlsx)' },
      },
      {
        id: 's1-cash-machine',
        category: 'Tool',
        title: 'How Many Calls It Takes to Hit Your Goal',
        concept: 'The Cash Machine',
        points: [
          'Work backward from the money you want to daily activity.',
          'Enter your income goal, commission, average deal, and conversion ratios.',
          'It tells you the activity per day it takes.',
          'And shows where to improve: conversion, deal size, or commission.',
        ],
        asset: { file: 'Cash Machine.xlsx', label: 'Cash Machine template (.xlsx)' },
      },
      {
        id: 's1-identity-vs-role',
        category: 'Attitude',
        title: 'When a Bad Day Gets in Your Head',
        concept: 'Identity vs. Role',
        points: [
          'Who you are (identity) is not what you do (role).',
          'Your identity is always a 10. Your roles are what you work on.',
          'A bad call dents a role, not you.',
          "You can't outperform your own self-image — so protect it.",
        ],
      },
      {
        id: 's1-belief-wheel',
        category: 'Mindset',
        title: 'When You Catch Yourself Pitching Instead of Asking',
        concept: 'The Belief Wheel',
        diagram: 'beliefWheel',
        fullWidth: true,
        points: [
          'What you believe shapes what you notice, what you do, and what you get.',
          'The result loops back and reinforces the belief.',
          'Change the belief to change the result.',
          'Swap "my job is to educate" for "my job is to diagnose" — and you\'ll ask instead of pitch.',
        ],
      },
    ],
  },
  {
    id: 's2',
    number: '02',
    date: 'June 25',
    label: 'Session Two',
    title: 'The Buyer / Seller Dance',
    accent: false,
    topics: [
      "Buyer's vs. Seller's Process",
      'Pain · Budget · Decision',
      'Six Hidden Weaknesses',
    ],
    concepts: [
      {
        id: 's2-buyer-seller-process',
        category: 'Process',
        title: 'When a Deal Stalls and Goes Quiet',
        concept: "Buyer's vs. Seller's Process",
        diagram: 'buyerSeller',
        fullWidth: true,
        points: [
          "Two processes run at once — and the buyer's usually wins.",
          'Seller does: Prospect → Discover → Demo → Close.',
          'Buyer does: Lie → Steal → Stall → Ghost.',
          'They stay in control — asking for info, ideas, and proposals, then going dark.',
          "Know the pattern so you don't walk into it.",
        ],
      },
      {
        id: 's2-system-not-process',
        category: 'Process',
        title: 'When You Feel Boxed In by a Script',
        concept: 'A System, Not a Process',
        points: [
          'Sandler is a system, not a script.',
          'Hit milestones — engage, qualify, close — instead of reciting steps.',
          "You still do specific things at each stage; you're just not locked to a sequence.",
        ],
      },
      {
        id: 's2-money-zone',
        category: 'Qualifying',
        title: 'Where Deals Are Actually Won',
        concept: 'The Money Zone',
        diagram: 'moneyZone',
        points: [
          'Pain, Budget, Decision — this is where the money is.',
          'Most reps skip straight to the demo. Don\'t.',
          'Find the cost of doing nothing.',
          'Qualify the money before you present.',
          "Learn how they'll actually decide.",
        ],
      },
      {
        id: 's2-pain',
        category: 'Qualifying',
        title: "When They Say You're Too Expensive",
        concept: 'Pain',
        points: [
          'No pain established? Price always sounds too high.',
          'Find the real cost of doing nothing — or of choosing wrong.',
          'Are they choosing between something and nothing, or between you and a competitor?',
          'Pain changes how the brain weighs money.',
        ],
      },
      {
        id: 's2-decision',
        category: 'Qualifying',
        title: "When You're Not Sure Who Really Decides",
        concept: 'Decision',
        points: [
          'Don\'t ask "Are you the decision maker?"',
          'Ask "How do you go about making decisions on something like this?"',
          'That one question reveals the people and the steps at once.',
          'Better questions get better answers.',
        ],
      },
      {
        id: 's2-six-hidden-weaknesses',
        category: 'Mindset',
        title: 'The Habits Quietly Costing You Deals',
        concept: 'The Six Hidden Weaknesses',
        diagram: 'sixWeaknesses',
        fullWidth: true,
        points: [
          'Six traits help or hurt every call without you noticing (see the grid).',
          'Get your emotional needs met outside the sale.',
          "Show up like you're already at three times quota.",
          'Move on fast from rejection.',
        ],
      },
    ],
  },
  {
    id: 's3',
    number: '03',
    date: 'July 9',
    label: 'Session Three',
    title: 'Essential Communication Skills',
    accent: false,
    topics: ['DISC in 60 Seconds', 'Mirror & Adapt', 'The Seesaw'],
    extraTopics: 4,
    concepts: [
      {
        id: 's3-read-then-adapt',
        category: 'Foundation',
        title: "When You Can't Get a Read on Someone",
        concept: 'Read the Person, Then Adapt',
        points: [
          'Everyone communicates a little differently.',
          'Read how they talk and what they care about, then meet them there.',
          'Your job is to adapt to them — not the other way around.',
          'One move: mirror the person in front of you.',
        ],
      },
      {
        id: 's3-first-five-minutes',
        category: 'Behavior',
        title: 'When Your Small Talk Falls Flat',
        concept: 'The First Five Minutes',
        points: [
          'Breaking the ice disarms people and drops their guard.',
          'But your competition asks about the weekend too.',
          'What sets you apart is listening to the answer and adjusting — not the small talk itself.',
        ],
      },
      {
        id: 's3-seesaw',
        category: 'Mindset',
        title: 'When a Prospect Shows Up Hot or Annoyed',
        concept: 'The Seesaw',
        points: [
          'When they run hot, you stay calm. When they\'re unsure, you lead.',
          'Balance their energy instead of matching it.',
          'Mirror what matters to them.',
          'That balance is what builds trust.',
        ],
      },
      {
        id: 's3-verbal-vocal-nonverbal',
        category: 'Behavior',
        title: 'How to Size Someone Up Fast',
        concept: 'Verbal, Vocal & Non-Verbal',
        points: [
          'You can read someone before they answer a question.',
          'Listen to their tone, speed, and energy.',
          'Watch the visual cues — background, eye contact, handshake.',
          'Match their pace: fast with fast, slow with slow.',
        ],
      },
      {
        id: 's3-disc',
        category: 'Tool',
        title: 'How to Read Anyone in Under a Minute',
        concept: 'DISC',
        diagram: 'discQuadrant',
        fullWidth: true,
        points: [
          'DISC is a tool to read how someone communicates — not a personality quiz.',
          'Read two things: how fast they move, and task vs. people.',
          'D and C are task-first. I and S are people-first.',
          'Match their style and speak to their fear, and the conversation gets easier.',
        ],
      },
      {
        id: 's3-let-them-sell-themselves',
        category: 'Qualifying',
        title: 'How to Get Them to Convince Themselves',
        concept: 'Let Them Sell Themselves',
        points: [
          'People keep 80% of what they say and 20% of what you say.',
          'Ask "How will you use this to get ROI?" and let them answer.',
          'The more they talk it through, the more it sticks.',
          "You're a guide helping them reach their own answer — not a pitch.",
        ],
      },
      {
        id: 's3-guts-and-humor',
        category: 'Attitude',
        title: "When You're Nervous to Say Something Bold",
        concept: 'Guts & Humor',
        points: [
          'A little guts or humor breaks the pattern.',
          'It makes you sound different from every other salesperson.',
          "It's hit or miss — it won't land with everyone.",
          'When it lands, it disarms them and gets you remembered.',
        ],
      },
    ],
  },
]
