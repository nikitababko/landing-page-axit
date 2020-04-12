import React, { Component } from "react";

export default class SubList extends Component {
    render() {
        return (
            <section className="sublist">
                <div className="container sublist__container">
                    <div className="sublist__img">
                        <img src="img/sublist/sublist-city.png" />
                    </div>
                    <div className="sublist__content">
                        <h2 className="sublist-title">Sub list section</h2>
                        <p className="sublist-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        </p>
                        <div className="sublist__item">
                            <img src="img/sublist/sublist-icon.png" />
                            <h3 className="sublist__item-title">Title</h3>
                            <p className="sublist__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet.
                            </p>
                        </div>
                        <div className="sublist__item">
                            <img src="img/sublist/sublist-icon.png" />
                            <h3 className="sublist__item-title">Title</h3>
                            <p className="sublist__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
