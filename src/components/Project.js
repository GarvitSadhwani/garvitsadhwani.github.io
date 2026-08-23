import React from 'react';
import { AiOutlineGithub, AiFillFolder } from 'react-icons/ai';
import simplitask1 from '../elements/simplitask1.jpg';
import stift from '../elements/stift.jpg'
import handgest from '../elements/handgest.jpg'

// Map data-file names to bundled imports (CRA can't import by dynamic string).
const IMAGES = {
  'simplitask1.jpg': simplitask1,
  'stift.jpg': stift,
  'handgest.jpg': handgest,
};

function Project({ project }) {
  const src = project.image ? IMAGES[project.image] : null;

  return (
    <article className="project-card">
      {src && (
        <div className="project-media">
          <img className="project-img" src={src} alt={project.title} />
        </div>
      )}

      <div className="project-body">
        <div className="project-head">
          <AiFillFolder className="project-folder" size="2rem" />
          {project.repo && (
            <a
              className="project-link"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
            >
              <AiOutlineGithub size="1.3rem" />
            </a>
          )}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.map((t) => (
              <span key={t} className="mono-tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
