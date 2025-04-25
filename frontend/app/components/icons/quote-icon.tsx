export function QuoteIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17H3V16C3 14 5 12 7 12V14C5.9 14 5 14.9 5 16V17Z"
          fill="currentColor"
        />
        <path
          d="M21 17H17V16C17 14 19 12 21 12V14C19.9 14 19 14.9 19 16V17Z"
          fill="currentColor"
        />
      </svg>
    );
  }