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
      </form>
    </section>
  );
}
