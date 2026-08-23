import React from 'react';

// A single role rendered as a concise glass card.
function Experience({ role }) {
  return (
    <article className="glass exp-card">
      <div className="exp-head">
        <div>
          <h3 className="exp-role">{role.role}</h3>
          <div className="exp-org">{role.org}</div>
        </div>
        <span className="exp-dates">{role.dates}</span>
      </div>

      <p className="exp-desc">{role.desc}</p>

      {role.tags && role.tags.length > 0 && (
        <div className="exp-tags">
          {role.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}

export default Experience;
