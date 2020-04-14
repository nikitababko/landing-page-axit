import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGooglePlusG,
    faInstagramSquare,
    faVk,
    faLinkedinIn,
    faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container footer__container">
                    <h2 className="footer__title">Contact us</h2>
                    <p className="footer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <form className="footer__form">
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="text" placeholder="Subject"></input>
                        <textarea placeholder="Message"></textarea>
                        <button className="footer__form-btn">Send message</button>
                    </form>
                </div>
                <div className="footer__inner">
                    <div className="footer__inner-social">
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faTelegramPlane} />
                        </a>
                        <a href="" className="footer__social-link" target="_blank">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                    </div>
                    <div className="footer__inner-rights">
                        <FontAwesomeIcon className="footer__social-link" icon={faCopyright} />
                        2015 Axure Themes
                    </div>
                </div>
            </footer>
        );
    }
}
