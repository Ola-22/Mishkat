import React, { useEffect } from "react";

function Button({ button, filter, dataSlide, setMenuItem , active, setActive}) {

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