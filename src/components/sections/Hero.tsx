import React from 'react'
import { ArrowRight } from 'lucide-react'
import { HERO_STATS } from '../../data/ebanoData'

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1800"
          alt="Desarrollo web y código profesional"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content reveal">
          <div className="hero-label">
            <span className="hero-live-beacon">
              <span className="hero-live-ping"></span>
              <span className="hero-live-dot"></span>
            </span>
            <span>Estudio de desarrollo web · Disponible para nuevos proyectos</span>
          </div>

          <h1>
            Construimos experiencias <em>digitales con propósito.</em>
          </h1>

          <p className="hero-description">
            Diseñamos y desarrollamos sitios web modernos, veloces y adaptados a las necesidades reales de tu negocio. Una presencia digital pensada para generar confianza, autoridad y resultados medibles.
          </p>

          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-primary">
              Conocer servicios <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
            <a href="#proyectos" className="btn btn-secondary">
              Ver proyectos referenciales
            </a>
          </div>
        </div>

        {/* Metric Stats Pills - Spanning full container width */}
        <div className="hero-stats-grid reveal">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
              {stat.highlight && (
                <div className="hero-stat-sub">{stat.highlight}</div>
              )}
            </div>
          ))}
        </div>

        <div className="hero-bottom">
          <div className="hero-meta">
            <span>Diseño UX/UI · Desarrollo Full Stack · SEO</span>
            <span>Lima, Perú · Atención Remota Global</span>
          </div>
        </div>
      </div>
    </section>
  )
}
