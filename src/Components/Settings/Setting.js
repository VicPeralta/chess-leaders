import PropTypes from 'prop-types';
import './Settings.css';

const Settings = ({ show, onClose }) => {
  const classList = `sideBar ${show ? 'show' : 'hide'}`;
  const changeColor = (e) => {
    const root = document.querySelector(':root');
    if (e.target.value === 'Blue') {
      root.style.setProperty('--bg-color', 'rgb(67, 105, 178)');
      root.style.setProperty('--primary-color', 'rgb(59, 90, 154)');
      root.style.setProperty('--highlighted-card', 'rgb(69, 99, 159)');
      root.style.setProperty('--alternate-color', 'rgb(68, 103, 172)');
    } else {
      root.style.setProperty('--bg-color', 'rgb(223, 71, 130)');
      root.style.setProperty('--primary-color', 'rgb(251, 81, 146)');
      root.style.setProperty('--highlighted-card', 'rgb(244, 80, 143)');
      root.style.setProperty('--alternate-color', 'rgb(214, 69, 124)');
    }
  };

  return (
    <div className={classList} id="sideBar" role="presentation">
      <button type="button" onClick={onClose}>X</button>
      <div className="color-options">
        <label htmlFor="pink">
          <input type="radio" id="pink" name="color" value="Pink" onChange={changeColor} />
          Pink
        </label>
        <label htmlFor="blue">
          <input type="radio" id="blue" name="color" value="Blue" onChange={changeColor} />
          Blue
        </label>
      </div>
    </div>
  );
};
Settings.defaultProps = {
  show: false,
};

Settings.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
export default Settings;
