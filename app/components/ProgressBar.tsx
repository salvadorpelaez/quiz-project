'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between mb-2">
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', color: '#b07d4e' }}>
          Question {current} of {total}
        </span>
      </div>
      <div style={{ width: '100%', height: '6px', background: '#e8d5be', borderRadius: '4px' }}>
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #c07840, #e8a065)',
            borderRadius: '4px',
            transition: 'width 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}
