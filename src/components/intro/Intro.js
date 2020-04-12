import React, { Component } from "react";

export default class Intro extends Component {
    render() {
        return (
            <section id="intro" className="intro">
                <div className="container container--intro">
                    <div className="intro__content">
                        <div className="intro__inner">
                            <div className="intro__logo">
                                <img src="img/intro/intro-logo.png" title="AXIT"></img>
                            </div>
                            <h1 className="intro__title">Modern axure template for beautiful prototypes</h1>
                            <p className="intro__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                            </p>
                            <a href="img/intro/intro-bg.jpg" download className="intro__btn">
                                Download
                            </a>
                        </div>
                        <div className="intro__registr">
                            <div className="intro__registr-title">
                                Try Your <span>Free</span>Trial Today
                            </div>
                            <form className="intro__registr-form">
                                <input placeholder="Name"></input>
                                <input placeholder="Email"></input>
                                <input placeholder="Password"></input>
                                <button className="intro__registr-btn">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
