import React from 'react';
import PropType from 'prop-types';
import DraggableListView from './DraggableListView';
import './styles.css';

const DEFAULT_INACTIVE_STYLE = 'biography-ul';

const DEFAULT_ACTIVE_STYLE = 'selected-biography-ul';

class DraggableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDraggedPerson: null,
      currentActivePerson: null,
      activeStyle: DEFAULT_ACTIVE_STYLE,
      parameterIsEdited: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress);
  }

  getPersonIndex(person) {
    const { personsOnScreen } = this.props;
    return personsOnScreen.indexOf(person);
  }

  dragStartHandler = (person) => {
    this.setState({ currentDraggedPerson: person });
  };

  dragOverHandler = (e) => {
    e.preventDefault();
  };

  dropHandler = (e, personToDropOn) => {
    e.preventDefault();
    const { personsOnScreen } = this.props;
    const newArr = personsOnScreen.map((currentPerson) => {
      const { currentDraggedPerson } = this.state;
      if (currentPerson.id === personToDropOn.id) return currentDraggedPerson;
      if (currentPerson.id === currentDraggedPerson.id) return personToDropOn;
      return currentPerson;
    });
    const { changePersonsOnScreen } = this.props;
    changePersonsOnScreen(newArr);
  };

  handleMouseClick = (person) => {
    this.setState({ currentActivePerson: person });
  };

  handleParameterIsEdited = () => {
    this.setState((state) => {
      return { parameterIsEdited: !state.parameterIsEdited };
    });
  };

  handleKeypress = (e) => {
    const { parameterIsEdited } = this.state;
    const { personsOnScreen } = this.props;
    if (parameterIsEdited) return;
    const keyPressed = e.key;
    switch (keyPressed) {
      case ('1'):
        this.setState({ activeStyle: `${DEFAULT_ACTIVE_STYLE}-white` });
        break;

      case ('2'):
        this.setState({ activeStyle: `${DEFAULT_ACTIVE_STYLE}-green` });
        break;

      case ('3'):
        this.setState({ activeStyle: `${DEFAULT_ACTIVE_STYLE}-blue` });
        break;

      case ('ArrowUp'):
        e.preventDefault();
        this.setState((state) => {
          return {
            currentActivePerson:
                personsOnScreen[this.getPersonIndex(state.currentActivePerson) - 1]
          };
        });
        break;

      case ('ArrowDown'):
        e.preventDefault();
        this.setState((state) => {
          return {
            currentActivePerson:
                personsOnScreen[this.getPersonIndex(state.currentActivePerson) + 1]
          };
        });
        break;

      default:
        this.setState({ activeStyle: DEFAULT_ACTIVE_STYLE });
        break;
    }
  };

  render() {
    const { personsOnScreen, onSaveChanges } = this.props;
    const { activeStyle, currentActivePerson } = this.state;
    return (
      <DraggableListView
        personsOnScreen={personsOnScreen}
        onSaveChanges={onSaveChanges}
        inactiveStyle={DEFAULT_INACTIVE_STYLE}
        activeStyle={activeStyle}
        dragStartHandler={this.dragStartHandler}
        dragOverHandler={this.dragOverHandler}
        dropHandler={this.dropHandler}
        handleMouseClick={this.handleMouseClick}
        currentActivePerson={currentActivePerson}
        handleParameterIsEdited={this.handleParameterIsEdited}
      />
    );
  }
}

DraggableList.propTypes = {
  personsOnScreen: PropType.arrayOf(PropType.shape({})).isRequired,
  onSaveChanges: PropType.func.isRequired,
  changePersonsOnScreen: PropType.func.isRequired
};

export default DraggableList;
