'use-client'
import React from "react";
import Styles from "./header.module.css";
import { faBell, faBriefcase, faCompass, faHome, faMap, faNavicon, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../public/logo.jpg'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className={Styles.header}>
            <div id="wrapper">
                <div className={Styles.headerStructure}>
                    <div>
                        <Link href={"/"}>                    
                        <Image src={logo} alt="logo" className={Styles.BrandImage}/>
                        </Link>
                    </div>
                    <div className={Styles.searchArea}>
                        <form action="" >
                            <input type="text" name="Search" placeholder="Search" />
                            <FontAwesomeIcon icon={faSearch} className={Styles.searchIcon}></FontAwesomeIcon>
                        </form>
                    </div>
                    <div >
                        <nav className={Styles.iconContainer}>
                            <div>
                                <FontAwesomeIcon icon={faHome} className={Styles.icon} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCompass} className={Styles.icon} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBriefcase} className={Styles.icon} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBell} className={Styles.icon} />
                            </div>
                            <div style={{fontSize : "2em"}}>
                                |
                            </div>
                            <div className={Styles.credentials}>
                                <Link href={"/login"}>
                                <button className={Styles.BtnStyle}> Login / SignUp </button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header