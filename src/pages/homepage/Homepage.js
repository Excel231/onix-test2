import React from "react";
import Header from "./header-section/Header";
import Main from "./main-section/Main";
import Footer from "./footer-section/Footer";
import "../../styles.css"

const Homepage = ({changeCurrentPage}) => {
    return (
        <>
            <Header/>
            <Main changeCurrentPage={changeCurrentPage}/>
            <Footer/>
        </>
    );
}

export default Homepage;