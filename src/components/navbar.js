import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="navDiv">
      <Link className="link" to="/">&times;</Link>
    </div>
    <div>
      <h3>CRYPTO</h3>
    </div>
  </nav>
);

export default Navbar;
