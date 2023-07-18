import './smallBox.scss';

const SmallBox = ({ headingText }) => {
  return (
    <div className="smallBox">
      <div className="heading">
        <h3>{headingText}</h3>
        <span>(10)</span>
      </div>
      <div className="line" />
      <div className="price">$12.45</div>
      <div className="text">
        <div className="percentage">+(25%)</div>
        <div className="amount">$5000</div>
      </div>
    </div>
  );
};

export default SmallBox;
