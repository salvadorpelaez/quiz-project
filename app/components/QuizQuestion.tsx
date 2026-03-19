'use client';

interface Answer {
  text: string;
  personality: string;
}

interface QuizQuestionProps {
  question: string;
  answers: Answer[];
  onAnswer: (personality: string) => void;
  selected: string | null;
}

export default function QuizQuestion({ question, answers, onAnswer, selected }: QuizQuestionProps) {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-lora), Lora, serif',
          fontSize: '1.55rem',
          fontWeight: 600,
          color: '#3d2b1f',
          lineHeight: 1.4,
          marginBottom: '1.75rem',
        }}
      >
        {question}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.personality)}
            style={{
              background: selected === answer.personality ? '#feebd6' : '#fdf3e7',
              border: `2px solid ${selected === answer.personality ? '#c07840' : '#e8d5be'}`,
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              color: '#5c3d2a',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              transition: 'all 0.2s ease',
              fontWeight: selected === answer.personality ? 500 : 400,
            }}
            onMouseEnter={(e) => {
              if (selected !== answer.personality) {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c07840';
                (e.currentTarget as HTMLButtonElement).style.background = '#feebd6';
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== answer.personality) {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#e8d5be';
                (e.currentTarget as HTMLButtonElement).style.background = '#fdf3e7';
              }
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
