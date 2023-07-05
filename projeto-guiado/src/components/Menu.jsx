import {Link} from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
    </nav>
  )
}

export default Menu