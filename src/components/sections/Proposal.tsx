import React from 'react'
import { PROPOSAL_FEATURES } from '../../data/ebanoData'

export const Proposal: React.FC = () => {
  return (
    <section className="section" id="propuesta">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Nuestra propuesta</div>
            <h2 className="section-title">Más que una página web.</h2>
          </div>
          <p className="section-description">
            Cada proyecto parte de una necesidad concreta y busca convertirla en una solución digital clara.
          </p>
        </div>

        <div className="features reveal">
          {PROPOSAL_FEATURES.map((feature) => (
            <article key={feature.number} className="feature">
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
