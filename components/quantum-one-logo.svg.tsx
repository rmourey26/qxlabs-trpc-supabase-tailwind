export function QuantumOneSVGLogo() {
  return (
    <svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      className="quantum-one-svg-logo"
    >
      <defs>
        {/* Hexagon gradient */}
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c7ed6" />
          <stop offset="50%" stopColor="#4dabf7" />
          <stop offset="100%" stopColor="#74c0fc" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* White glow for quantum core */}
        <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Animations */}
        <animateTransform
          id="spinSlow"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 100 80"
          to="360 100 80"
          dur="8s"
          repeatCount="indefinite"
        />

        <animateTransform
          id="spinSlowReverse"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 100 80"
          to="0 100 80"
          dur="6s"
          repeatCount="indefinite"
        />

        <animate id="pulse" attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />

        <animate id="ping" attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
      </defs>

      {/* Hexagon shape */}
      <polygon
        points="100,20 170,50 170,110 100,140 30,110 30,50"
        fill="url(#hexGradient)"
        stroke="#ffffff"
        strokeWidth="2"
        filter="url(#glow)"
        style={{
          dropShadow: "0 0 8px rgba(77,171,247,0.8)",
        }}
      />

      {/* Quantum core container */}
      <g transform="translate(100, 80)">
        {/* Inner quantum core - rotated square */}
        <rect x="-8" y="-8" width="16" height="16" fill="#ffffff" transform="rotate(45)" filter="url(#whiteGlow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </rect>

        {/* First orbital ring */}
        <ellipse cx="0" cy="0" rx="35" ry="20" fill="none" stroke="#74c0fc" strokeWidth="1.5" opacity="0.8">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="8s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Second orbital ring */}
        <ellipse cx="0" cy="0" rx="20" ry="35" fill="none" stroke="#4dabf7" strokeWidth="1.5" opacity="0.8">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 0 0"
            to="0 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Quantum particle */}
        <circle cx="0" cy="0" r="2" fill="#ffffff" filter="url(#whiteGlow)">
          <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Text: QUANTUM */}
      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="18"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        QUANTUM
      </text>

      {/* Text: ONE */}
      <text
        x="100"
        y="200"
        textAnchor="middle"
        fill="#4dabf7"
        fontSize="18"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        ONE
      </text>
    </svg>
  )
}
