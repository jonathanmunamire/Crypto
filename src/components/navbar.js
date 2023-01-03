import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h3>CRYPTO</h3>
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/display">Display</Link>
    </div>
  </nav>
);

export default Navbar;
