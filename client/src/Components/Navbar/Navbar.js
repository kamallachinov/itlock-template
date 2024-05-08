import React, { useContext, useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.scss'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
import { FavouriteContext } from '../../Pages/Context/FavouriteContext'
import logo from '../../Assets/logo.png'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Navbar() {
  const { fav, setFav } = useContext(FavouriteContext)
  const { favCounter, setFavCounter } = useContext(FavouriteContext)

  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("transparent");
  const [top, setTop] = useState(33)
  const listenScrollEvent = () => {
    window.scrollY > 10 ? (setnavColor("#252734")) : (setnavColor("transparent"));
    window.scrollY > 10 ? (setTop(0)) : (setTop(33));

    window.scrollY > 10 ? setnavSize("2rem") : setnavSize("2rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.firstDiv} style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s"
          }}>
            <div><span>Now Hiring:</span><p>Are you a driven and motivated 1st Line IT Support Engineer?</p></div>
            <ul>
              <li><BsFacebook /></li>
              <li><AiOutlineTwitter /></li>
              <li><AiFillLinkedin /></li>
              <li><AiFillYoutube /></li>
            </ul>
          </div>
          <div className={styles.hrDiv}><hr className={styles.hr} /></div>
          <div className={styles.secDiv} style={{ top: top }}>
            <div className={styles.firstPart}>
              <img src={logo} className={styles.logo} />
              <input type='checkbox' id="toggler" />
              <label htmlFor='toggler' id='label'><BiMenu /></label>
              <div className={styles.menu}>
                <ul className={styles.list}>
                  <li>
                    <Link to={'/'} className={styles.link}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/create'} className={styles.link}>Create new</Link>
                  </li>
                  <li>
                    Services
                  </li>

                  <li>
                    Case Study
                  </li>
                  <li>
                    Blog
                  </li>
                  <li>
                    Contact
                  </li>
                  <li>
                    <Link to={'/fav'} className={styles.link}>Favs:{fav.length}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.secPart}>
              <button className={styles.btn}>Free Quote</button>
              <FiHeadphones className={styles.icon} />
              <div>
                <span>Have any questions?</span>
                <h3>Call:10(78) 837 36 47</h3>
              </div>
            </div>
          </div>
        </nav>
      </div>



    </>
  )
}

export default Navbar