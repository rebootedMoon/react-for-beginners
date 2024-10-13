import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Movie({
  id,
  name,
  thumbnail,
  series,
  stories,
}) {
  return (
    <div>
      <h2>
        <Link to={`/character/${id}`}>{name} </Link>{" "}
      </h2>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt="Movie Thumbnail"
      />
      <h3>Series</h3>
      <ul>
        {series.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <h3>Stories</h3>
      <ul>
        {stories.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  series: PropTypes.arrayOf(PropTypes.string).isRequired,
  stories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
