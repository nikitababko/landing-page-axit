import React, { Component } from "react";

export default class Tabs extends Component {
    state = {
        btnOne() {
            const tabsTitleInner = document.querySelector(".tabs__content-title");
            tabsTitleInner.classList.toggle("tabs__content-title--animation");
            tabsTitleInner.innerHTML = "Tabs with soft transitioning effect.";
        },
        btnTwo() {
            const tabsTitleInner = document.querySelector(".tabs__content-title");
            tabsTitleInner.classList.toggle("tabs__content-title--animation");
            tabsTitleInner.innerHTML = "Proin sodales pulvinar tempor cum.";
        },
        btnThree() {
            const tabsTitleInner = document.querySelector(".tabs__content-title");
            tabsTitleInner.classList.toggle("tabs__content-title--animation");
            tabsTitleInner.innerHTML = "Lorem ipsum dolor sit amet, consectetur.";
        },
    };

    render() {
        return (
            <section id="features" className="tabs">
                <div className="container tabs__container">
                    <div className="tabs__control">
                        <button onClick={this.state.btnOne} className="tabs__control-btn tabs__control-btn--one">
                            Tab 1
                        </button>
                        <button onClick={this.state.btnTwo} className="tabs__control-btn tabs__control-btn--two">
                            Tab 2
                        </button>
                        <button
                            onClick={this.state.btnThree}
                            className="tabs__control-btn tabs__control-btn--three"
                        >
                            Tab 3
                        </button>
                    </div>
                    <div className="tabs__content">
                        <h2 className="tabs__content-title">Tabs with soft transitioning effect.</h2>
                        <p className="tabs__content-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
                            sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.
                            </span>
                        </p>
                        <a href="img/tabs/tabs-city.png" download className="tabs__content-btn">
                            Download
                        </a>
                    </div>

                    <div className="tabs__img">
                        <img src="img/tabs/tabs-city.png" />
                    </div>
                </div>
            </section>
        );
    }
}
