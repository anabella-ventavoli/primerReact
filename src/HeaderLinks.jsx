import './style.css'

export default function HeaderLinks() {

  return (
    <div className="header-links">
        <div className="logo">
            <a href="#"><img src="/img/logo_sinb.png" alt="The Cozy Cone Alojamientos" /></a>
        </div>
    
        <ul>
            <li>
                <a href=""><img src="/img/iconcolor-phone.png" /><p>0810 205 2024</p></a>
            </li>
            <li>
                <a href=""><img src="/img/iconcolor-whatsapp.png" /><p>3455 123456</p></a>
            </li>
            <li>
                <a href=""><img src="/img/icon-user-white.png" /><p>Iniciar sesión</p></a>
            </li>
            <li>
                <a href=""><img src="/img/question-orange.png" /><p>Ayuda</p></a>
            </li>
        </ul>

    </div>
  )
}
