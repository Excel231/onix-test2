import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "./styles.css"

export class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        );
    };
};