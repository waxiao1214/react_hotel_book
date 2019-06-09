import React, { Component } from 'react';
import Client from '../Contentful';
import PropTypes from 'prop-types';

export const Context = React.createContext();
export const { Provider, Consumer } = Context;

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      // Receive data from Contentful
      const response = await Client.getEntries({
        content_type: 'velvetHotel',
        order: 'sys.createdAt',
      });

      const rooms = this.formatData(response.items);
      const featuredRooms = rooms.filter(room => room.featured === true);
      const maxPrice = Math.max(...rooms.map(item => item.price));
      const maxSize = Math.max(...rooms.map(item => item.size));

      this.setState(() => ({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  formatData = items => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      /* the new images property from the rooms object will overwrite the original property. Instead of an array with objects it now has a url string as a value */
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

  handleChange = e => {
    const target = e.target;
    const name = e.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }), this.filterRooms);
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];
    // the filter condition will do automatic type conversion for the string that is returned from the select element, because we compare with a number in the if condition, so this is just to be safe.
    capacity = parseInt(capacity, 10);

    //  filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
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
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};

RoomProvider.propTypes = {
  children: PropTypes.element,
};
