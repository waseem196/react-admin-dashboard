import './sentrixBox.scss';

const SentrixBox = () => {
  return (
    <div className="sentrixBox">
      <div className="logo">
        <span>Sentrix</span> Mobile
      </div>
      <div className="title">Store Profile</div>
      <div className="percentage">
        <div className="box">
          <div className="dot" />
        </div>
        <div className="number">62%</div>
      </div>
      <div className="link">complete your profile</div>
    </div>
  );
};

export default SentrixBox;
