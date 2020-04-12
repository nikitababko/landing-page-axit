import React, { Component } from "react";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import SocialMedia from "./SocialMedia";
import Tabs from "./Tabs";
import SubList from "./SubList";
import StandardPic from "./StandardPic";
import About from "./About";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import StylishAxu from "./StylishAxu";
import Footer from "./Footer";

// styles
import "../scss/index.scss";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <SocialMedia />
                <Tabs />
                <SubList />
                <StandardPic />
                <About />
                <Pricing />
                <Reviews />
                <StylishAxu />
                <Footer />
            </div>
        );
    }
}
