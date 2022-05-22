import React from "react";
import pregeneratedPersons from "../../сomponents/biographyParameterLists/prepared-persons/pregeneratedPersons";
import "../../styles.css";
import sortPersons from "../../helper/sorters/sortPersons";
import BiographyPageView from "./BiographyPageView";

let listOfAllPersons = [];

class BiographyPage extends React.Component {
    state = {
        personsOnScreen: [],
        /*Boolean value that shows in which order parameters should be displayed
        (from greatest to lowest or vice versa)*/
        sortFromGreatest: false
    }

    componentDidMount() {
        listOfAllPersons = [...pregeneratedPersons];
    }

    sortOnClick = (componentToCompare) => {
        const sortedPersons = sortPersons(
            [...this.state.personsOnScreen], componentToCompare, this.state.sortFromGreatest
        );

        this.setState((state) => {
            return {
                sortFromGreatest: !state.sortFromGreatest,
                personsOnScreen: sortedPersons
            }
        });
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
            <BiographyPageView
                personsOnScreen={this.state.personsOnScreen}
                sortOnClick={this.sortOnClick}
                addPerson={this.addPerson}
                removePerson={this.removePerson}
                onSaveChanges={this.onSaveChanges}
            />
        )
    }
}

export default BiographyPage;