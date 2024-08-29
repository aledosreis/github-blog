import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import styles from './layout.module.css'

export function DefaultLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageContent}>
        <Outlet />
      </div>
    </div>
  )
}