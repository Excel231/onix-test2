import React from "react";
import BiographyPage from "./pages/biography/BiographyPage";
import Homepage from "./pages/homepage/Homepage";

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
