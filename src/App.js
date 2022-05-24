import React from "react";
import BiographyPage from "./pages/Biography/BiographyPage";
import Homepage from "./pages/Homepage/Homepage";
import {Route} from "react-router-dom";
import {Routes} from "react-router";

class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/biography" element={<BiographyPage/>}/>
                </Routes>
            </>
        );
    }
}

export default App;
