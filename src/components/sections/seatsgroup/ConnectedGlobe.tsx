export function ConnectedGlobe({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="sg-connected-globe">
        <div className="sg-connected-globe-sphere">
          <div className="sg-connected-globe-dots" />
          <div className="sg-connected-globe-shade" />
        </div>

        <svg
          className="sg-connected-globe-arcs"
          viewBox="0 0 520 520"
          fill="none"
        >
          <path
            className="sg-orbit-line"
            d="M86 268c78-146 248-188 368-86"
            stroke="#2196f3"
            strokeWidth="1.5"
          />
          <path
            className="sg-orbit-line"
            d="M58 312c118-40 248 18 332 128"
            stroke="#2196f3"
            strokeWidth="1.35"
          />
          <path
            className="sg-orbit-line"
            d="M122 118c96 72 148 196 92 332"
            stroke="#2196f3"
            strokeWidth="1.2"
          />
          <path
            className="sg-orbit-line"
            d="M168 402c92-58 214-84 286-24"
            stroke="#2196f3"
            strokeWidth="1.2"
          />

          <circle className="sg-orbit-node" cx="148" cy="176" r="6" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="246" cy="132" r="5" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="392" cy="198" r="7" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="318" cy="278" r="5.5" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="214" cy="318" r="6.5" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="368" cy="348" r="5" fill="#2196f3" />
          <circle className="sg-orbit-node" cx="286" cy="402" r="4.5" fill="#2196f3" />
        </svg>
      </div>
    </div>
  );
}
