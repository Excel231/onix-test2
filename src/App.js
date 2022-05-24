import React from "react";
import BiographyPage from "./pages/Biography/BiographyPage";
import Homepage from "./pages/Homepage/Homepage";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Footer from "./сomponents/Footer/Footer";
import Header from "./сomponents/Header/Header";

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/biography" element={<BiographyPage/>}/>
                </Routes>
                <Footer/>
            </>
        );
    }
}

export default App;
