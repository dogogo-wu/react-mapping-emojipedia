import React from "react";

function Entry(porps) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {porps.emoji}
        </span>
        <span>{porps.name}</span>
      </dt>
      <dd>{porps.meaning}</dd>
    </div>
  );
}

export default Entry;
