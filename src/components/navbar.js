import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => (
  <nav className="nav">
    <div className="navDiv">
      <Link className="link" to="/">
        <IoIosArrowBack size="1.4rem" className="back_icon" />
      </Link>
    </div>
    <h3 className="head">CRYPTO</h3>
    <AiFillSetting size="1.4rem" />
  </nav>
);

export default Navbar;
