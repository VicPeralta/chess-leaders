import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import './Leader.css';

const Leader = ({ index, rank, username }) => (
  <div className="leader-row">
    <p className="rank highlighted">
      #
      {rank}
    </p>
    <p className="user">{username}</p>
    <Link to={`/playercard/${username}/${index}`} className="more">
      <BiRightArrowCircle size={30} />
    </Link>
  </div>
);

Leader.propTypes = {
  index: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};

export default Leader;
