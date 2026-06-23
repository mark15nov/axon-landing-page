import React from "react";

/**
 * Reusable browser chrome. Drop a coded mock (or later a real PNG) inside.
 * `dark` swaps the chrome + shadow for dark-on-dark sections.
 */
export default function BrowserFrame({
  url = "app.axon.mx",
  children,
  dark = false,
  className = "",
  bodyClassName = "",
}: {
  url?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark
          ? "border-line-dark bg-ink-2 frame-shadow-dark"
          : "border-line bg-white frame-shadow"
      } ${className}`}
    >
      {/* chrome bar */}
      <div
        className={`flex items-center gap-3 border-b px-4 py-3 ${
          dark ? "border-line-dark bg-[#16161b]" : "border-line bg-[#f3f2ee]"
        }`}
      >
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div
          className={`mx-auto flex max-w-[60%] items-center gap-2 rounded-md px-3 py-1 text-[12px] ${
            dark
              ? "bg-[#0e0e12] text-muted-dark"
              : "bg-white text-muted"
          }`}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-60"
          >
            <path
              d="M6 10V8a6 6 0 1112 0v2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="4"
              y="10"
              width="16"
              height="10"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="truncate tracking-tight">{url}</span>
        </div>
        <div className="w-12" />
      </div>
      {/* body */}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
