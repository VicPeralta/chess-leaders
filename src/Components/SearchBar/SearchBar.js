import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import './SearchBar.css';

const SearchBar = (
  {
    searchHandler, backText, backPath, searchText,
  },
) => {
  const handeChange = (event) => {
    searchHandler(event.target.value);
  };
  return (
    <div className="search-bar">
      <div className="back-section">
        <Link to={backPath}>
          <IoIosArrowBack size={20} />
        </Link>
        <span className="back-text">{backText}</span>
      </div>
      <input type="text" placeholder={searchText} className="search" onChange={handeChange} />
      <div className="icons">
        <BiMicrophone size={20} style={{ margin: '0 10px' }} />
        <AiOutlineSetting size={20} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  backText: PropTypes.string.isRequired,
  backPath: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;