import React from "react";
import ListOfParameters from "./ListOfParameters";

const TitleListOfParameters = ({handleClick}) => {
    return (<ListOfParameters key={0}
                              fullName={"Full Name"}
                              age={"Age"}
                              birthYear={"Birth Year"}
                              weight={"Weight"}
                              belts={[{beltName: "Belt Name", year: "Year"}]}
                              handleClick={handleClick}/>
    );
}

export default TitleListOfParameters;