"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./EventsPage.module.css";

const ExpandableDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [description]);

  return (
    <div>
      <p
        ref={textRef}
        className={
          expanded ? styles.eventDescriptionExpanded : styles.eventDescription
        }
      >
        {description}
      </p>
      {isClamped || expanded ? (
        <button
          className={styles.readMoreBtn}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
};

export default ExpandableDescription;
