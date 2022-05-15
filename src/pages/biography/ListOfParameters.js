import React from "react";

const ListOfParameters = ({id, fullName, age, birthYear, weight, belts, handleClick}) => {

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

    let sortedBelts = typeof belts === "undefined" ? [] : bubbleSort([...belts]);

    return (
        <ul className={"biography-ul"}>
            <li className={"biography-li"} onClick={() => handleClick("name.fullName", id)}>{fullName}</li>
            <li className={"biography-li"} onClick={() => handleClick("age", id)}>{age}</li>
            <li className={"biography-li"} onClick={() => handleClick("birthYear", id)}>{birthYear}</li>
            <li className={"biography-li"} onClick={() => handleClick("weight", id)}>{weight}</li>
            {<li className={"biography-li"} onClick={() => handleClick("belts", id)}>
                <ul>
                    {sortedBelts.map(({beltName, year}, index) => (
                        <li key={index}>{year} - {beltName}</li>
                    ))}
                </ul>
            </li>}
        </ul>
    );
}

export default ListOfParameters;