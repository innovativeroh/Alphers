'use-client'
import React from "react";
import Styles from "./header.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () =>{
    return(
        <div className={Styles.header}>
            <div id="wrapper">
                <div className={Styles.headerStructure}>
                    <div>
                        Logo
                    </div>
                    <div className={Styles.searchArea}>
                        <form action="" >
                            <input type="text" name="Search" placeholder="Search" />
                            <FontAwesomeIcon icon={faSearch} className={Styles.searchIcon}></FontAwesomeIcon>
                        </form>
                    </div>
                    <div>
                        Navigations
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header