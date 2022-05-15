import React from "react";
import ParameterList from "./ParameterList";

const TitleParameterList = ({handleClick}) => {
    return (
        <ParameterList
            key={0}
            fullName={"Full Name"}
            age={"Age"}
            birthYear={"Birth Year"}
            weight={"Weight"}
            belts={[{beltName: "Belt Name", year: "Year"}]}
            handleClick={handleClick}
        />
    );
}

export default TitleParameterList;