import React, {useState} from "react";
import pregeneratedPersons from "./pregeneratedPersons";
import ListOfParameters from "./ListOfParameters";
import "../../styles.css";

/*Boolean value that shows in which order parameters should be displayed
(from greatest to lowest or vice versa)*/
let startFromGreatest = false;

const listOfAllPersons = pregeneratedPersons;

/*The page that contains information about famous boxers.*/
const BiographyPage = () => {

    const [personsOnScreen, setPersonArr] = useState([]);

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

    /*Function that sorts boxers by chosen parameter.*/
    const sortOnClick = (componentToCompare) => {
        personsOnScreen.sort((firstPerson, secondPerson) => {
            let firstValue = getObjValue(firstPerson, componentToCompare);
            let secondValue = getObjValue(secondPerson, componentToCompare);
            if (firstValue > secondValue) return startFromGreatest ? 1 : -1;
            if (firstValue < secondValue) return startFromGreatest ? -1 : 1;
            return 0;
        });
        startFromGreatest = !startFromGreatest;
        setPersonArr([...personsOnScreen]);
    }

    /*Function that adds person with all parameters on screen.*/
    const addPerson = () => {
        if (listOfAllPersons.length > 0) {
            setPersonArr([...personsOnScreen, listOfAllPersons.pop()]);
        }
    }

    /*Function that removes person from screen.*/
    const removePerson = () => {
        if (personsOnScreen.length > 0) {
            listOfAllPersons.push(personsOnScreen.pop());
            setPersonArr([...personsOnScreen]);
        }
    }

    return (
        <>
            <h1>Famous boxers you have to know about!</h1>
            {/*Heading list that shows what parameter is represented in each row.*/}
            <ListOfParameters key={0}
                              fullName={"Full Name"}
                              age={"Age"}
                              birthYear={"Birth Year"}
                              weight={"Weight"}
                              belts={[{beltName: "Belt Name", year: "Year"}]}
                              handleClick={sortOnClick}/>

            {/*Here array of components is created from persons' data*/}
            {personsOnScreen.map(({id, name, age, birthYear, weight, belts}) => (
                <ListOfParameters key={id}
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