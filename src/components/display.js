import PropTypes from 'prop-types';
import './display.css';

const Display = ({
  name, price, symbol, img,
}) => (
  <section className="mainDetails">
    <img className="img" src={img} alt={`${name}icon`} />
    <p className="item_details">{name}</p>
    <p className="item_details">{symbol}</p>
    <p className="item_details">
      {price}
      $
    </p>
  </section>
);

export default Display;

Display.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
