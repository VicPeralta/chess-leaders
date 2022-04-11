import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import daily from '../assets/daily.png';
import daily960 from '../assets/daily960.png';
import liveRapid from '../assets/rapid.png';
import liveBlitz from '../assets/blitz.png';
import liveBullet from '../assets/bullet.png';
import liveBughouse from '../assets/bug.png';
import liveBlitz960 from '../assets/blitz960.png';
import liveThreecheck from '../assets/three.png';
import liveCrazyhouse from '../assets/house.png';
import liveKingofthehill from '../assets/king.png';
import tactics from '../assets/tactics.png';
import rush from '../assets/rush.png';
import battle from '../assets/battle.png';
import './CategoryCard.css';

const icons = {
  daily,
  daily960,
  live_rapid: liveRapid,
  live_blitz: liveBlitz,
  live_bullet: liveBullet,
  live_bughouse: liveBughouse,
  live_blitz960: liveBlitz960,
  live_threecheck: liveThreecheck,
  live_crazyhouse: liveCrazyhouse,
  live_kingofthehill: liveKingofthehill,
  tactics,
  rush,
  battle,
};

const Category = ({ id, name, average }) => (
  <Link to={`/leaderboard/${id}`}>
    <div className="category-card" role="presentation" data-id={id}>
      <p>{name}</p>
      <img src={icons[name]} alt="the category" />
      <p>{average}</p>
    </div>
  </Link>
);

Category.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
};
export default Category;
