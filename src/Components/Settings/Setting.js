import PropTypes from 'prop-types';
import { useState } from 'react';
import changeThemeColor, { saveThemeToLocalStorage } from '../../utils';
import './Settings.css';

const Settings = ({ show, onClose, color }) => {
  const classList = `setting-container ${show ? 'show' : 'hide'}`;
  const [stateColor, setColor] = useState(color);
  const changeColor = (e) => {
    changeThemeColor(e.target.value);
    saveThemeToLocalStorage(e.target.value);
    setColor(e.target.value);
  };

  return (
    <div className={classList}>
      <div id="sideBar" role="presentation">
        <button type="button" onClick={onClose}>X</button>
        <div className="color-options">
          <label htmlFor="pink">
            <input
              type="radio"
              id="pink"
              name="color"
              value="Pink"
              onChange={changeColor}
              checked={stateColor === 'Pink'}
            />
            Pink
          </label>
          <label htmlFor="blue">
            <input
              type="radio"
              id="blue"
              name="color"
              value="Blue"
              onChange={changeColor}
              checked={stateColor === 'Blue'}
            />
            Blue
          </label>
        </div>
      </div>
    </div>
  );
};
Settings.defaultProps = {
  show: false,
  color: 'Pink',
};

Settings.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  color: PropTypes.string,
};
export default Settings;
