import React, { useState } from 'react'
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react'
import { FAQ_ITEMS } from '../../data/ebanoData'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header section-header-center reveal">
          <div className="section-header-content">
            <div className="eyebrow">Preguntas Frecuentes</div>
            <h2 className="section-title">Resolvemos tus dudas antes de iniciar.</h2>
          </div>
          <p className="section-description">
            Todo lo que necesitas saber sobre nuestros tiempos, metodología de trabajo y entregables.
          </p>
        </div>

        <div className="faq-container reveal">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Support mini-banner */}
        <div className="faq-help-box reveal">
          <div className="faq-help-content">
            <div className="faq-help-icon">
              <MessageCircle className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4>¿Tienes un requerimiento específico que no figura aquí?</h4>
              <p>Conversemos directamente para analizar la viabilidad técnica de tu proyecto sin compromiso.</p>
            </div>
          </div>
          <a
            href="https://wa.me/51999999999?text=Hola%2C%20tengo%20una%20consulta%20sobre%20sus%20servicios%20de%20desarrollo%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary faq-help-btn"
          >
            <span>Consultar por WhatsApp</span>
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
