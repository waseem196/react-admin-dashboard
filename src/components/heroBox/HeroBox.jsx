import './heroBox.scss';
import SearchItem from './searchItem/SearchItem';

const HeroBox = () => {
  return (
    <div className="heroBox">
      <h2>Welcome Tim Collins!</h2>
      <div className="searchItems">
        <SearchItem label="Customer" />
        <SearchItem label="Invoice #" />
        <SearchItem label="Ticket #" />
        <SearchItem label="Inventory" />
      </div>
    </div>
  );
};

export default HeroBox;
