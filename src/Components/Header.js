import './Header.css';
import king from '../assets/whiteQueen.png';

const Header = () => (
  <div className="header">
    <img src={king} alt="Header" />
    <h1>
      chess.com
      <br />
      leaders
    </h1>
  </div>
);

export default Header;
