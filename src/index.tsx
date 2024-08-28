import headerImg from './assets/headerImg.png'
import styles from './index.module.css'

export function Home() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <img src={headerImg} />
      </div>

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
              <div key={index} className={styles.cardPost}>
                <div className={styles.cardHeader}>
                  <strong>JavaScript data types and data structures</strong>
                  <span>Há 1 dia</span>
                </div>
                
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
              </div>
            )
          })}

        </div>
      </div>


    </div>
  )
}