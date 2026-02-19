import Header from "../components/Header";
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"
import styles from './layout.module.css'

const Layout = () => {
   return <div className={styles.layout}>
      <Header />
      <main>
         <Outlet />
      </main>
      <Footer />
   </div>
}

export default Layout