import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { PROJECTS_ITEMS } from '../../data/ebanoData'

type CategoryFilter = 'todos' | 'corporativo' | 'landing' | 'ecommerce'

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos')

  const filteredProjects =
    activeCategory === 'todos'
      ? PROJECTS_ITEMS
      : PROJECTS_ITEMS.filter((p) => p.category === activeCategory)

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'corporativo', label: 'Sitios Corporativos' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'ecommerce', label: 'E-commerce' },
  ]

  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Portafolio & Casos</div>
            <h2 className="section-title">Soluciones digitales de alto nivel.</h2>
          </div>
          <p className="section-description">
            Explora ejemplos conceptuales y casos de éxito estructurados para diferentes industrias.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="project-filter-tabs reveal">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`project-filter-btn ${
                activeCategory === tab.id ? 'active' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-modern reveal">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-modern-card">
              <span className="project-badge">{project.badge}</span>

              <div className="project-image-container">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech stack tags */}
                <div className="project-tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href="#contacto"
                    className="project-action-link"
                    aria-label={`Consultar proyecto ${project.title}`}
                  >
                    <span>Cotizar solución similar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
