import ProgressCircle from '../ProgressCircle/ProgressCircle';
import './Fetching.css';

const Fetching = () => (
  <div className="fetching">
    <p>Retrieving data </p>
    <p>from chess.com</p>
    <p>Please wait...</p>
    <ProgressCircle />
  </div>
);

export default Fetching;
