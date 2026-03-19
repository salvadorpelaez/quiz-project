'use client';

import { useState } from 'react';
import QuizQuestion from './components/QuizQuestion';
import QuizResult from './components/QuizResult';
import ProgressBar from './components/ProgressBar';

const personalities = {
  'Bold Adventurer': {
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: '"You live for intensity"',
    description: 'You move fast, feel everything deeply, and never do anything halfway. Your coffee is as bold as you are — no sugar, no apologies.',
  },
  'Zen Minimalist': {
    name: 'Zen Minimalist',
    coffee: 'Black Coffee, Single Origin',
    tagline: '"Simple. Clean. Perfect."',
    description: 'You find beauty in simplicity and clarity in stillness. A single-origin black coffee — nothing added, nothing wasted — is your kind of perfection.',
  },
  'Practical Pragmatist': {
    name: 'Practical Pragmatist',
    coffee: "Large Drip, Whatever's Fresh",
    tagline: '"Just make it work"',
    description: "You get things done. No fuss, no drama — just good coffee that does the job. Life's too short for overthinking your morning cup.",
  },
  'Cozy Classic': {
    name: 'Cozy Classic',
    coffee: 'Medium Roast Drip',
    tagline: '"Comfort in every cup"',
    description: 'You know what you love and you love what you know. A warm, familiar medium roast is your anchor — reliable, comforting, and always exactly right.',
  },
};

const questions = [
  {
    question: "You're handed a blank canvas and unlimited paint. What do you do?",
    answers: [
      { text: "Paint something explosive and chaotic — who cares if it's messy", personality: 'Bold Adventurer' },
      { text: 'Stare at it for 10 minutes, then paint one perfect brushstroke', personality: 'Zen Minimalist' },
      { text: 'Make something practical — maybe a sign for your house', personality: 'Practical Pragmatist' },
      { text: 'Paint something soft and nostalgic', personality: 'Cozy Classic' },
    ],
  },
  {
    question: 'You find $100 on the ground. First instinct?',
    answers: [
      { text: 'Book a last-minute flight somewhere', personality: 'Bold Adventurer' },
      { text: 'Put it in savings. Already have what I need.', personality: 'Zen Minimalist' },
      { text: 'Pay off something practical', personality: 'Practical Pragmatist' },
      { text: 'Order food and have a cozy night in', personality: 'Cozy Classic' },
    ],
  },
  {
    question: 'What color is your soul today?',
    answers: [
      { text: 'Red — intense, electric, always moving', personality: 'Bold Adventurer' },
      { text: 'White — clean, clear, infinite', personality: 'Zen Minimalist' },
      { text: 'Gray — reliable, steady, gets things done', personality: 'Practical Pragmatist' },
      { text: 'Warm amber — soft, glowing, comfortable', personality: 'Cozy Classic' },
    ],
  },
  {
    question: 'A spaceship lands in your backyard. The aliens invite you aboard. You:',
    answers: [
      { text: 'Jump in immediately — no questions', personality: 'Bold Adventurer' },
      { text: 'Politely decline. Your garden is fine.', personality: 'Zen Minimalist' },
      { text: 'Ask for the safety rating and departure schedule', personality: 'Practical Pragmatist' },
      { text: 'Invite them in for coffee first', personality: 'Cozy Classic' },
    ],
  },
  {
    question: 'Your ideal Sunday morning looks like:',
    answers: [
      { text: "You're already mid-hike, no plan, loving it", personality: 'Bold Adventurer' },
      { text: 'Silence. Tea. Nothing scheduled.', personality: 'Zen Minimalist' },
      { text: 'Grocery run, laundry done by 10am', personality: 'Practical Pragmatist' },
      { text: 'Blanket, book, something warm in your hands', personality: 'Cozy Classic' },
    ],
  },
  {
    question: 'If your brain were a room, it would be:',
    answers: [
      { text: 'A control room with 47 screens all active', personality: 'Bold Adventurer' },
      { text: 'An empty room with one window and great light', personality: 'Zen Minimalist' },
      { text: 'A well-organized office with labeled folders', personality: 'Practical Pragmatist' },
      { text: 'A cozy living room with too many books', personality: 'Cozy Classic' },
    ],
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (personality: string) => {
    setCurrentSelection(personality);
  };

  const handleNext = () => {
    if (!currentSelection) return;

    const newAnswers = [...selectedAnswers, currentSelection];
    setSelectedAnswers(newAnswers);
    setCurrentSelection(null);

    if (currentQuestion + 1 >= questions.length) {
      const counts: Record<string, number> = {};
      newAnswers.forEach((p) => {
        counts[p] = (counts[p] || 0) + 1;
      });
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setCurrentSelection(null);
    setResult(null);
    setStarted(false);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(160deg, #f5e6d3, #edd9c0)',
      }}
    >
      <div
        style={{
          background: '#fffaf5',
          borderRadius: '20px',
          padding: '3rem',
          maxWidth: '560px',
          width: '100%',
          boxShadow: '0 8px 40px rgba(139, 90, 43, 0.12)',
        }}
      >
        {!started ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>☕</div>
            <h1
              style={{
                fontFamily: 'var(--font-lora), Lora, serif',
                fontSize: '2rem',
                fontWeight: 600,
                color: '#3d2b1f',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              What&apos;s Your Coffee Personality?
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '1rem',
                color: '#7a5540',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
              }}
            >
              Answer 6 quick questions and find out which coffee matches your soul.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.8rem',
                color: '#7a5540',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
              }}
            >
              Built with Claude Code — AI-assisted development.
            </p>
            <button
              onClick={() => setStarted(true)}
              style={{
                background: '#c07840',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.9rem 2.5rem',
                fontSize: '1rem',
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Start the Quiz
            </button>
          </div>
        ) : result ? (
          <QuizResult
            personality={personalities[result as keyof typeof personalities]}
            onRestart={handleRestart}
          />
        ) : (
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#b07d4e',
                marginBottom: '1.5rem',
              }}
            >
              Coffee Personality Quiz
            </p>

            <QuizQuestion
              question={questions[currentQuestion].question}
              answers={questions[currentQuestion].answers}
              onAnswer={handleAnswer}
              selected={currentSelection}
            />

            <ProgressBar current={currentQuestion + 1} total={questions.length} />

            <button
              onClick={handleNext}
              disabled={!currentSelection}
              style={{
                marginTop: '1.5rem',
                width: '100%',
                background: currentSelection ? '#c07840' : '#e8d5be',
                color: currentSelection ? 'white' : '#b07d4e',
                border: 'none',
                borderRadius: '12px',
                padding: '0.9rem',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontWeight: 500,
                cursor: currentSelection ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
              }}
            >
              {currentQuestion + 1 === questions.length ? 'See My Result →' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
