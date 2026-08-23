import React, { useState } from 'react';

// "Where I've worked" — left tab rail + active role panel.
function ExperienceTabs({ roles }) {
  const [active, setActive] = useState(0);
  const role = roles[active];

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Companies">
        {roles.map((r, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`tab-btn ${i === active ? 'tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {r.tabLabel || r.org}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel">
        <h3 className="tab-role">
          {role.role} <span className="tab-at">@</span>{' '}
          <span className="accent-text">{role.org}</span>
        </h3>
        <div className="tab-dates">{role.dates}</div>
        <ul className="tab-bullets">
          {role.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {role.tags && role.tags.length > 0 && (
          <div className="tab-tags">
            {role.tags.map((t) => (
              <span key={t} className="mono-tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceTabs;
