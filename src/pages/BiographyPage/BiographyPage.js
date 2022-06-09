import React, {useState} from "react";
import "../../styles.css";
import sortPersons from "../../helper/sorters/sortPersons";
import BiographyPageView from "./BiographyPageView";
import pregeneratedPersons from "../../helper/pregenerated-persons/pregeneratedPersons";


const BiographyPage = () => {
    const [personsOnScreen, setPersonsOnScreen] = useState([]);
    /*Boolean value that shows in which order parameters should be displayed
    (from greatest to lowest or vice versa)*/
    const [sortFromGreatest, setSortFromGreatest] = useState(false);

    const sortOnClick = (componentToCompare) => {
        setSortFromGreatest(!sortFromGreatest);
        setPersonsOnScreen(sortPersons(
            [...personsOnScreen], componentToCompare, sortFromGreatest
        ));
    }

    const addPerson = () => {
        if (personsOnScreen.length < pregeneratedPersons.length) {
            const newPerson = pregeneratedPersons[personsOnScreen.length];
            setPersonsOnScreen([...personsOnScreen, newPerson]);
        }
    }

    const removePerson = () => {
        setPersonsOnScreen(personsOnScreen.slice(0, -1));
    }

    const onSaveChanges = (field, value, id) => {
        const newPersons = personsOnScreen.map((person) => {
            return person.id === id ? {...person, personInfo: {...person.personInfo, [field]: value}} : person;
        });
        setPersonsOnScreen(newPersons);
    }

    const changePersonsOnScreen = (newPersonsArray) => {
        setPersonsOnScreen(newPersonsArray);
    }

    return (
        <BiographyPageView
            personsOnScreen={personsOnScreen}
            sortOnClick={sortOnClick}
            addPerson={addPerson}
            removePerson={removePerson}
            onSaveChanges={onSaveChanges}
            changePersonsOnScreen={changePersonsOnScreen}
        />
    )
}

export default BiographyPage;