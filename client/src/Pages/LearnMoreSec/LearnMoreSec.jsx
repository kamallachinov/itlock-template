import React from 'react'
import styles from './LearnMoreSec.module.scss'
import image from '../../Assets/about1.jpg'
import Container from 'react-bootstrap/Container';
function LearnMoreSec() {
  return (
    <>

    <Container>
    <section className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.textCenter}>
                                <h2>Insights to help you do what you do better, faster and more profitably.</h2>
                                <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insuranc.</p>
                                <button>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.col}>
                            <img src={image}/>
                    </div>
                </div>

            </section>
    </Container>
           
    
    
    </>
  )
}

export default LearnMoreSec