import { FaChessPawn } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <div className="header">
    <FaChessPawn size={80} />
    <h1>
      chess.com
      <br />
      leaders
    </h1>
  </div>
);

export default Header;
