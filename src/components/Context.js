import React, { Component } from 'react';
import items from '../data';
import PropTypes from 'prop-types';

export const { Provider, Consumer } = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    // format data for Contentful CMS
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    this.setState(() => ({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    }));
  }

  formatData = items => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      /* the new images property from the rooms object will overwrite the original property destructured by ...items.fields. Instead of an array with objects it now has a url string as a value */
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = slug => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export function withConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <Consumer>{value => <Component {...props} context={value} />}</Consumer>
    );
  };
}

Provider.propTypes = {
  value: PropTypes.shape({
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        breakfast: PropTypes.bool.isRequired,
        capacity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        extras: PropTypes.arrayOf(PropTypes.string).isRequired,
        featured: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string.isRequired,
        pets: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    sortedRooms: PropTypes.arrayOf(PropTypes.object).isRequired,
    featuredRooms: PropTypes.arrayOf(PropTypes.object).isRequired,
    getRoom: PropTypes.func.isRequired,
  }).isRequired,
};

RoomProvider.propTypes = {
  children: PropTypes.element,
};
