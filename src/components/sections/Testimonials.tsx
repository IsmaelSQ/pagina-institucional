import React from 'react'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { TESTIMONIALS_DATA } from '../../data/ebanoData'

export const Testimonials: React.FC = () => {
  return (
    <section className="section testimonials-section" id="testimonios">
      <div className="container">
        <div className="section-header section-header-center reveal">
          <div className="section-header-content">
            <div className="eyebrow">Confianza & Testimonios</div>
            <h2 className="section-title">Lo que dicen quienes ya confiaron en nosotros.</h2>
          </div>
          <p className="section-description">
            La satisfacción de nuestros clientes y el impacto en sus negocios es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="testimonials-grid reveal">
          {TESTIMONIALS_DATA.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-card-header">
                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, rIdx) => (
                    <Star
                      key={rIdx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gold/30 shrink-0" />
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author-row">
                <img
                  src={item.avatarUrl}
                  alt={item.author}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="testimonial-name-wrap">
                    <h4>{item.author}</h4>
                    <span title="Cliente Verificado" className="inline-flex">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    </span>
                  </div>
                  <p className="testimonial-role">
                    {item.role} ·{' '}
                    <span className="text-gold font-semibold">
                      {item.company}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
