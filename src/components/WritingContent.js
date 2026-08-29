import React, { useState, useEffect, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

// Renders a writing's typed content blocks, with a click-to-expand lightbox
// for gallery images.
function WritingContent({ blocks }) {
  const [lightbox, setLightbox] = useState(null);
  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close]);

  return (
    <div className="writing-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'heading':
            return <h2 key={i} className="writing-h2">{b.text}</h2>;
          case 'paragraph':
            return <p key={i} className="writing-p">{b.text}</p>;
          case 'list':
            return (
              <ul key={i} className="writing-list">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          case 'code':
            return (
              <pre key={i} className="writing-code">
                <code>{b.code}</code>
              </pre>
            );
          case 'gallery':
            return (
              <div key={i} className="writing-gallery">
                {b.items.map((src, j) => (
                  <button
                    key={j}
                    type="button"
                    className="writing-gallery-item"
                    onClick={() => setLightbox(src)}
                    aria-label="Expand image"
                  >
                    <img
                      className="writing-gallery-img"
                      src={src}
                      alt={b.caption || ''}
                      onError={(e) => { e.currentTarget.closest('.writing-gallery-item').style.display = 'none'; }}
                    />
                  </button>
                ))}
              </div>
            );
          case 'image':
            return (
              <figure key={i} className="writing-figure">
                <img
                  className="writing-img"
                  src={b.src}
                  alt={b.caption || ''}
                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          default:
            return null;
        }
      })}

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">
            <FiX size="1.6rem" />
          </button>
          <img
            className="lightbox-img"
            src={lightbox}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default WritingContent;
