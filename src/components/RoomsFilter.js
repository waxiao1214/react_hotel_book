import React from 'react';
import { useContext } from 'react';
import { Context } from './Context';
import Title from './Title';

const getUnique = (items, value) => [
  ...new Set(items.map(item => item[value])),
];

export default function RoomsFilter({ rooms }) {
  const context = useContext(Context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let guests = getUnique(rooms, 'capacity');
  guests = guests.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price {price}€</label>
          <input
            className="form-control"
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">
            room size (m<sup>2</sup>)
          </label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
          </div>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
