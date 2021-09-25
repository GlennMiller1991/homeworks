import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './pages/Header.module.css'

function Header() {
    return (
            <div className={styles.nava}>
                <div className={styles.unterJunior}><NavLink exact to={'/unter-junior'}
                                                             activeClassName={styles.active}>unter-junior</NavLink>
                </div>
                <div className={styles.Junior}><NavLink exact to={'/junior'}
                                                        activeClassName={styles.active}>junior</NavLink></div>
                <div className={styles.uberJunior}><NavLink exact to={'/uber-junior'}
                                                            activeClassName={styles.active}>uber-junior</NavLink></div>
            </div>
    )
}

export default Header
