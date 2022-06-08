import TitleListOfParameters from "../../сomponents/biographyParameterLists/TitleParameterList/TitleParameterList";
import React from "react";
import PropType from "prop-types";
import DraggableList from "../../сomponents/biographyParameterLists/DraggableList/DraggableList";
import BigRedButton from "../../сomponents/buttons/BigRedButton/BigRedButton";

class BiographyPageView extends React.Component {
    render() {
        const {
            personsOnScreen,
            sortOnClick,
            addPerson,
            removePerson,
            onSaveChanges,
            changePersonsOnScreen
        } = this.props;

        return (
            <>
                <TitleListOfParameters sortOnClick={sortOnClick}/>

                <DraggableList
                    personsOnScreen={personsOnScreen}
                    onSaveChanges={onSaveChanges}
                    changePersonsOnScreen={changePersonsOnScreen}
                />
                <div>
                    <BigRedButton onClick={addPerson}>Add new person</BigRedButton>
                    <BigRedButton onClick={removePerson}>Remove last person</BigRedButton>
                </div>

            </>
        );
    }
}

BiographyPageView.propTypes = {
    personsOnScreen: PropType.array,
    sortOnClick: PropType.func,
    addPerson: PropType.func,
    removePerson: PropType.func,
    onSaveChanges: PropType.func
}

export default BiographyPageView;