import { CardPost } from '../../components/CardPost'
import { Header } from '../../components/Header'
import styles from './index.module.css'

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.pageContent}>

        <div className={styles.profile}>
          <img src="https://github.com/aledosreis.png" />
          <div className={styles.profileInfo}>
            <div className={styles.profileHeader}>
              <h1>Alessandro Reis</h1>
              <a href="https://github.com/aledosreis">GITHUB</a>
            </div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <div className={styles.profileFooter}>
              <span>aledosreis</span>
              <span>DXC Technology</span>
              <span>0 seguidores</span>
            </div>
          </div>
        </div>

        <div className={styles.pageHeader}>
            <span>Publicações</span>
            <span>6 publicações</span>
        </div>

        <input className={styles.searchInput} type="text" placeholder='Buscar conteúdo' />

        <div className={styles.posts}>

          {Array.from({length: 6}).map((_, index) => {
            return (
              <CardPost key={index} />
            )
          })}

        </div>
      </div>

    </div>
  )
}