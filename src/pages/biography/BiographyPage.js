import React, {useState} from "react";
import pregeneratedPersons from "./pregeneratedPersons";
import ListOfParameters from "./ListOfParameters";
import "../../styles.css";
import TitleListOfParameters from "./TitleListOfParameters";

/*Boolean value that shows in which order parameters should be displayed
(from greatest to lowest or vice versa)*/
let startFromGreatest = false;

const listOfAllPersons = pregeneratedPersons;

const BiographyPage = () => {

    const [personsOnScreen, setPersonsArr] = useState([]);

    /*Function that returns requested value of multi-level objects by string path.*/
    const getObjValue = (obj, path) => {
        path = path.split(".");
        let current = obj;
        while (path.length) {
            if (typeof current !== "object") {
                return undefined;
            }
            current = current[path.shift()];
        }
        return current;
    }

    const sortOnClick = (componentToCompare) => {
        const temporaryArray = personsOnScreen;
        temporaryArray.sort((firstPerson, secondPerson) => {
            let firstValue = getObjValue(firstPerson, componentToCompare);
            let secondValue = getObjValue(secondPerson, componentToCompare);
            if (firstValue > secondValue) return startFromGreatest ? 1 : -1;
            if (firstValue < secondValue) return startFromGreatest ? -1 : 1;
            return 0;
        });
        startFromGreatest = !startFromGreatest;
        setPersonsArr([...temporaryArray]);
    }

    const addPerson = () => {
        if (listOfAllPersons.length > 0) {
            setPersonsArr([...personsOnScreen, listOfAllPersons.pop()]);
        }
    }

    const removePerson = () => {
        if (personsOnScreen.length > 0) {
            listOfAllPersons.push(personsOnScreen.pop());
            setPersonsArr([...personsOnScreen]);
        }
    }

    return (
        <>
            <h1>Famous boxers you have to know about!</h1>
            <TitleListOfParameters handleClick={sortOnClick}/>
            {personsOnScreen.map(({id, name, age, birthYear, weight, belts}) => (
                <ListOfParameters key={id}
                                  id={id}
                                  fullName={name.fullName}
                                  age={age}
                                  birthYear={birthYear}
                                  weight={weight}
                                  belts={belts}
                                  handleClick={sortOnClick}/>
            ))}

            <button className={"big-red-btn"} onClick={addPerson}>Add new person</button>
            <button className={"big-red-btn"} onClick={removePerson}>Remove last person</button>
        </>
    )
}


export default BiographyPage;