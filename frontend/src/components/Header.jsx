import styles from './Header.module.css'

const Header = () => {
   return <header className={styles.header}>
      <h1>Vox Trello</h1>
      <span>
         <span>Bem vindo usuário</span>
         <span>
            <i className="fa-solid fa-power-off"></i>
         </span>
      </span>
   </header>
}

export default Header