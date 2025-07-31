import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Home from "../routs/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, duration: 0.6 }}
      >
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images\myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <FaCartArrowDown />
            <Link to="/bag" className="action_name">
              Bag
            </Link>
            <Link to="/bag" className="bag-item-count">
              {bag.length}
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
