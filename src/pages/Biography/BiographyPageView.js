import TitleListOfParameters from "../../сomponents/biographyParameterLists/TitleParameterList/TitleParameterList";
import ParameterList from "../../сomponents/biographyParameterLists/ParameterList/ParameterList";
import React from "react";
import PropType from "prop-types";

class BiographyPageView extends React.Component {
    render() {
        const {personsOnScreen, sortOnClick, addPerson, removePerson, onSaveChanges} = this.props;
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