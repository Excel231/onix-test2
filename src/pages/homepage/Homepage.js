import React from "react";
import Header from "./header-section/Header";
import Main from "./main-section/Main";
import Footer from "./footer-section/Footer";
import "../../styles.css"
import PropType from "prop-types";

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Main changeCurrentPage={this.props.changeCurrentPage}/>
                <Footer/>
            </>
        );
    }
}

Homepage.propTypes = {
    changeCurrentPage: PropType.func
}

export default Homepage;