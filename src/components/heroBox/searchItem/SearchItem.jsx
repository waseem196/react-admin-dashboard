import './searchItem.scss';

const SearchItem = ({ placeHolder, label }) => {
  return (
    <div className="inputContainer">
      <p className="text">{label}</p>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchItem;
