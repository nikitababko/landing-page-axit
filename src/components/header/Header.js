import React, { Component } from "react";
import BurgerBtn from "./BurgerBtn";

export default class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY > 0;
            const header = document.querySelector(".header");
            if (isTop) {
                header.classList.add("header--fixed");
            } else {
                header.classList.remove("header--fixed");
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener("scroll");
    }
    render() {
        return (
            <header className="header">
                <BurgerBtn />
                <div className="container container--header">
                    <div className="header__logo">
                        <img src="img/header/header-logo.png" title="AXIT"></img>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a className="header__link" href="#intro">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="header__link" href="#features">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a className="header__link" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="header__link" href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a className="header__link" href="#reviews">
                                    Reviews
                                </a>
                            </li>
                            <li>
                                <a className="header__link" href="#footer">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
