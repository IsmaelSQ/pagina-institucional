import React from 'react'

export const About: React.FC = () => {
  return (
    <section className="section intro" id="nosotros">
      <div className="container">
        <div className="intro-grid reveal">
          <div>
            <div className="eyebrow">Nosotros</div>
            <h2>
              Tecnología que <em>entiende tu negocio.</em>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              <strong>Ébano Digital</strong> es una propuesta de estudio de desarrollo web enfocada en crear soluciones digitales para empresas, emprendimientos y profesionales.
            </p>
            <p>
              Nuestro enfoque combina diseño, tecnología y estrategia para construir experiencias digitales claras, modernas y funcionales.
            </p>
            <p>
              Esta plantilla representa la identidad visual y estructura inicial del estudio. El contenido real, proyectos y datos de contacto podrán incorporarse posteriormente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
