import React from 'react';

function Notfound() {
  return (
    <main className="notfound">
      <div>
        <div className="notfound-code">404</div>
        <p className="notfound-text">This page wandered off. Let's get you back.</p>
        <a className="btn-outline" href="/#/">Back home</a>
      </div>
    </main>
  );
}

export default Notfound;
