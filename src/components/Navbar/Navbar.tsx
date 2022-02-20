import React, {FC} from "react";
import styles from "./Navbar.module.scss";
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className={styles.HeaderWrap}>
            <nav className={styles.content}>
                <ul className={styles.HeaderNavLists}>
                    <Link className={styles.HeaderNavLists} to="/">
                        <li className={styles.HeaderNavItem}>Character</li>
                    </Link>
                    <Link className={styles.HeaderNavLists} to="/locations">
                        <li className={styles.HeaderNavItem}>Locations</li>
                    </Link>
                    <Link className={styles.HeaderNavLists} to="/episodes">
                        <li className={styles.HeaderNavItem}>Episodes</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
