import React, { useState, useEffect, useRef } from "react";

const Nav = () => {
  const navEl = useRef(null);

  useEffect(() => {
    const headerEl = document.getElementById("main-head");

    const onScrollEffects = () => {
      const distanceY =
        window.pageYOffset || document.documentElement.scrollTop;
      const stickOn = headerEl.offsetHeight;
      const shrinkOn = headerEl.offsetHeight;

      distanceY > stickOn
        ? navEl.current.classList.add("sticky")
        : navEl.current.classList.remove("sticky");

      distanceY > shrinkOn
        ? navEl.current.classList.add("shrunken")
        : navEl.current.classList.remove("shrunken");
    };

    window.addEventListener("scroll", onScrollEffects);

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div ref={navEl} id="main-nav" className="main-nav">
      nav
    </div>
  );
};

export default Nav;
