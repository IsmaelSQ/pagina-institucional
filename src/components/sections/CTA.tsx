import React from 'react'

export const CTA: React.FC = () => {
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <div className="cta-content reveal">
          <div className="eyebrow">Hablemos de tu proyecto</div>
          <h2>
            Una buena idea merece una <em>gran presencia digital.</em>
          </h2>
          <p>
            Cuéntanos qué necesitas y encontremos juntos la mejor solución para llevarlo a la web.
          </p>
          <a href="#contacto" className="btn btn-primary">
            Iniciar conversación <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
