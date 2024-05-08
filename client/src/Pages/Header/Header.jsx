import React from 'react'
import styles from './Header.module.scss'
// import image from '../../Assets/h1_hero1.jpg'
function Header() {
    return (
        <>

            <header className={styles.header}>
                <div className={styles.text}>
                    <h1>Best IT Solution
                        in your city</h1>
                        <span className={styles.line}></span>
                    <p>Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.</p>
                    <button>Find Out More</button>
                </div>
            </header>

        </>
    )
}

export default Header