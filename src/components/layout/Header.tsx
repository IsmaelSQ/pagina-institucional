import React, { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../data/ebanoData'
import { useHeaderScroll } from '../../hooks/useHeaderScroll'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'
import { ThemeToggle } from '../common/ThemeToggle'

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = useHeaderScroll(30)
  const sectionIds = [
    'inicio',
    'nosotros',
    'servicios',
    'proceso',
    'tecnologias',
    'proyectos',
    'faq',
    'cta',
    'contacto',
  ]
  const activeSection = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <nav className="nav">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          Ébano <span>Digital</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Único botón de cambio de tema al lado de Hablemos */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a href="#contacto" className="nav-cta" onClick={closeMenu}>
            Hablemos
          </a>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
