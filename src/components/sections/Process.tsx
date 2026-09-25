import React from 'react'
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { PROCESS_STEPS } from '../../data/ebanoData'

const processIconMap: Record<string, LucideIcon> = {
  Compass,
  Palette,
  Code2,
  Rocket,
}

export const Process: React.FC = () => {
  // Cuádruple repetición para un bucle infinito 100% ininterrumpido en cualquier resolución
  const carouselSteps = [
    ...PROCESS_STEPS,
    ...PROCESS_STEPS,
    ...PROCESS_STEPS,
    ...PROCESS_STEPS,
  ]

  return (
    <section className="section process" id="proceso">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Metodología Comprobada</div>
            <h2 className="section-title">Del concepto al resultado en etapas claras.</h2>
          </div>
          <p className="section-description">
            Un proceso estructurado, continuo y transparente que asegura entregas a tiempo y con los más altos estándares de calidad.
          </p>
        </div>
      </div>

      {/* Carrusel Automático Continuo */}
      <div className="process-carousel-wrapper reveal">
        <div className="process-carousel-track">
          {carouselSteps.map((item, idx) => {
            const IconComponent = processIconMap[item.iconName] || Compass

            return (
              <article key={`${item.step}-${idx}`} className="process-carousel-card">
                <div className="process-card-top">
                  <div className="process-step-badge">
                    <span className="process-step-beacon"></span>
                    <span className="process-step">{item.step}</span>
                  </div>
                  <span className="process-duration">{item.duration}</span>
                </div>

                <div className="process-icon-wrap">
                  <IconComponent className="w-5 h-5 text-gold" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="process-deliverable">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>Entregable: {item.deliverable}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
