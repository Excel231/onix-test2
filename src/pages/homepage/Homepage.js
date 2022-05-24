import React from "react";
import Header from "../../сomponents/Header/Header";
import HomepageMainSection from "../../сomponents/HomepageMainSection/HomepageMainSection";
import Footer from "../../сomponents/Footer/Footer";
import "../../styles.css"

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <HomepageMainSection/>
                <Footer/>
            </>
        );
    }
}

export default Homepage;