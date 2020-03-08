import React, { useState, useEffect } from "react";

const LegalLocalStorage = () => {
  const [isOpen, setOpen] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpen(
        (global.localStorage && global.localStorage.getItem("legal-accept")) ||
          0
      );
    }, 100);
  });

  const hasAccepted = Boolean(Number(isOpen));

  return hasAccepted ? (
    <span />
  ) : (
    <div id="legal">
      <section>
        <header>
          Warning You Must Be A Trade Company And Over 18+ To Use This Site.
        </header>
        <div>
          <button
            className="greenBtn"
            onClick={() => (
              setOpen(1), global.localStorage.setItem("legal-accept", "1")
            )}
          >
            I meet all the requirements
          </button>
          <button
            className="redBtn"
            onClick={() => (global.location.href = "https://www.google.com")}
          >
            I do not meet the requirements
          </button>
        </div>
      </section>
    </div>
  );
};

export default LegalLocalStorage;