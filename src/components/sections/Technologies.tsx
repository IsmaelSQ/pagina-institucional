import React from 'react'
import { TECH_CARDS } from '../../data/ebanoData'

export const Technologies: React.FC = () => {
  return (
    <section className="section" id="tecnologias">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Capacidades & Ecosistema</div>
            <h2 className="section-title">Tecnología detrás de la experiencia.</h2>
          </div>
          <p className="section-description">
            Implementamos arquitecturas modernas, mantenibles y de alto rendimiento adaptadas a cada necesidad técnica.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="tech-grid reveal">
          {TECH_CARDS.map((tech) => (
            <article key={tech.code} className="tech-card">
              <span className="tech-code">{tech.code}</span>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
