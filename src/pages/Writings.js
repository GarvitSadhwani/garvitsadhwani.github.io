import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { writings } from '../data/writings';

function Writings() {
  return (
    <main className="writings">
      <Link to="/" className="back-link"><FiArrowLeft /> Back home</Link>

      <header className="writings-header">
        <h1 className="writings-title">Writings</h1>
        <p className="writings-intro">
          Deep dives on backend and system-design problems I've worked through
        </p>
      </header>

      <ul className="writings-list">
        {writings.map((w) => (
          <li key={w.slug}>
            <Link to={`/writings/${w.slug}`} className="writing-card">
              {w.cover && (
                <div className="writing-card-media">
                  <img
                    src={w.cover}
                    alt=""
                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="writing-card-body">
                {w.date && <span className="writing-card-date">{w.date}</span>}
                <h2 className="writing-card-title">{w.title}</h2>
                <p className="writing-card-desc">{w.description}</p>
                <span className="writing-card-cta">Read →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Writings;
