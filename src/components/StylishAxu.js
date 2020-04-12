import React, { Component } from "react";

export default class StylishAxu extends Component {
    render() {
        return (
            <section className="stylish-axu">
                <div className="container">
                    <h2 className="stylish-axu__title">Stylish axure design</h2>
                    <p className="stylish-axu__subtitle">
                        Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster
                        than ever!
                    </p>
                    <a href="img/intro/intro-bg.jpg" download className="stylish-axu__btn">
                        Download
                    </a>
                </div>
            </section>
        );
    }
}
