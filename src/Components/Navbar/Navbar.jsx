import logo from "../images/Logo.svg";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className='bg-navbar'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <Link>
          <img src={logo} alt='Logo' />
          </Link>
          <div className='bg-light nav_enner p-2 rounded-pill'>
            <BsFillBrightnessHighFill className='fs-2 ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
