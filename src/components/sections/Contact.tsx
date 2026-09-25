import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { CONTACT_DATA } from '../../data/ebanoData'
import { SocialIcon } from '../common/SocialIcon'

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: 'Landing Page de Alto Impacto',
    mensaje: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate clean asynchronous submission
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  const handleReset = () => {
    setStatus('idle')
    setFormData({
      nombre: '',
      email: '',
      servicio: 'Landing Page de Alto Impacto',
      mensaje: '',
    })
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-header-content">
            <div className="eyebrow">Hablemos de tu Proyecto</div>
            <h2 className="section-title">Inicia la transformación de tu presencia digital.</h2>
          </div>
          <p className="section-description">
            Cuéntanos qué necesitas y prepararemos una propuesta técnica y económica adaptada a tus objetivos.
          </p>
        </div>

        <div className="contact-grid reveal">
          {/* Info Column */}
          <div className="contact-info">
            <div className="contact-status-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Respuesta promedio en menos de 2 horas</span>
            </div>

            <h3>Conversemos sobre tu visión.</h3>
            <p>
              Ya tengas una idea clara o estés evaluando alternativas técnicas, te asesoramos en cada paso.
            </p>

            <div className="contact-items-list">
              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="contact-label">EMAIL DIRECTO</div>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="contact-value hover:text-gold transition-colors"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="contact-label">TELÉFONO & WHATSAPP</div>
                  <a
                    href={`tel:${CONTACT_DATA.phone}`}
                    className="contact-value hover:text-gold transition-colors"
                  >
                    {CONTACT_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bubble">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="contact-label">UBICACIÓN & DISPONIBILIDAD</div>
                  <div className="contact-value">{CONTACT_DATA.location}</div>
                </div>
              </div>
            </div>

            <div className="socials-wrap">
              <div className="socials-label">Redes Profesionales:</div>
              <div className="socials">
                {CONTACT_DATA.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="social"
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={social.iconName} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="contact-success-box">
                <div className="contact-success-icon">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3>¡Mensaje Recibido con Éxito!</h3>
                <p>
                  Gracias por comunicarte con <strong>Ébano Digital</strong>. Nos pondremos en contacto contigo a la brevedad posible para coordinar los siguientes pasos.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="nombre">TU NOMBRE O EMPRESA *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Ej. Juan Pérez / Empresa SAC"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">CORREO ELECTRÓNICO *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="servicio">SERVICIO DE INTERÉS</label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                    >
                      <option value="Landing Page de Alto Impacto">
                        Landing Page de Alto Impacto
                      </option>
                      <option value="Sitio Web Corporativo">
                        Sitio Web Corporativo
                      </option>
                      <option value="Tienda Online & E-commerce">
                        Tienda Online & E-commerce
                      </option>
                      <option value="Mantenimiento & Soporte Continuo">
                        Mantenimiento & Soporte Continuo
                      </option>
                      <option value="Desarrollo Web Personalizado">
                        Desarrollo Web Personalizado
                      </option>
                    </select>
                  </div>

                  <div className="field full">
                    <label htmlFor="mensaje">
                      DETALLES DEL PROYECTO O CONSULTA *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos brevemente qué tipo de web necesitas, plazos estimados o funcionalidades clave..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <Send className="w-4 h-4 btn-arrow" />
                    </>
                  )}
                </button>

                <p className="form-note">
                  🔒 Tus datos están protegidos. No enviamos spam ni compartimos tu información.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
