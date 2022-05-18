import React from "react";
import Header from "./header-section/Header";
import Main from "./main-section/Main";
import Footer from "./footer-section/Footer";
import "../../styles.css"
import PropType from "prop-types";

const Homepage = ({changeCurrentPage}) => {
    return (
        <>
            <Header/>
            <Main changeCurrentPage={changeCurrentPage}/>
            <Footer/>
        </>
    );
}

Homepage.propTypes = {
    changeCurrentPage: PropType.func
}

export default Homepage;