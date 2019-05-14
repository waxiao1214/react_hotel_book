import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext();

export default class RoomProvider extends Component {
  state = {

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
