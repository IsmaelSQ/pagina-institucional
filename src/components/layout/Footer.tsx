import React from 'react'
import { CONTACT_DATA } from '../../data/ebanoData'
import { SocialIcon } from '../common/SocialIcon'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#inicio" className="logo">
              Ébano <span>Digital</span>
            </a>
            <p>
              Estudio de desarrollo web y soluciones digitales de alto impacto. Presencia online con propósito, diseño y velocidad.
            </p>

            <div className="footer-socials">
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

          <div className="footer-column">
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#servicios">Landing Page</a>
              </li>
              <li>
                <a href="#servicios">Sitio Corporativo</a>
              </li>
              <li>
                <a href="#servicios">Tienda Online</a>
              </li>
              <li>
                <a href="#servicios">Mantenimiento</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Estudio</h4>
            <ul>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#proceso">Proceso</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#tecnologias">Tecnologías</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="#contacto">Escríbenos</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_DATA.email}`}>{CONTACT_DATA.email}</a>
              </li>
              <li>
                <a href={`tel:${CONTACT_DATA.phone}`}>{CONTACT_DATA.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ébano Digital. Todos los derechos reservados.</p>
          <button type="button" onClick={scrollToTop} className="back-top">
            VOLVER ARRIBA ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
