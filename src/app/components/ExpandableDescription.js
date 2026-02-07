"use client";

import { useState } from "react";
import styles from "./LatestEvent.module.css";

const ExpandableDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={
          expanded ? styles.eventDescriptionExpanded : styles.eventDescription
        }
      >
        {description}
      </p>
      <button
        className={styles.readMoreBtn}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default ExpandableDescription;
