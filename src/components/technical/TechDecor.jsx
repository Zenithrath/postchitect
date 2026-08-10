/**
 * Decorative technical-drawing details: faint grids, crosshairs and
 * dimension lines. Purely visual — aria-hidden and pointer-events-none.
 */

export function GridPattern({ id = "grid", className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern
          id={`${id}-major`}
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M120 0H0V120"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </pattern>
        <pattern
          id={`${id}-minor`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0V24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-major)`} />
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-minor)`}
        opacity="0.45"
      />
    </svg>
  );
}

export function Crosshair({ className = "", label }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div className="relative h-4 w-4">
        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-current/40" />
        <span className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-current/40" />
        <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brown" />
      </div>
      {label && (
        <span className="ml-3 text-[9px] uppercase tracking-[0.24em] text-current/60">
          {label}
        </span>
      )}
    </div>
  );
}

export function DimLine({ className = "", label = "12.00 m" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <div className="flex items-center gap-2 text-current/70">
        <span className="h-2 w-px bg-current/70" />
        <span className="h-px w-10 bg-current/50" />
        <span className="text-[9px] uppercase tracking-[0.22em]">{label}</span>
        <span className="h-px w-10 bg-current/50" />
        <span className="h-2 w-px bg-current/70" />
      </div>
    </div>
  );
}
