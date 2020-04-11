import React from "react"

//Styles
import "../styles/home.scss"

//Components

//Data

const Home:React.FunctionComponent = () => {

  return (
    <>
      <nav className="navbar">
        <a>
          <img className="logo-awakelab" src="https://gricel.sfo2.digitaloceanspaces.com/awakelab/logo-awakelab-inverse.svg" alt="logo awakelab" title="logo awakelab"/>
        </a>
        <div className="welcome">
          <p className="welcome-phrase">
            ¡Bienvenido <span className="expression">awaker</span>!
          </p>
          <ul className="progress-indicators">
            <li className="progress-indicator module">
                <button className="p-indicator-number">
                  1
                </button>
                <span className="p-indicator-name">
                  Módulo
                </span>
            </li>
            <li className="progress-indicator class">
                <button className="p-indicator-number">
                  1
                </button>
                <span className="p-indicator-name">
                  Clase
                </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="body-content">
        <div className="body-content-top">
          <nav className="modules-selector">
            <ul className="m-selector-wrapper">
              <li className="module active">
                <button className="btn-module">1</button>
              </li>
              <li className="module">
                <button className="btn-module">2</button>
              </li>
              <li className="module">
                <button className="btn-module">3</button>
              </li>
              <li className="module">
                <button className="btn-module">4</button>
              </li>
              <li className="module">
                <button className="btn-module">5</button>
              </li>
            </ul>
          </nav>
          <h1>Módulo 1: <span>diseño visual y web</span></h1>
        </div>
        <div className="body-content-center">
          
          <div className="module-tags-component">
            <ul className="module-tags">
              <li className="tag">semiótica</li>
              <li className="tag">color</li>
              <li className="tag">tipografía</li>
              <li className="tag">herramientas de software</li>
            </ul>
          </div>

          <div className="submodule-list-component">
            <ul className="submodule-list">
              <h2>Lenguaje básico de diseño</h2>
              <li className="submodule">Proximidad</li>
              <li className="submodule">Espacio</li>
              <li className="submodule">Alineación</li>
              <li className="submodule">Contraste</li>
              <li className="submodule">Repetición</li>
            </ul>
          </div>
          {/*https://gricel.sfo2.digitaloceanspaces.com/awakelab/puzzle-white-center.svg*/}
        </div>
      </div>
    </>
  )
}

export default Home