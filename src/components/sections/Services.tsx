import React from 'react'
import {
  Zap,
  Building2,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES_LIST } from '../../data/ebanoData'

const serviceIconMap: Record<string, LucideIcon> = {
  Zap,
  Building2,
  ShoppingBag,
  ShieldCheck,
}

export const Services: React.FC = () => {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Servicios Especializados</div>
            <h2 className="section-title">Soluciones para cada etapa de tu negocio.</h2>
          </div>
          <p className="section-description">
            Desde una landing page de alta conversión hasta una plataforma e-commerce completa o sitio corporativo de alto estándar.
          </p>
        </div>

        <div className="service-list reveal">
          {SERVICES_LIST.map((service) => {
            const IconComponent = serviceIconMap[service.iconName] || Zap

            return (
              <article key={service.number} className="service">
                <div className="service-icon-box">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>

                <div className="service-main-content">
                  <div className="service-header-row">
                    <h3>{service.title}</h3>
                  </div>

                  <p>{service.description}</p>

                  {/* Feature deliverables chips */}
                  {service.features && service.features.length > 0 && (
                    <div className="service-chips">
                      {service.features.map((feat, fIdx) => (
                        <span key={fIdx} className="service-chip">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <span className="service-label">{service.label}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
