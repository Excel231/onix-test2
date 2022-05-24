import ParameterList from "../ParameterList/ParameterList";
import React, {useState} from "react";
import PropType from "prop-types";

const DraggableList = ({personsOnScreen, onSaveChanges, changePersonsOnScreen}) => {

    const [currentDraggedPerson, setCurrentDraggedPerson] = useState(null);

    const onDragEnter = (e, person) => {
        setCurrentDraggedPerson(person);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, personToDropOn) => {
        e.preventDefault();
        const newArr = personsOnScreen.map((currentPerson) => {
            if (currentPerson.id === personToDropOn.id) return currentDraggedPerson;
            if (currentPerson.id === currentDraggedPerson.id) return personToDropOn;
            return currentPerson;
        })
        changePersonsOnScreen(newArr);
    }

    return (
        <>
            {
                personsOnScreen.map((person, index) => (
                    <div key={index}
                         draggable={"true"}
                         onDragStart={(e) => onDragEnter(e, person)}
                         onDragOver={(e) => onDragOver(e)}
                         onDrop={(e) => onDrop(e, person)}
                    >
                        <ParameterList
                            key={person.id}
                            id={person.id}
                            fullName={person.personInfo.fullName}
                            age={person.personInfo.age}
                            birthYear={person.personInfo.birthYear}
                            weight={person.personInfo.weight}
                            belts={person.personInfo.belts}
                            onSaveChanges={onSaveChanges}
                        />
                    </div>
                ))
            }
        </>
    );
}

DraggableList.propTypes = {
    personsOnScreen: PropType.array,
    onSaveChanges: PropType.func,
    changePersonsOnScreen: PropType.func
}

export default DraggableList;