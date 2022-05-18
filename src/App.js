import React, {useState} from "react";
import BiographyPage from "./pages/biography/BiographyPage";
import Homepage from "./pages/homepage/Homepage";

const App = () => {

    const [currentPage, setCurrentPage] = useState(
        <Homepage changeCurrentPage={() => setCurrentPage(<BiographyPage/>)}/>
    );

    return (
        <>
            {currentPage}
        </>
    );
}

export default App;
