import styles from './Header.module.css'
import { Link, useRouteLoaderData } from 'react-router-dom'
const Header = () => {
   const userData = useRouteLoaderData('home')
   
   return <header className={styles.header}>
      <h1>Vox Trello</h1>
      <span>
         <span>Bem vindo {userData.user.name}</span>
         <Link to='/logout'>
             <i className="fa-solid fa-power-off"></i>
         </Link>
      </span>
   </header>
}

export default Header