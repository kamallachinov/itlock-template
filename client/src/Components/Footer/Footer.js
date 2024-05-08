import React from 'react'
import styles from './Footer.module.scss'
import {BsFillSuitHeartFill} from 'react-icons/bs'
function Footer() {
  return (
   <>
    <footer className={styles.footer}>
        <p>Copyright ©2023 All rights reserved | This template is made with <BsFillSuitHeartFill/> by Colorlib</p>
    </footer>
   
   
   </>
  )
}

export default Footer