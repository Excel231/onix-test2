import React from "react";
import Header from "../../сomponents/Header/Header";
import HomepageMainSection from "../../сomponents/HomepageMainSection/HomepageMainSection";
import Footer from "../../сomponents/Footer/Footer";
import "../../styles.css"
import PropType from "prop-types";

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <HomepageMainSection changeCurrentPage={this.props.changeCurrentPage}/>
                <Footer/>
            </>
        );
    }
}

Homepage.propTypes = {
    changeCurrentPage: PropType.func
}

export default Homepage;