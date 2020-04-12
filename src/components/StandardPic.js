import React, { Component } from "react";

export default class StandardPic extends Component {
    render() {
        return (
            <section className="standard-pic">
                <div className="container standard-pic__container">
                    <div className="standard-pic__content">
                        <h2 className="standard-pic__title">Standard Picture Section</h2>
                        <p className="standard-pic__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
                            sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes.
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.
                            </span>
                        </p>
                    </div>
                    <div className="standard-pic__img">
                        <img src="img/standard-pic/stand-pic-city.png" />
                    </div>
                </div>
            </section>
        );
    }
}
