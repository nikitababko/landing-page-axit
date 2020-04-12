import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container">
                    <h2 className="about__title">Why this is awesome</h2>
                    <p className="about__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="about__content">
                        <div className="about__item">
                            <img src="img/about/about-1.png" className="about__item-icon" />
                            <h3 className="about__item-title">Thoughtful Design</h3>
                            <p className="about__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.
                            </p>
                        </div>
                        <div className="about__item">
                            <img src="img/about/about-2.png" className="about__item-icon" />
                            <h3 className="about__item-title">Well Crafted</h3>
                            <p className="about__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.
                            </p>
                        </div>
                        <div className="about__item">
                            <img src="img/about/about-3.png" className="about__item-icon" />
                            <h3 className="about__item-title">Easy to Customize</h3>
                            <p className="about__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
