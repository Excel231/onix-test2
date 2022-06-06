import React from "react";
import "../../styles.css";
import sortPersons from "../../helper/sorters/sortPersons";
import BiographyPageView from "./BiographyPageView";
import pregeneratedPersons from "../../сomponents/biographyParameterLists/prepared-persons/pregeneratedPersons";


class BiographyPage extends React.Component {
    state = {
        personsOnScreen: [],
        /*Boolean value that shows in which order parameters should be displayed
        (from greatest to lowest or vice versa)*/
        sortFromGreatest: false
    }

    sortOnClick = (componentToCompare) => {
        this.setState((state) => {
            return {
                sortFromGreatest: !state.sortFromGreatest,
                personsOnScreen: sortPersons(
                    [...this.state.personsOnScreen], componentToCompare, this.state.sortFromGreatest
                )
            }
        });
    }

    addPerson = () => {
        if (this.state.personsOnScreen.length < pregeneratedPersons.length) {
            const newPerson = pregeneratedPersons[this.state.personsOnScreen.length];
            this.setState({personsOnScreen: [...this.state.personsOnScreen, newPerson]});
        }
    }

    removePerson = () => {
        this.setState({personsOnScreen: this.state.personsOnScreen.slice(0, -1)});
    }

    onSaveChanges = (field, value, id) => {
        const newPersons = this.state.personsOnScreen.map((person) => {
            return person.id === id ? {...person, personInfo: {...person.personInfo, [field]: value}} : person;
        });
        this.setState({personsOnScreen: newPersons});
    }

    changePersonsOnScreen = (newPersonsArray) => {
        this.setState({personsOnScreen: newPersonsArray});
    }

    render() {
        return (
            <BiographyPageView
                personsOnScreen={this.state.personsOnScreen}
                sortOnClick={this.sortOnClick}
                addPerson={this.addPerson}
                removePerson={this.removePerson}
                onSaveChanges={this.onSaveChanges}
                changePersonsOnScreen={this.changePersonsOnScreen}
            />
        )
    }
}

export default BiographyPage;