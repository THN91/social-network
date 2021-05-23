import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Navbar.module.css'
import SitebarContainer from "../sitebar/SitebarContainer";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messanges</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <SitebarContainer/>
        </div>
    )
}

export default Navbar;