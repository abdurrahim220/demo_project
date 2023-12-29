import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home" },
    { link: "Nos offers" },
    { link: "Extra" },
    { link: "A propos" },
    { link: "FAQ" },
    { link: "Contact" },
  ];

  return (
    <header className="w-full  z-[50] fixed top-0">
      <nav
        className={`py-4  bg-[#FFFFFF] lg:px-14 px-4  ${
          isSticky ? "shadow" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center gap-8">
            <p className="flex items-center">
              <span className="text-3xl font-bold">@</span>albertExtra
            </p>
            <ul className="lg:flex space-x-12 hidden">
              {navItem.map(({ link, index }) => (
                <a
                  smooth="true"
                  offset={-100}
                  key={index}
                  className="grid p-2 my-3 rounded-md  hover:rounded-md transition-all duration-500"
                >
                  {link}
                </a>
              ))}
            </ul>
            {/* <div className="flex justify-center items-center bg-blue-400 rounded-md px-4 gap-1 text-white">
            <FaRegUser /> Props
            </div> */}

            {/* menu btn for only mobile device */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
          </div>

          {/* items for mobile device*/}
          <div
            className={`space-y-4 px-4 mt-16 bg-gray-200  ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItem.map(({ link, path }) => (
              <span
                key={path}
                className="grid justify-center items-center mt-3"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
