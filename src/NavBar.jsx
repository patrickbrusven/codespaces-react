import { useEffect, useRef } from "react";

function NavBar() {
  const navRef = useRef();
  const handleScroll = () => {
    if (navRef) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 200) {
        navRef.current.classList.add("nav-hide");
      } else {
        navRef.current.classList.remove("nav-hide");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="nav-bar">
      <div className="nav-bar__container">
        <p>Patrick Brusven</p>
        <ol>
          <li>
            <span>&#9657;</span>About
          </li>
          <li>
            <span>&#9657;</span>Experience
          </li>
          <li>
            <span>&#9657;</span>Projects
          </li>
          <li>
            <span>&#9657;</span>Inspo
          </li>
          <li>Resume</li>
        </ol>
      </div>
    </nav>
  );
}

export default NavBar;
