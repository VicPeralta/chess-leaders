import king from '../../assets/whiteQueen.png';
import './Header.css';

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
