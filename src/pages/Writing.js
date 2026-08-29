import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { getWriting } from '../data/writings';
import WritingContent from '../components/WritingContent';

function Writing() {
  const { slug } = useParams();
  const writing = getWriting(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!writing) {
    return (
      <main className="writing">
        <Link to="/writings" className="back-link"><FiArrowLeft /> All writings</Link>
        <h1 className="writing-title">Not found</h1>
        <p className="writing-p">That writing doesn't exist (yet).</p>
      </main>
    );
  }

  return (
    <main className="writing">
      <Link to="/writings" className="back-link"><FiArrowLeft /> All writings</Link>

      <article>
        <header className="writing-header">
          {writing.date && <span className="writing-date">{writing.date}</span>}
          <h1 className="writing-title">{writing.title}</h1>
          <p className="writing-lede">{writing.description}</p>
        </header>

        {writing.cover && (
          <img
            className="writing-cover"
            src={writing.cover}
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}

        <WritingContent blocks={writing.blocks} />
      </article>
    </main>
  );
}

export default Writing;
