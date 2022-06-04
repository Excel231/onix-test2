import React from "react";
import ParameterList from "../ParameterList/ParameterList";

class DraggableListView extends React.Component {
    render() {
        const {
            personsOnScreen,
            onSaveChanges,
            inactiveStyle,
            activeStyle,
            dragStartHandler,
            dragOverHandler,
            dropHandler,
            handleMouseClick,
            currentActivePerson,
            handleParameterIsEdited
        } = this.props;
        return (
            <>
                {
                    personsOnScreen.map((person, index) => (
                        <div
                            key={index}
                            draggable={"true"}
                            onDragStart={() => dragStartHandler(person)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, person)}
                            onClick={() => handleMouseClick(person)}
                        >
                            <ParameterList
                                key={person.id}
                                id={person.id}
                                fullName={person.personInfo.fullName}
                                photo={person.personInfo.photo}
                                birthYear={person.personInfo.birthYear}
                                weight={person.personInfo.weight}
                                belts={person.personInfo.belts}
                                onSaveChanges={onSaveChanges}
                                listStyle={person === currentActivePerson ?
                                    activeStyle : inactiveStyle}
                                handleParameterIsEdited={handleParameterIsEdited}
                            />
                        </div>
                    ))
                }
            </>
        );
    }
}

export default DraggableListView;