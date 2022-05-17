import React, {useState} from "react";
import pregeneratedPersons from "./prepared-persons/pregeneratedPersons";
import ParameterList from "./parameter-lists/ParameterList";
import "../../styles.css";
import TitleListOfParameters from "./parameter-lists/TitleParameterList";
import sortPersons from "./sorters/sortPersons";

const ELEMENTS_TO_DISPLAY = 3;

const listOfAllPersons = pregeneratedPersons;

const BiographyPage = () => {

    const [personsOnScreen, setPersonsArr] = useState(listOfAllPersons.slice(0, ELEMENTS_TO_DISPLAY));

    /*Boolean value that shows in which order parameters should be displayed
    (from greatest to lowest or vice versa)*/
    const [sortFromGreatest, setSortFromGreatest] = useState(false);

    const sortOnClick = (componentToCompare) => {
        const sortedPersons = sortPersons([...personsOnScreen], componentToCompare, sortFromGreatest);
        setSortFromGreatest(!sortFromGreatest);
        setPersonsArr(sortedPersons);
    }

    const addPerson = () => {
        if (personsOnScreen.length < listOfAllPersons.length) {
            const newPerson = listOfAllPersons[personsOnScreen.length];
            setPersonsArr([...personsOnScreen, newPerson]);
        }
    }

    const removePerson = () => {
        setPersonsArr(personsOnScreen.slice(0, -1));
    }

    const onSaveChanges = (field, value, id) => {
        const newPersons = personsOnScreen.map((person) => {
            if (person.id === id) {
                return {...person, personInfo: {...person.personInfo, [field]: value}}
            }
            return person;
        });
        setPersonsArr(newPersons);
    }

    return (
        <>
            <h1>Famous boxers you have to know about!</h1>
            <TitleListOfParameters sortOnClick={sortOnClick}/>

            {personsOnScreen.map(({id, personInfo: {fullName, age, birthYear, weight, belts}}) => (
                <ParameterList
                    key={id}
                    id={id}
                    fullName={fullName}
                    age={age}
                    birthYear={birthYear}
                    weight={weight}
                    belts={belts}
                    onSaveChanges={onSaveChanges}
                />
            ))}

            <button className={"big-red-btn"} onClick={addPerson}>Add new person</button>
            <button className={"big-red-btn"} onClick={removePerson}>Remove last person</button>
        </>
    )
}

export default BiographyPage;