import React, { Component } from 'react';
import items from '../data';

export const { Provider, Consumer } = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  }

  componentDidMount() {
    // format data for Contentful CMS
    const rooms = this.formatData(items)
    const featuredRooms = rooms.filter(room => room.featured === true);
    this.setState(() => ({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    }));
  }

  formatData = (items) => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      /* the new images property from the rooms object will overwrite the original property destructured by ...items.fields. Instead of an array with objects it now has a url string as a value */
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </Provider>
    )
  }
}