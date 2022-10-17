import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

import './Footer.css'


export function Footer() {
    return (
      <footer className="footerContainer">
            <div className="icon">
                    <a href="https://github.com/Marcoslarraza" target="blank">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.linkedin.com/in/marcos-larraza-2a836116b/" target="blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/3434568420" target="blank">
                        <FaWhatsappSquare />
                    </a> 
            </div>
            <div>
                <p className="text">Copyright © 2022 - Todos los derechos reservados</p>
                <p className="text">by Marco´s Tienda</p>
            </div>
            <div>
                <p  className="text">Marcos Larraza Front-End Developer</p>
            </div>
    
        </footer>
    )
  }
  export default Footer;