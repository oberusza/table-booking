import React, { useState } from "react";

import Logo from "./images/logo.svg";
import MenuIcon from "./images/hamgurger_menu_icon.svg"
import Basket from "./images/basket.svg";

const Nav = () => {

    const [style, setStyle] = useState("menuitems-hide");
    const dropDown = () => {
        if (style === "menuitems-hide") {
            setStyle("menuitems");
        } else {
            setStyle("menuitems-hide");
        }
    }

    return (
        <nav>
            <img
                className="logo"
                src={Logo}
                alt="Little Lemon Logo"
            />
            <a href="#" onClick={dropDown}>
                <img
                    className="menuicon"
                    src={MenuIcon}
                    alt="Menu icon"
                />
            </a>
            <div className={style}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <a className="basket" href="#">
                    <img
                        src={Basket}
                        alt="Basket"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Nav;
