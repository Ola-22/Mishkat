import React, { useEffect, useState } from "react";

function Button({ button, filter, dataSlide, setMenuItem }) {
  const [active, setActive] = useState(0);

  function someFunct(index) {
    setActive(index);
  }

  useEffect(() => {
    if (active === 0) {
      setMenuItem(dataSlide);
    }
  });
  return (
    <div className="buttons">
      {button?.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              filter(cat);
              someFunct(i);
            }}
            onChange={() => filter(cat)}
            className={active === i ? "btn active" : "btn"}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Button;