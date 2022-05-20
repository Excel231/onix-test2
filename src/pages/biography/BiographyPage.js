import React from "react";
import pregeneratedPersons from "./prepared-persons/pregeneratedPersons";
import ParameterList from "./parameter-lists/ParameterList";
import "../../styles.css";
import TitleListOfParameters from "./parameter-lists/TitleParameterList";
import sortPersons from "./sorters/sortPersons";

let listOfAllPersons = [];

class BiographyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personsOnScreen: [],
            /*Boolean value that shows in which order parameters should be displayed
            (from greatest to lowest or vice versa)*/
            sortFromGreatest: false
        }
    }

    componentDidMount() {
        listOfAllPersons = [...pregeneratedPersons];
    }

    sortOnClick = (componentToCompare) => {
        const sortedPersons = sortPersons(
            [...this.state.personsOnScreen], componentToCompare, this.state.sortFromGreatest
        );
        this.setState({sortFromGreatest: !this.state.sortFromGreatest, personsOnScreen: sortedPersons});
    }

    addPerson = () => {
        if (this.state.personsOnScreen.length < listOfAllPersons.length) {
            const newPerson = listOfAllPersons[this.state.personsOnScreen.length];
            this.setState({personsOnScreen: [...this.state.personsOnScreen, newPerson]});
        }
    }

    removePerson = () => {
        this.setState({personsOnScreen: this.state.personsOnScreen.slice(0, -1)});
    }

    onSaveChanges = (field, value, id) => {
        const newPersons = this.state.personsOnScreen.map((person) => {
            if (person.id === id) {
                return {...person, personInfo: {...person.personInfo, [field]: value}}
            }
            return person;
        });
        this.setState({personsOnScreen: newPersons});
    }

    render() {
        return (
            <>
                <h1>Famous boxers you have to know about!</h1>
                <TitleListOfParameters sortOnClick={this.sortOnClick}/>

                {this.state.personsOnScreen.map(({id, personInfo: {fullName, age, birthYear, weight, belts}}) => (
                    <ParameterList
                        key={id}
                        id={id}
                        fullName={fullName}
                        age={age}
                        birthYear={birthYear}
                        weight={weight}
                        belts={belts}
                        onSaveChanges={this.onSaveChanges}
                    />
                ))}

                <button className={"big-red-btn"} onClick={this.addPerson}>Add new person</button>
                <button className={"big-red-btn"} onClick={this.removePerson}>Remove last person</button>
            </>
        )
    }
}

export default BiographyPage;