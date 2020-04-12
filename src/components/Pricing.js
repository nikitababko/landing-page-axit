import React, { Component } from "react";

export default class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="pricing">
                <div className="container">
                    <h2 className="pricing__title">Pricing options</h2>
                    <p className="pricing__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="pricing__content">
                        <div className="pricing__item">
                            <div className="pricing__item-dark">
                                <h3 className="pricing__item-title">Basic</h3>
                                <div className="pricing__item-price">
                                    $<span>0</span>
                                </div>
                                <div className="pricing__item-date">Free for life</div>
                            </div>
                            <div className="pricing__item-white">
                                <div className="pricing__item-population">Our most population</div>
                                <div className="pricing__item-space">1 Gb of space</div>
                                <div className="pricing__item-bandwidth">10Gb of bandwidth</div>
                                <div className="pricing__item-web">3 websites</div>
                                <div className="pricing__item-customization">Basic customization</div>
                                <div className="pricing__item-supp">Email support</div>
                            </div>
                        </div>
                        <div className="pricing__item">
                            <div className="pricing__item-dark">
                                <h3 className="pricing__item-title">Professional</h3>
                                <div className="pricing__item-price">
                                    $<span>19</span>
                                </div>
                                <div className="pricing__item-date">Free for life</div>
                            </div>
                            <div className="pricing__item-white">
                                <div className="pricing__item-population">Our most population</div>
                                <div className="pricing__item-space">1 Gb of space</div>
                                <div className="pricing__item-bandwidth">10Gb of bandwidth</div>
                                <div className="pricing__item-web">3 websites</div>
                                <div className="pricing__item-customization">Basic customization</div>
                                <div className="pricing__item-supp">Email support</div>
                            </div>
                        </div>
                        <div className="pricing__item">
                            <div className="pricing__item-dark">
                                <h3 className="pricing__item-title">Enterprice</h3>
                                <div className="pricing__item-price">
                                    $<span>70</span>
                                </div>
                                <div className="pricing__item-date">Free for life</div>
                            </div>
                            <div className="pricing__item-white">
                                <div className="pricing__item-population">Our most population</div>
                                <div className="pricing__item-space">1 Gb of space</div>
                                <div className="pricing__item-bandwidth">10Gb of bandwidth</div>
                                <div className="pricing__item-web">3 websites</div>
                                <div className="pricing__item-customization">Basic customization</div>
                                <div className="pricing__item-supp">Email support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
