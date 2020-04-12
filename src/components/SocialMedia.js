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

export default class SocialMedia extends Component {
    render() {
        return (
            <section className="social">
                <div className="container container--social">
                    <div className="social__inner">
                        <h2 className="social__title">Social Media</h2>
                        <p className="social__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet.
                        </p>
                    </div>
                    <div className="social__content">
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faFacebookF} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faTwitter} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faGooglePlusG} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faLinkedinIn} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faInstagramSquare} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faTelegramPlane} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon className="social__link" icon={faVk} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
