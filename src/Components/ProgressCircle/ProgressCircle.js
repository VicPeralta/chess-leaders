import './ProgressCircle.css';

const ProgressCircle = () => (
  <div className="circle-wrap" data-testid="circle-element">
    <div className="circle">
      <div className="mask full">
        <div className="fill" />
      </div>
      <div className="mask half">
        <div className="fill" />
      </div>
      <div className="inside-circle" />
    </div>
  </div>
);

export default ProgressCircle;
