import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
 
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <h3>App citas</h3>
        </div>
 
        <div className={styles.items}>
            <Link to={'/'}>Home</Link>
            <Link to={'/StartPage'}>Start</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </nav>
  )
}
 