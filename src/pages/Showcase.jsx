import React, { useState } from 'react';

export default function Showcase({ title, preview, code, cc }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="content-box">
      <div className="card-top">
        <h2>{title}</h2>
        <button className='secondary-button' onClick={() => setShowCode(prev => !prev)}>
          {showCode ? 'Preview' : 'Show Code'}
        </button>
      </div>

      {/* Code Section (Always Rendered, Toggled with CSS) */}
      <div className={`code-wrapper ${showCode ? 'show' : ''}`}>
        <pre className="code-block">
          <ol className="code-list">
            {code
              .trim()
              .split('\n')
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ol>
        </pre>
      </div>

      {/* Preview Section (Always Rendered, Toggled with CSS) */}
      <div className={`preview-wrapper ${showCode ? '' : 'show'}`}>
        <div className={cc}>{preview}</div>
      </div>
    </div>
  );
}
