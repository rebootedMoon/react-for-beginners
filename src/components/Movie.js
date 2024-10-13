import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function Movie({
  id,
  name,
  thumbnail,
  series,
  stories,
}) {
  const content = [
    {
      tab: "Series",
      content: series,
    },
    {
      tab: "Stories",
      content: stories,
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <h3 className={styles.title}>
          <Link to={`/character/${id}`}>{name} </Link>{" "}
        </h3>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="Movie Thumbnail"
        />
      </div>
      <div className={styles.contentSection}>
        <div className={styles.tabs}>
          {content.map((section, index) => (
            <button onClick={() => changeItem(index)}>
              {section.tab}
            </button>
          ))}
        </div>
        <ul className={styles.list}>
          {currentItem.content.items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
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
