import React from 'react'
import styles from './IndustryOffers.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsBuilding,BsFillBasket3Fill} from 'react-icons/bs'
import {GiCommercialAirplane} from 'react-icons/gi'
import {FaRedhat} from 'react-icons/fa'
function IndustryOffers() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.textCenter}>
                    <span>Industry We Offer</span>
                    <h2>Managed IT services customized for your industry</h2>
                    <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</p>
                </div>
                <div className={styles.cards}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={styles.card}>
                                    <BsBuilding className={styles.icon}/>
                                    <h5>Industries & Manufacturing</h5>
                                </div>
                            </Col>
                            <Col><div className={styles.card}>
                                    <BsFillBasket3Fill className={styles.icon}/>
                                    <h5>Industries & Manufacturing</h5>
                                </div></Col>
                            <Col><div className={styles.card}>
                                    <GiCommercialAirplane className={styles.icon}/>
                                    <h5>Industries & Manufacturing</h5>
                                </div></Col>
                            <Col><div className={styles.card}>
                                    <FaRedhat className={styles.icon}/>
                                    <h5>Industries & Manufacturing</h5>
                                </div></Col>
                        </Row>
                    </Container>
                </div>
            </section>

        </>
    )
}

export default IndustryOffers