import React from 'react';

export function AlicorpLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alicorp Labs Logo"
    >
      <style>
        {`.alicorp-red { fill: #d92323; } .alicorp-green { fill: #52a632; }`}
      </style>
      <text
        x="0"
        y="40"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="40"
        fontWeight="bold"
        className="alicorp-red"
      >
        àlicorp
      </text>
      <text
        x="95"
        y="55"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="bold"
        className="alicorp-green"
      >
        Labs
      </text>
      <path
        d="M23.1,3.4c-0.8-0.8-1.8-1.2-2.9-1.2c-1.1,0-2.1,0.4-2.9,1.2c-1.6,1.6-1.6,4.2,0,5.8c2.1,2.1,5,3,7.8,2.7 c0.5-1.1,0.8-2.2,0.8-3.4C25.9,6.5,24.9,4.8,23.1,3.4z"
        className="alicorp-green"
      />
    </svg>
  );
}
