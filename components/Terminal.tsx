'use client';

import { ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Terminal({ title = 'terminal', children, className = '' }: TerminalProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#ffbd2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-sm text-[var(--moon-gray)] font-mono">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  command?: string;
  output?: string | ReactNode;
  className?: string;
}

export function TerminalLine({ prompt = '$', command, output, className = '' }: TerminalLineProps) {
  return (
    <div className={`mb-2 ${className}`}>
      {command && (
        <div className="flex items-center gap-2">
          <span className="text-[var(--matrix-green)]">{prompt}</span>
          <span className="text-[var(--star-white)]">{command}</span>
        </div>
      )}
      {output && (
        <div className="text-[var(--moon-gray)] mt-1 pl-4">
          {typeof output === 'string' ? (
            <span className="text-[var(--starlight-cyan)]">&gt; {output}</span>
          ) : (
            output
          )}
        </div>
      )}
    </div>
  );
}
