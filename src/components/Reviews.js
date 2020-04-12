import React, { Component } from "react";

export default class Reviews extends Component {
    render() {
        return (
            <section id="reviews" className="reviews">
                <div className="container">
                    <h2 className="about__title">What our customers are saying</h2>
                    <p className="about__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="reviews__content">
                        <div className="reviews__item">
                            <p className="reviews__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus
                                expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                            </p>
                            <div className="reviews__item-client">
                                <img src="img/reviews/review-person.png" />
                                <div className="item-client__about">
                                    <div className="client-about__name">Jeremy H.</div>
                                    <div className="client-about__prof">Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <p className="reviews__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus
                                expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                            </p>
                            <div className="reviews__item-client">
                                <img src="img/reviews/review-person.png" />
                                <div className="item-client__about">
                                    <div className="client-about__name">John S.</div>
                                    <div className="client-about__prof">Freelancer</div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews__item">
                            <p className="reviews__item-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus
                                expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.
                            </p>
                            <div className="reviews__item-client">
                                <img src="img/reviews/review-person.png" />
                                <div className="item-client__about">
                                    <div className="client-about__name">Susan W.</div>
                                    <div className="client-about__prof">Photographer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
