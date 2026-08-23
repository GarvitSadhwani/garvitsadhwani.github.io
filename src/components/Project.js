import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import simplitask1 from '../elements/simplitask1.jpg';

// Map data-file names to bundled imports (CRA can't import by dynamic string).
const IMAGES = {
  'simplitask1.jpg': simplitask1,
};

function Project({ project }) {
  const src = project.image ? IMAGES[project.image] : null;
  const initial = project.title.charAt(0).toUpperCase();

  return (
    <article className="glass project-card">
      <div className="project-media">
        {src ? (
          <img className="project-img" src={src} alt={project.title} />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{initial}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-head">
          <h3 className="project-title">{project.title}</h3>
          {project.repo && (
            <a
              className="project-repo"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
            >
              <AiOutlineGithub size="1.1rem" />
              <span>Code</span>
            </a>
          )}
        </div>
        <p className="project-desc">{project.desc}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="exp-tags">
            {project.tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
