import React from "react";
import BiographyPage from "./pages/Biography/BiographyPage";
import Homepage from "./pages/Homepage/Homepage";

class App extends React.Component {
    state = {
        currentPage: <Homepage changeCurrentPage={() => this.setState({currentPage: <BiographyPage/>})}/>
    }

    render() {
        return (
            <>
                {this.state.currentPage}
            </>
        );
    }
}

export default App;
