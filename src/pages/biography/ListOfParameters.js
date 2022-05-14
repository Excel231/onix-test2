import React from "react";

const ListOfParameters = ({fullName, age, birthYear, weight, belts, handleClick}) => {

    /*Custom sort of belts by year value.*/
    const bubbleSort = (newBelts) => {
        for (let i = 0; i < newBelts.length - 1; i++) {
            for (let j = 0; j < newBelts.length - i - 1; j++) {
                if (newBelts[j + 1].year < newBelts[j].year) {
                    let temp = newBelts[j + 1].year;
                    newBelts[j + 1].year = newBelts[j].year;
                    newBelts[j].year = temp;
                }
            }
        }
        return newBelts;
    }

    let sortedBelts = bubbleSort([...belts]);

    return (
        <ul className={"biography-ul"}>
            <li className={"biography-li"} onClick={() => handleClick("name.fullName")}>{fullName}</li>
            <li className={"biography-li"} onClick={() => handleClick("age")}>{age}</li>
            <li className={"biography-li"} onClick={() => handleClick("birthYear")}>{birthYear}</li>
            <li className={"biography-li"} onClick={() => handleClick("weight")}>{weight}</li>
            {<li className={"biography-li"} onClick={() => handleClick("belts")}>
                <ul>
                    {/*Here sorted belts are converted to React components.*/}
                    {sortedBelts.map(({beltName, year}, index) => (
                        <li key={index}>{year} - {beltName}</li>
                    ))}
                </ul>
            </li>}
        </ul>
    );
}

export default ListOfParameters;