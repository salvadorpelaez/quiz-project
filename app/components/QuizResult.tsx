'use client';

interface Personality {
  name: string;
  coffee: string;
  tagline: string;
  description: string;
}

interface QuizResultProps {
  personality: Personality;
  onRestart: () => void;
}

export default function QuizResult({ personality, onRestart }: QuizResultProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
        }}
      >
        ☕
      </div>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#b07d4e',
          marginBottom: '0.75rem',
        }}
      >
        You are a
      </p>

      <h1
        style={{
          fontFamily: 'var(--font-lora), Lora, serif',
          fontSize: '2rem',
          fontWeight: 600,
          color: '#3d2b1f',
          marginBottom: '0.5rem',
          lineHeight: 1.2,
        }}
      >
        {personality.name}
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          fontSize: '1rem',
          color: '#b07d4e',
          fontStyle: 'italic',
          marginBottom: '2rem',
        }}
      >
        {personality.tagline}
      </p>

      <div
        style={{
          background: '#fdf3e7',
          border: '2px solid #e8d5be',
          borderRadius: '14px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#b07d4e',
            marginBottom: '0.5rem',
          }}
        >
          Your Coffee
        </p>
        <p
          style={{
            fontFamily: 'var(--font-lora), Lora, serif',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: '#3d2b1f',
            marginBottom: '0.75rem',
          }}
        >
          {personality.coffee}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
            fontSize: '0.9rem',
            color: '#7a5540',
            lineHeight: 1.5,
          }}
        >
          {personality.description}
        </p>
      </div>

      <button
        onClick={onRestart}
        style={{
          background: '#c07840',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          padding: '0.9rem 2rem',
          fontSize: '0.95rem',
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#a0622e';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = '#c07840';
        }}
      >
        Take the quiz again
      </button>
    </div>
  );
}
