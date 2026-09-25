import React, { useState } from 'react'

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive floating tooltip */}
      <div
        className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}
        aria-hidden="true"
      >
        <span>¿En qué podemos ayudarte?</span>
        <strong>Escríbenos por WhatsApp</strong>
      </div>

      <a
        href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20desarrollo%20web"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <span className="whatsapp-ping-dot"></span>
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.99C16.32 13.86 15.12 13.27 14.9 13.19C14.67 13.11 14.51 13.07 14.35 13.31C14.18 13.56 13.7 14.11 13.55 14.27C13.41 14.44 13.26 14.46 13.01 14.34C12.77 14.21 11.98 13.96 11.05 13.12C10.32 12.47 9.83 11.67 9.69 11.42C9.54 11.17 9.67 11.04 9.79 10.92C9.9 10.81 10.04 10.63 10.16 10.48C10.28 10.34 10.33 10.23 10.41 10.07C10.49 9.9 10.45 9.76 10.39 9.64C10.33 9.5 9.84 8.32 9.64 7.83C9.44 7.36 9.24 7.42 9.09 7.42C8.94 7.41 8.78 7.41 8.62 7.41L8.53 7.33Z" />
        </svg>
      </a>
    </div>
  )
}
